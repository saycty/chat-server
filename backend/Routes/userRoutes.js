// userRoutes.js
import express from "express";
import { registeruser, loginuser, finduser, getuser } from "../controllers/usercontroller.js";

const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/find/:userid", finduser);
router.get("/", getuser);

export default router;
