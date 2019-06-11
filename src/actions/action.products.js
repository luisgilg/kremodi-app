import { productsRef } from './refs';
import { FETCH_PRODUCTS_TYPES, PUSH_PRODUCT_TYPES, UPDATE_PRODUCT_TYPES } from './types';


export const fetchProducts = () => dispatch => {
	dispatch(FETCH_PRODUCTS_TYPES.request());
	productsRef.on('value',snap =>{
		const result = [];
		if (!snap){
			return dispatch(FETCH_PRODUCTS_TYPES.success(result));
		}
		snap.forEach(x=>{
			result.push({id: x.key, ...x.val()});
		});
		return dispatch(FETCH_PRODUCTS_TYPES.success(result));
	})
}


export const pushProducts = ({product}) => async dispatch => {
	try {
		dispatch(PUSH_PRODUCT_TYPES.request({product}));
		const id = await productsRef.push(product).key;
		const result = {...product, id};
		dispatch(PUSH_PRODUCT_TYPES.success({product: result}));
	} catch (error) {
		dispatch(PUSH_PRODUCT_TYPES.failure(error));		
	}
}

export const updateProducts = ({product:{id, ...data}, product}) => async dispatch => {
	try {
		dispatch(UPDATE_PRODUCT_TYPES.request({product}));
		await productsRef.child(id).update(data);
		dispatch(UPDATE_PRODUCT_TYPES.success({product}));
	} catch (error) {
		dispatch(UPDATE_PRODUCT_TYPES.failure(error));		
	}
}