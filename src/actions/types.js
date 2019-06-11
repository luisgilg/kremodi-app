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

export const FETCH_PRODUCTS_TYPES = createType('FETCH_PRODUCTS');
export const PUSH_PRODUCT_TYPES = createType('PUSH_PRODUCT');
export const UPDATE_PRODUCT_TYPES = createType('UPDATE_PRODUCT');

export const FETCH_OPEN_SHOP_TYPES = createType('FETCH_OPEN_SHOP');
export const PUSH_OPEN_SHOP_TYPES = createType('PUSH_OPEN_SHOP');
export const UPDATE_OPEN_SHOP_TYPES = createType('UPDATE_OPEN_SHOP');
export const DELETE_OPEN_SHOP_TYPES = createType('DELETE_OPEN_SHOP');







