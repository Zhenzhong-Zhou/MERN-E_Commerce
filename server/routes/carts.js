import express from "express";
import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {create, fetch_all_carts, fetch_cart, remove, update} from "../controllers/carts.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, create);
// UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);
// DELETE
router.delete("/:id", verifyTokenAndAuthorization, remove);
// FETCH USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, fetch_cart);
// FETCH ALL CARTS
router.get("/", verifyTokenAndAdmin, fetch_all_carts);

export default router;