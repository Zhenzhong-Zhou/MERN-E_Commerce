import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import User from "../models/user.js";

// REGISTER
export const register = async (req, res) => {
	const newUser =  new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
	});
	try {
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};
// LOGIN
export const login = async (req, res) => {
	try {
		const user = await User.findOne({username: req.body.username});
		!user && res.status(401).json("Incorrect email or password. Please try again.");
		const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
		const original = decrypted.toString(CryptoJS.enc.Utf8);
		original !== req.body.password && res.status(401).json("Incorrect email or password. Please try again.");
		const accessToken = jwt.sign({
			id: user._id, isTester: user.isTester, isAdmin: user.isAdmin
		}, process.env.SECRET_KEY_TOKEN, {expiresIn: "1h"});
		const {password, ...info} = user._doc;
		res.status(200).json({...info, accessToken});
	} catch (error) {
		res.status(500).json(error);
	}
};