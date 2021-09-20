import jwt from "jsonwebtoken";
import {token} from "morgan";

export const verifyToken = (req, res ,next) => {
	const authHeader = req.headers.token;
	if (authHeader) {
		jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN, (error, user) => {
			if (error) res.status(403).json("Invalid Token!");
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json("Invalid Authenticated!");
	}
};

export const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isTester || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("Invalid Action!");
		}
	});
}