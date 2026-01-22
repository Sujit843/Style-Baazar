import express from "express";
import { allOrders, PlaceOrder, updateStatus, userOrder } from "../controller/orderController.js";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";


const orderRouter = express.Router();

// for user
orderRouter.post("/placeOrder", isAuth, PlaceOrder)
orderRouter.post("/userOrder", isAuth, userOrder);


// for admin 

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);


export default orderRouter;