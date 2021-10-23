import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		pending: false,
		error: false
	},
	reducers: {
		// FETCH ALL
		fetchProductStart: (state) => {
			state.pending = true;
			state.error = false;
		},
		fetchProductSuccess: (state, action) => {
			state.pending = false;
			state.products = action.payload;
		},
		fetchProductFailure: (state) => {
			state.pending = false;
			state.error = true;
		}
	}
});

export const {fetchProductStart, fetchProductSuccess, fetchProductFailure} = productSlice.actions;
export default productSlice.reducer;