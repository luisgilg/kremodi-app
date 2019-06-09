export const createType = (name) => ({
	[ `${name}_REQUEST`]: `${name}_REQUEST`,
	[ `${name}_SUCCESS`]: `${name}_SUCCESS`,
	[ `${name}_FAILURE`]: `${name}_FAILURE`,
	REQUEST: `${name}_REQUEST`,
	SUCCESS: `${name}_SUCCESS`,
	FAILURE: `${name}_FAILURE`,
	request: (payload) => ({
		type: `${name}_REQUEST`,
		payload
	}),
	success: (payload) => ({
		type: `${name}_SUCCESS`,
		payload
	}),
	failure: (error) => ({
		type: `${name}_FAILURE`,
		error
	})
});

export const request = (name, payload) => ({
	type: createType(name).REQUEST,
	payload
})

export const success = (name, payload) => ({
	type: createType(name).SUCCESS,
	payload
})

export const failure = (name, error) => ({
	type: createType(name).FAILURE,
	error
})

export const SET_USER_TYPES = createType('SET_USER');

export const GOOLE_SIGNIN_TYPES = createType('GOOLE_SIGNIN');

export const FETCH_USER_TYPES = createType('FETCH_USER');

export const SIGNOUT_TYPES = createType('SIGNOUT');

export const FACEBOOK_SIGNIN_TYPES = createType('FACEBOOK_SIGNIN');


