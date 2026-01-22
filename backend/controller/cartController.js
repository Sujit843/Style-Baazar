import User from "../model/userModel.js";


export const addToCart = async (req, res) => {
    try {
        const {itemId, size} = req.body;
        const userData = await User.findById(req.userId);

        if(!userData) {
            return res.status(404).json({message: "User not found"})
        }

        let cartData = userData.cartData || {};

        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(req.userId, {cartData});
        return res.status(201).json({message: "Add To Cart"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Add To Cart error"})
    }
}

export const updateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
        const userData = await User.findById(req.userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // 🔥 quantity = 0 → DELETE ITEM
        if (quantity === 0) {
            if (cartData[itemId] && cartData[itemId][size]) {
                delete cartData[itemId][size];

                // agar us product ka koi size nahi bacha
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            // normal quantity update
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
            cartData[itemId][size] = quantity;
        }

        await User.findByIdAndUpdate(req.userId, { cartData });

        return res.status(200).json(cartData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "cart update error" });
    }
};


export const getCurrentUser = async (req, res) => {
    try {
        const userData = await User.findById(req.userId);
        let cartData = await userData.cartData;

        return res.status(200).json(cartData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "current user cart error"})
    }
}