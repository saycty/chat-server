// userRoutes.js
import express from "express";
import { registeruser, loginuser, finduser, getuser } from "../controllers/usercontroller.js";

const userRoute = express.Router();

userRoute.post("/register", registeruser);
userRoute.post("/login", loginuser);
userRoute.get("/find/:userid", finduser);
userRoute.get("/", getuser);

export default userRoute;
