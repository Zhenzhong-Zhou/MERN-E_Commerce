import {loginFailure, loginStart, loginSuccess} from "./user";
import {axiosUser} from "../api";
import {
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	fetchProductFailure,
	fetchProductStart,
	fetchProductSuccess
} from "./product";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const {data} = await axiosUser.post("auth/login", user);
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const fetchProducts = async (dispatch) => {
	dispatch(fetchProductStart());
	try {
		const {data} = await axiosUser.get("products");
		dispatch(fetchProductSuccess(data));
	} catch (error) {
		dispatch(fetchProductFailure());
	}
};

export const deleteProducts = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		const {data} = await axiosUser.delete(`products/${id}`);
		dispatch(deleteProductSuccess(data));
	} catch (error) {
		dispatch(deleteProductFailure());
	}
};