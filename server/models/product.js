import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	title: {type: String, required: true, unique: true, min: 3, max: 20},
	description: {type: String, required: true, min: 50},
	image: {type: String, required: true},
	categories: {type: Array},
	size: {type: Array},
	color: {type: Array},
	price: {type: Number, required: true},
	inStock: {type: Boolean, default: true}
	},
	{timestamps: true}
);

export default mongoose.model("Product", productSchema);