import Product from "../model/productModel.js";
import uploadOnCloudinary from "../config/cloudinary.js";


export const addProduct = async (req, res) =>{
    try {
        const {name , description, price , category, subCategory, size, bestSeller} = req.body;

        const image1 = await uploadOnCloudinary(req.files.image1[0].path)
        const image2 = await uploadOnCloudinary(req.files.image2[0].path)
        const image3 = await uploadOnCloudinary(req.files.image3[0].path)
        const image4 = await uploadOnCloudinary(req.files.image4[0].path)

        const productData = {
            name , 
            description, 
            price:Number(price) , 
            category, 
            subCategory, 
            size:JSON.parse(size), 
            bestSeller: bestSeller === "true" ? true : false,
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        }   
        const product = await Product.create(productData);
        return res.status(201).json(product)
    } catch (error) {
        console.log("AddProduct Error");
        return res.status(500).json({message:"addProduct error"})
    }
}

export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({});
        return res.status(200).json(product)
    } catch (error) {
        console.log("List Product error");
        return res.status(500).json({message:"List product error"})
    }
}

export const removeProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json(product);
    } catch (error) {
        console.log("remove Product error");
        return res.status(500).json({message:"remove product error"})
    }
}