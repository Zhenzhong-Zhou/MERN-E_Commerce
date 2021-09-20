import jwt from "jsonwebtoken";
import {token} from "morgan";

const verifyToken = (req, res ,next) => {
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