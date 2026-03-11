import WishList from "../model/wishlistModel.js";

export const createWishlist = async (req, res) => {
    try {
        const item = await WishList.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getWishlist = async (req, res) => {
    try {
        const getItem = await WishList.find({userId: req.params.userId});
        res.json(getItem)
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}
 

export const toggleWishlist = async (req, res) => {
  try {

    const { userId, productId } = req.body;

    const existing = await WishList.findOne({ userId, productId });

    if (existing) {

      await WishList.deleteOne({ _id: existing._id });

      return res.json({ removed: true });

    }

    const item = await WishList.create(req.body);

    res.json(item);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};