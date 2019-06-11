import { combineReducers } from "redux";
import user from './reducer.user';
import productsReducer from './reducer.products';
import snackReducer from './reducer.snack';
import openShopReducer from './reducer.open-shop';




export default combineReducers({
	user,
	productsReducer,
	snackReducer,
	openShopReducer
})