import express from "express";
import {verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {create, update} from "../controllers/products.js";

const router = express.Router();

// CREATE
router.post("/", verifyTokenAndAdmin, create);
// UPDATE
router.put("/:id", verifyTokenAndAdmin, update);

export default router;