import {loginFailure, loginStart, loginSuccess} from "./user";
import {axiosUser} from "../api";
import {fetchProductFailure, fetchProductStart, fetchProductSuccess} from "./product";

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