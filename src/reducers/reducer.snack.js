import {PUSH_PRODUCT_TYPES, UPDATE_PRODUCT_TYPES, SIGNOUT_TYPES, GOOLE_SIGNIN_TYPES, FACEBOOK_SIGNIN_TYPES, PUSH_OPEN_SHOP_TYPES, UPDATE_OPEN_SHOP_TYPES, DELETE_OPEN_SHOP_TYPES } from '../actions/types';

export default (state = {}, action) => {
	if (action.type.endsWith("_FAILURE")){
		return {
			id: new Date(),
			message: 'Ha ocurrido un ERROR'
		}
	}
	
  switch (action.type) {		
		case SIGNOUT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message: 'Has cerrado sesión exitosamente'
			};

		case PUSH_OPEN_SHOP_TYPES.SUCCESS:
		case PUSH_PRODUCT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Registro AGREGADO exitosamente'
			};

		case UPDATE_OPEN_SHOP_TYPES.SUCCESS:
		case UPDATE_PRODUCT_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Registro EDITADO exitosamente'
			};

		case GOOLE_SIGNIN_TYPES.SUCCESS:
		case FACEBOOK_SIGNIN_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Has iniciado sesión exitosamente'
			};

		case DELETE_OPEN_SHOP_TYPES.SUCCESS:
			return {
				id: new Date(),
				message:'Registro ELIMINADO exitosamente'
			};
		
    default:
      return state;
  }
};