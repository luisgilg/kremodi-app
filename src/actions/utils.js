export const normalizeUser = ({ 
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,
	family_name, given_name, profileId

})=>({
	uid, displayName, email, photoURL, phoneNumber, providerId, createdAt, socialMedia, lastLoginAt,family_name, given_name, profileId
});


  
export const isSignedin = ({user}) => user && user.uid && user.displayName;