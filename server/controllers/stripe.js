import dotenv from "dotenv";
import Stripe from 'stripe';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
	apiVersion: '2020-08-27',
});

// PAYMENT
export const payment = (req, res) => {
	stripe.charges.create({
		source: req.body.tokenId,
		amount: req.body.amount,
		currency: "cad"
	}, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).json(stripeErr);
		} else {
			res.status(200).json(stripeRes);
		}
	});
};