export const normalizeUser = ({ 
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,
	family_name, given_name, profileId, isAdmin

})=>({
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,family_name, given_name, profileId, isAdmin
});


export const isSignedin = ({user}) => user && user.uid && user.displayName;

export const isAdmin = ({user}) => isSignedin({user}) && user.isAdmin;
