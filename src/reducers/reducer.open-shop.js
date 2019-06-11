import {FETCH_OPEN_SHOP_TYPES, PUSH_OPEN_SHOP_TYPES, UPDATE_OPEN_SHOP_TYPES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
		
		case FETCH_OPEN_SHOP_TYPES.REQUEST:		
			return {
				openShops: state.openShops || []
			};
		case FETCH_OPEN_SHOP_TYPES.SUCCESS:		
			return {
				openShops: action.payload
			}
		case PUSH_OPEN_SHOP_TYPES.REQUEST:
		case PUSH_OPEN_SHOP_TYPES.SUCCESS:	
		case UPDATE_OPEN_SHOP_TYPES.REQUEST:
		case UPDATE_OPEN_SHOP_TYPES.SUCCESS:
		default:
      return state;
  }
};