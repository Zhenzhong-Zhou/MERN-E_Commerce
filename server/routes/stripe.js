import express from "express";
import {payment} from "../controllers/stripe.js";

const router = express.Router();

// PAYMENT
router.post("/payment", payment);

export default router;