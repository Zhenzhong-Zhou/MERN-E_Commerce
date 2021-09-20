import express from "express";
import Stripe from 'stripe';
import {payment} from "../controllers/stripe.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

// PAYMENT
router.post("/payment", payment);

export default router;