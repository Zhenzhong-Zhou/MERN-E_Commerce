import express from "express";
import {verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {create, fetch_all_products, fetch_product, remove, update} from "../controllers/products.js";

const router = express.Router();

// CREATE
router.post("/", verifyTokenAndAdmin, create);
// UPDATE
router.put("/:id", verifyTokenAndAdmin, update);
// DELETE
router.delete("/:id", verifyTokenAndAuthorization, remove);
// FETCH PRODUCT
router.get("/find/:id", fetch_product);
// FETCH ALL PRODUCTS
router.get("/", fetch_all_products);

export default router;