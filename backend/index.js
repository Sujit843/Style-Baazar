import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
dotenv.config();
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import wishlistRoute from "./routes/wislistRoute.js";

let port = process.env.PORT || 6000;

let app = express();
app.use(express.json());

app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:5173", "http://localhost:5174"],
    credentials:true
}))

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRouter)
app.use("/api/wishlist", wishlistRoute);


app.listen(port, () =>{
    console.log("Hello server");
    connectDB();
})