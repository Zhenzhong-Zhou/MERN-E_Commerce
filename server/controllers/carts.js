import Cart from "../models/cart.js";

// CREATE
export const create = async (req, res) => {
	const createCart = new Cart(req.body);
	try {
		const newCart = await createCart.save();
		res.status(200).json(newCart);
	} catch (error) {
		res.status(500).json(error);
	}
};
// UPDATE
export const update = async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
		res.status(200).json(updatedCart);
	} catch (error) {
		res.status(500).json(error);
	}
};
// DELETE
export const remove = async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json("Cart has been DELETED!");
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH USER CART
export const fetch_cart = async (req, res) => {
	try {
		const cart = await Cart.findOne({userId: req.params.userId});
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH ALL CARTS
export const fetch_all_carts = async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
};