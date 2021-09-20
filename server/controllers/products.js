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