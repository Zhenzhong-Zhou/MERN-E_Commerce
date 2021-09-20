import express from "express";
import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {create, fetch_all_orders, fetch_monthly_income, fetch_orders, remove, update} from "../controllers/orders.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, create);
// UPDATE
router.put("/:id", verifyTokenAndAdmin, update);
// DELETE
router.delete("/:id", verifyTokenAndAdmin, remove);
// FETCH USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, fetch_orders);
// FETCH ALL ORDERS
router.get("/", verifyTokenAndAdmin, fetch_all_orders);
// FETCH MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, fetch_monthly_income);

export default router;