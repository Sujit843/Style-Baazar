import express from "express";
import { adminLogin, login, logOut, registration } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.post("/registration", registration)
authRoute.post("/login", login)
authRoute.get("/logOut", logOut)
authRoute.post("/adminlogin", adminLogin)


export default authRoute; 