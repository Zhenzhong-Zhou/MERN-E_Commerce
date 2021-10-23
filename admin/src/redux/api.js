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
		await axiosUser.delete(`products/${id}`, {
			headers: {token: `Bearer ` + JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}
		});
		dispatch(deleteProductSuccess(id));
		// dispatch(deleteProductSuccess(id));
	} catch (error) {
		dispatch(deleteProductFailure());
	}
};