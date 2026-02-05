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
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const { getCartAmount, delivery_fee, products, cartItem, setCartItem } =
    useContext(shopDataContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: "",
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find(product => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      if (method === "cod") {
        const result = await axios.post(
          serverUrl + "/api/order/placeOrder",
          orderData,
          { withCredentials: true }
        );

        if (result.data) {
          setCartItem({});
          setShowPopup(true);

          setTimeout(() => {
            setShowPopup(false);
            navigate("/order");
          }, 2000);
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 py-12 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 lg:w-3/5">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="mb-8">
              <Title text1="DELIVERY" text2="INFORMATION" />
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  name="firstName"
                  value={formData.firstName} 
                  onChange={onChangeHandler} 
                  required
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastName"
                  value={formData.lastName} 
                  onChange={onChangeHandler} 
                  required
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
              </div>

              <input 
                type="email" 
                placeholder="Email Address" 
                name="email"
                value={formData.email} 
                onChange={onChangeHandler} 
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />

              <input 
                type="text" 
                placeholder="Street" 
                name="street"
                value={formData.street} 
                onChange={onChangeHandler} 
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />

              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="City" 
                  name="city"
                  value={formData.city} 
                  onChange={onChangeHandler} 
                  required
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
                <input 
                  type="text" 
                  placeholder="State" 
                  name="state"
                  value={formData.state} 
                  onChange={onChangeHandler} 
                  required
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
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
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Country" 
                  name="country"
                  value={formData.country} 
                  onChange={onChangeHandler} 
                  required
                  className="w-1/2 border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
              </div>

              <input 
                type="number" 
                placeholder="Mobile No." 
                name="phone"
                value={formData.phone} 
                onChange={onChangeHandler} 
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
              />

              <div className="flex items-center justify-center pt-6">
                <button 
                  onClick={onSubmitHandler}
                  className="bg-rose-500 hover:bg-rose-600 text-white cursor-pointer
                  font-semibold py-3 px-12 rounded-lg transition-colors duration-200 shadow-sm">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:w-2/5 space-y-6">
          <CartTotal />

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="mb-6">
              <Title text1="PAYMENT" text2="METHOD" />
            </div>

            <div className="w-full flex flex-col gap-4">
              <button 
                onClick={() => setMethod('razorpay')}
                className={`w-full h-14 rounded-lg border-2 flex items-center justify-center font-medium transition-all duration-200 ${
                  method === 'razorpay'
                    ? 'border-rose-500 bg-rose-50 text-rose-600'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}>
                Razorpay
              </button>

              <button 
                onClick={() => setMethod('cod')}
                className={`w-full h-14 rounded-lg border-2 flex items-center justify-center font-medium transition-all duration-200 ${
                  method === 'cod'
                    ? 'border-rose-500 bg-rose-50 text-rose-600'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}>
                Cash On Delivery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl px-8 py-6 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-slate-800 font-semibold text-lg">
                Order Placed Successfully!
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default PlaceOrder;