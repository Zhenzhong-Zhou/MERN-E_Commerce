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
		},
		// DELETE
		deleteProductStart: (state) => {
			state.pending = true;
			state.error = false;
		},
		deleteProductSuccess: (state, action) => {
			state.pending = false;
			state.products.splice(
				state.products.findIndex(item => item._id === action.payload), 1
			);
		},
		deleteProductFailure: (state) => {
			state.pending = false;
			state.error = true;
		}
	}
});

export const {fetchProductStart, fetchProductSuccess, fetchProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure} = productSlice.actions;
export default productSlice.reducer;