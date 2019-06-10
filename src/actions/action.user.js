import {SET_USER_TYPES, GOOLE_SIGNIN_TYPES, FETCH_USER_TYPES, SIGNOUT_TYPES, FACEBOOK_SIGNIN_TYPES} from './types';
import {authRef, googleProvider, usersRef, facebookProvider, adminsRef} from './refs';
import _ from 'lodash';

export const setGoogleUser = ({ 
	user: { 
		uid, displayName, photoURL, phoneNumber, createdAt = Date.now(), lastLoginAt= Date.now()
	}, additionalUserInfo: {
		isNewUser=true, 
		profile:{
			family_name, given_name, id:profileId, email 
		},
		providerId
	}, 
	socialMedia='google'
}) => async dispatch => {
	const user = _.pickBy({
		uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,
		family_name, given_name, profileId
	}, _.identity);

	dispatch(SET_USER_TYPES.request(user));
	try {
		if (isNewUser){
			await usersRef.child(`/google:${uid}`).set(user);
		}else{
			await usersRef.child(`/google:${uid}`).update({
				photoURL, displayName, lastLoginAt
			});
		}
		dispatch(SET_USER_TYPES.success(user));
	} catch (error) {
		dispatch(SET_USER_TYPES.failure(error));
	}	
}

export const setFacebookUser = ({ 
	user: { 
		uid, displayName, photoURL, phoneNumber, createdAt = Date.now(), lastLoginAt= Date.now()
	}, additionalUserInfo: {
		isNewUser=true, 
		profile:{
			family_name, given_name, id:profileId, email 
		},
		providerId
	},
	socialMedia='facebook'
}) => async dispatch => {
	const user = _.pickBy({
		uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,
		family_name, given_name, profileId
	}, _.identity);
	
	dispatch(SET_USER_TYPES.request(user));
	try {
		if (isNewUser){
			await usersRef.child(`/facebook:${uid}`).set(user);
		}else{
			await usersRef.child(`/facebook:${uid}`).update({
				photoURL, displayName, lastLoginAt
			});
		}
		dispatch(SET_USER_TYPES.success(user));
	} catch (error) {
		dispatch(SET_USER_TYPES.failure(error));
	}	
}

export const googleLogin = () => async dispatch => {
	dispatch(GOOLE_SIGNIN_TYPES.request());	
	try {
		googleProvider.addScope('profile');
		googleProvider.addScope('email');
		const login = await authRef.signInWithPopup(googleProvider);
		if (!login.credential){
			return dispatch(GOOLE_SIGNIN_TYPES.failure({message: 'Invalid login'}));
		}
		dispatch(GOOLE_SIGNIN_TYPES.success(login));
		dispatch(setGoogleUser(login));
	} catch (error) {
		dispatch(GOOLE_SIGNIN_TYPES.failure(error));		
	}
}


export const facebookLogin = () => async dispatch => {
	dispatch(FACEBOOK_SIGNIN_TYPES.request());	
	try {
		// facebookProvider.addScope('profile');
		facebookProvider.addScope('email');
		facebookProvider.setCustomParameters({
			'display': 'popup'
		});

		const login = await authRef.signInWithPopup(facebookProvider);
		if (!login.credential){
			return dispatch(FACEBOOK_SIGNIN_TYPES.failure({message: 'Invalid login'}));
		}
		dispatch(FACEBOOK_SIGNIN_TYPES.success(login));
		dispatch(setFacebookUser(login));
	} catch (error) {
		dispatch(FACEBOOK_SIGNIN_TYPES.failure(error));		
	}
}

export const fecthUser = () => dispatch => {
	dispatch(FETCH_USER_TYPES.request());
		authRef.onAuthStateChanged(user => {
		// unsubscribe();
	
    if (user) {
			adminsRef.on("value",snap =>{
				if (snap){
					var admins = snap.val();
					const data = {
						...user.toJSON(),
						isAdmin: admins.indexOf(user.uid) !== -1
					}
					dispatch(FETCH_USER_TYPES.success(data));
				}
			})			
    } else {
			dispatch(FETCH_USER_TYPES.success(null));
    }
  });
}

export const singout = () => async dispatch => {
	dispatch(SIGNOUT_TYPES.request());
	await authRef.signOut();
	dispatch(SIGNOUT_TYPES.success());
}

