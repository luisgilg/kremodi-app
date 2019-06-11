import {PUSH_PRODUCT_TYPES, UPDATE_PRODUCT_TYPES, SIGNOUT_TYPES, GOOLE_SIGNIN_TYPES, FACEBOOK_SIGNIN_TYPES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
		
		case SIGNOUT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message: 'Has cerrado sesión exitosamente'
			};

		case PUSH_PRODUCT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Producto agregado exitosamente'
			};

		case UPDATE_PRODUCT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Producto editado exitosamente'
			};
		case GOOLE_SIGNIN_TYPES.SUCCESS:
		case FACEBOOK_SIGNIN_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Has iniciado sesión exitosamente'
			};
		
    default:
      return state;
  }
};