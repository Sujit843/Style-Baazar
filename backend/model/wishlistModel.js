import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
    {
        userId: String,
        productId: String,
        name: String,
        price:Number,
        image:String
    }
); 

const WishList = mongoose.model("Wishlist", wishlistSchema);
export default WishList;