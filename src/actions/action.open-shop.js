import { openShopRef } from './refs';
import { FETCH_OPEN_SHOP_TYPES, PUSH_OPEN_SHOP_TYPES, UPDATE_OPEN_SHOP_TYPES, DELETE_OPEN_SHOP_TYPES } from './types';


export const fetchOpenShop = () => dispatch => {
	dispatch(FETCH_OPEN_SHOP_TYPES.request());
	openShopRef.on('value',snap =>{
		const result = [];
		if (!snap){
			return dispatch(FETCH_OPEN_SHOP_TYPES.success(result));
		}
		snap.forEach(x=>{
			result.push({id: x.key, ...x.val()});
		});
		return dispatch(FETCH_OPEN_SHOP_TYPES.success(result));
	})
}


export const pushOpenShop = ({openShop}) => async dispatch => {
	try {
		dispatch(PUSH_OPEN_SHOP_TYPES.request({openShop}));
		const id = await openShopRef.push(openShop).key;
		const result = {...openShop, id};
		dispatch(PUSH_OPEN_SHOP_TYPES.success({openShop: result}));
	} catch (error) {
		dispatch(PUSH_OPEN_SHOP_TYPES.failure(error));		
	}
}

export const updateOpenShop = ({openShop:{id, ...data}, openShop}) => async dispatch => {
	try {
		dispatch(UPDATE_OPEN_SHOP_TYPES.request({openShop}));
		await openShopRef.child(id).update(data);
		dispatch(UPDATE_OPEN_SHOP_TYPES.success({openShop}));
	} catch (error) {
		dispatch(UPDATE_OPEN_SHOP_TYPES.failure(error));		
	}
}

export const deleteOpenShop = ({openShop:{id}, openShop}) => async dispatch => {
	try {
		dispatch(DELETE_OPEN_SHOP_TYPES.request({openShop}));
		await openShopRef.child(id).remove();
		dispatch(DELETE_OPEN_SHOP_TYPES.success({openShop}));
	} catch (error) {
		dispatch(DELETE_OPEN_SHOP_TYPES.failure(error));		
	}
}