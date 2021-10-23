import {loginFailure, loginStart, loginSuccess} from "./user";
import {axiosUser} from "../api";
import {
	createProductFailure,
	createProductStart, createProductSuccess,
	deleteProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	fetchProductFailure,
	fetchProductStart,
	fetchProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess
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
		await axiosUser.delete(`products/${id}`, {
			headers: {token: `Bearer ` + JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}
		});
		dispatch(deleteProductSuccess(id));
	} catch (error) {
		dispatch(deleteProductFailure());
	}
};

export const updateProducts = async (id, product, dispatch) => {
	dispatch(updateProductStart());
	try {
		dispatch(updateProductSuccess({id, product}));
	} catch (error) {
		dispatch(updateProductFailure());
	}
};

export const createProducts = async (product, dispatch) => {
	dispatch(createProductStart());
	try {
		 const {data} = await axiosUser.post("products", product, {
			headers: {token: `Bearer ` + JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}
		});
		dispatch(createProductSuccess(data));
	} catch (error) {
		dispatch(createProductFailure());
	}
};