import express from "express";
import {verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {remove, update} from "../controllers/users.js";

const router = express.Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);
// DELETE
router.delete("/:id", verifyTokenAndAuthorization, remove);

export default router;