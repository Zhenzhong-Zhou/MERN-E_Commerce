import axios from "axios";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = localStorage.getItem("persist:root");

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_LOCAL_URL
});

export const axiosUser = axios.create({
	baseURL: process.env.REACT_APP_LOCAL_URL,
	headers: {token: `Bearer ${TOKEN}`}
});