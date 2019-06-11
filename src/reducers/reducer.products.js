import {FETCH_PRODUCTS_TYPES, PUSH_PRODUCT_TYPES, UPDATE_PRODUCT_TYPES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
		
		case FETCH_PRODUCTS_TYPES.REQUEST:		
			return {
				products: state.products || []
			};
		case FETCH_PRODUCTS_TYPES.SUCCESS:		
			return {
				products: action.payload
			}
		case PUSH_PRODUCT_TYPES.REQUEST:
		case PUSH_PRODUCT_TYPES.SUCCESS:	
		case UPDATE_PRODUCT_TYPES.REQUEST:
		case UPDATE_PRODUCT_TYPES.SUCCESS:
		default:
      return state;
  }
};