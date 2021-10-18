import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_LOCAL_URL
});

export const axiosUser = axios.create({
	baseURL: process.env.REACT_APP_LOCAL_URL,
	headers: {token: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`}
});