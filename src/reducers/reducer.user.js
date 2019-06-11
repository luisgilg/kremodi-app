import { FACEBOOK_SIGNIN_TYPES, FETCH_USER_TYPES, GOOLE_SIGNIN_TYPES, SET_USER_TYPES, SIGNOUT_TYPES } from '../actions/types';
import { normalizeUser } from '../utils';


export default (state = {}, action) => {
  switch (action.type) {
		
		case GOOLE_SIGNIN_TYPES.REQUEST:
		case FACEBOOK_SIGNIN_TYPES.REQUEST:

			return {
				isSigning:true
			}

		case GOOLE_SIGNIN_TYPES.SUCCESS:
		case FACEBOOK_SIGNIN_TYPES.SUCCESS:
			return {
				isSigning: false,
				isSignedin: true
			}
				
		case SET_USER_TYPES.SUCCESS:
		case FETCH_USER_TYPES.SUCCESS:
			return {
				...state,
				...(action.payload ? normalizeUser(action.payload): { })
			};
		
		case GOOLE_SIGNIN_TYPES.FAILURE:
		case FACEBOOK_SIGNIN_TYPES.FAILURE:
		case SIGNOUT_TYPES.SUCCESS:
		case SIGNOUT_TYPES.FAILURE:
			return {};
    default:
      return state;
  }
};