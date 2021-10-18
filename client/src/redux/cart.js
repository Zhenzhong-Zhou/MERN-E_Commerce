import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		subtotal: 0,
		total: 0
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.subtotal += action.payload.price * action.payload.quantity;
			state.total += action.payload.price * action.payload.quantity * 1.10;
		}
	}
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;