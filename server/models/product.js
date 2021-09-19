import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	title: {type: String, required: true, unique: true, min: 3, max: 20},
	description: {type: String, required: true, min: 50},
	image: {type: String, required: true},
	categories: {type: Array},
	size: {type: String},
	color: {type: String},
	price: {type: Number},
	},
	{timestamps: true}
);

export default mongoose.model("Product", productSchema);