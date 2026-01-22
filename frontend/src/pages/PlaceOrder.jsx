import React, { useContext, useState } from 'react'
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import razorpay from "../assets/razorpay.jpg"
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/authContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const {serverUrl} = useContext(authDataContext);
  const {getCartAmount,  delivery_fee, products, cartItem, setCartItem} = useContext(shopDataContext)
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:"",
    street:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phone:''
  });

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }
      switch(method){
        case 'cod' :
          const result = await axios.post(serverUrl + "/api/order/placeOrder" ,
            orderData, {withCredentials:true}  
          )
          console.log(result.data);
          if(result.data){
              setCartItem({});
              navigate("/order")
          }else{
            console.log(result.data.message)
          }
          break;

          default :
          break;
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
        {/* Left side - Form */}
        <div className="flex-1 lg:w-3/5">
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="pt-6">
              <Title text1="DELIVERY" text2="INFORMATION" />
            </div>

            <div className="space-y-5 mt-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />

              <input
                type="text"
                placeholder="Street"
                name="street"
                value={formData.street}
                onChange={onChangeHandler}
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />

                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Pincode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />

                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={onChangeHandler}
                  required
                  className="w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <input
                type="number"
                placeholder="Mobile No."
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />

              <div className="flex items-center justify-center text-center pt-4">
                <button
                  onClick={onSubmitHandler}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Summary & Payment */}
        <div className="flex-1 lg:w-2/5 space-y-6 lg:mt-16">
          <CartTotal />

          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="py-2">
              <Title text1="Select" text2="Method" />
            </div>

            <div className="w-full flex flex-col gap-5 mt-6">
              <button
                onClick={() => setMethod('razorpay')}
                className={`w-full h-16 rounded-xl border-2 transition-all duration-300 flex items-center justify-center font-semibold text-white ${
                  method === 'razorpay'
                    ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/30 scale-105'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                Razorpay
              </button>

              <button
                onClick={() => setMethod('cod')}
                className={`w-full h-16 rounded-xl border-2 transition-all duration-300 flex items-center justify-center font-semibold text-white ${
                  method === 'cod'
                    ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/30 scale-105'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                Cash On Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PlaceOrder