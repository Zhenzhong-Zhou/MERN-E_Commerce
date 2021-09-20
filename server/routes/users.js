import express from "express";
import {verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middlewares/verifyToken.js";
import {fetch_all_users, fetch_user, fetch_user_status, remove, update} from "../controllers/users.js";

const router = express.Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);
// DELETE
router.delete("/:id", verifyTokenAndAuthorization, remove);
// FETCH USER
router.get("/find/:id", verifyTokenAndAdmin, fetch_user);
// FETCH ALL USERS
router.get("/", verifyTokenAndAdmin, fetch_all_users);
// FETCH USER STATUS
router.get("/status", verifyTokenAndAdmin, fetch_user_status);

export default router;