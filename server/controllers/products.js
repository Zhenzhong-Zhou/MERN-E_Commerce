import Product from "../models/product.js";

// CREATE
export const create = async (req, res) => {
	const createProduct = new Product(req.body);
	try {
		const newProduct = await createProduct.save();
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};
// UPDATE
export const update = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};
// DELETE
export const remove = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json("Product has been DELETED!");
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH PRODUCT
export const fetch_product = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH ALL PRODUCTS
export const fetch_all_products = async (req, res) => {
	const queryNew = req.query.new;
	const queryCategory = req.query.categories;
	try {
		let products;
		if (queryNew) {
			products = await Product.find().sort({createdAt: -1}).limit(1);
		} else if (queryCategory) {
			products = await Product.find({categories: {$in: [queryCategory]}});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
};