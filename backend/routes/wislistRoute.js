import express from "express";
import { createWishlist, getWishlist, toggleWishlist } from "../controller/wishlistController.js";

const wishlistRoute = express.Router();

wishlistRoute.post("/toggle", toggleWishlist);
wishlistRoute.get("/getWishlist/:userId", getWishlist);

export default wishlistRoute;
