import express from "express";
import { addToCart, getCurrentUser, updateCart } from "../controller/cartController.js";
import isAuth from "../middleware/isAuth.js";

const cartRoute = express.Router();

cartRoute.post("/add", isAuth, addToCart)
cartRoute.post("/get", isAuth, getCurrentUser)
cartRoute.post("/update", isAuth, updateCart);

export default cartRoute;