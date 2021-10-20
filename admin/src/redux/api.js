import {loginFailure, loginStart, loginSuccess} from "./user";
import {axiosUser} from "../api";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const {data} = await axiosUser.post("auth/login", user);
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};