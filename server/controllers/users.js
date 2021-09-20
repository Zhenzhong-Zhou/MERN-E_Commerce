import CryptoJS from "crypto-js";
import User from "../models/user.js";

// UPDATE
export const update = async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY);
	}
	try {
		const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
		res.status(200).json(updateUser);
	} catch (error) {
		res.status(500).json(error);
	}
};
// DELETE
export const remove = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been DELETED!");
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH USER
export const fetch_user = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const {password, ...info} = user._doc;
		res.status(200).json(info);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH ALL USERS
export const fetch_all_users = async (req, res) => {
	const query = req.query.new;
	try {
		const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};