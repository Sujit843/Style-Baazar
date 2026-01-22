import React, { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './authContext';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import {userDataContext} from "../context/UserContext";

export const shopDataContext = createContext()
function ShopContext({children}) {
    const [search, setSearch] = useState('')
    const {userData} = useContext(userDataContext)
    const [showSearch, setShowSearch] = useState(false)
    const {serverUrl} = useContext(authDataContext)
    const [products, setProducts] = useState([]);
    const [cartItem , setCartItem] = useState({})
    const currency = "₹";
    const delivery_fee = 40;

    const [toast, setToast] = useState({
        show: false,
        message:"",
        type: ""
    });

    const getProduct = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/list", {withCredentials:true})
            console.log(result.data);
            setProducts(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = async (itemId, size) => {
        if(!size){
            setToast({
                show:true,
                message:"⚠️Please select size first!",
                type:"error"
            });
            setTimeout(() =>{
                setToast({show: false, message:"", type:""})
            }, 2500)
            console.log("Select Size ")
            return false ;
        }
        let cartData = structuredClone(cartItem);
        if (cartData[itemId]) {
        cartData[itemId][size]
            ? cartData[itemId][size] += 1
            : cartData[itemId][size] = 1;
    } else {
        cartData[itemId] = { [size]: 1 };
    }

        setCartItem(cartData);

        if(cartData){
            try {
                await axios.post(serverUrl + "/api/cart/add",{itemId, size}, {withCredentials:true})

                setToast({
                show: true,
                message: "✅ Product added successfully!",
                type: "success"
            });

                setTimeout(() => {
                setToast({ show: false, message: "", type: "" });
            }, 2500);
            } catch (error) {
                console.log(error)
            }
        }else{
            console.log("add error")
        }
    }


    const getUserCart = async () => {
        try {
            const result = await axios.post(serverUrl + "/api/cart/get", {} , {withCredentials:true})

            setCartItem(result.data)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const updateQuantity = async(itemId, size, quantiy) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantiy;
        setCartItem(cartData);
        if(userData){
            try {
            const result = await axios.post(serverUrl + "/api/cart/update" , {itemId, size, quantiy} ,{withCredentials:true})
            setCartItem(result.data)
        } catch (error) {
            console.log(error)
        }
        }
    
    }


    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0){
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount;
    }

    const getCartAmount =  () =>{
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount;
    }

    useEffect(() =>{
        getProduct()
    }, []);

    useEffect(() =>{
        getUserCart()
    }, [products]);


    const value = {
        products, delivery_fee, currency, getProduct,search, setSearch,showSearch, setShowSearch
        ,cartItem, getCartCount, addToCart, setCartItem, updateQuantity, getCartAmount
    }
  return (
    <div>
        <shopDataContext.Provider value={value}>
            {children}

            {toast.show && (
                <div className={`toast ${toast.type}`}>
                    {toast.message}
                </div>
            )}

        </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext 