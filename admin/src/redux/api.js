import {loginFailure, loginStart, loginSuccess} from "./user";
import {axiosInstance} from "../api";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const {data} = await axiosInstance.post("auth/login", user);
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};