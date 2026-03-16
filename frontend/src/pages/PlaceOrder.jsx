import React, { useContext, useState } from 'react'
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import confirmBox from '../utils/confirmBox';

const inputClass = `w-full h-[48px] px-5 rounded-full bg-zinc-900 border border-zinc-800 
  text-white text-[13px] placeholder:text-zinc-600 tracking-wide
  outline-none focus:border-rose-500/60 transition-all duration-300`

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const { getCartAmount, delivery_fee, products, cartItem, setCartItem } = useContext(shopDataContext);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: "",
    street: '', city: '', state: '',
    pinCode: '', country: '', phone: ''
  });

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Style Bazaar",
      description: "Order Payment",
      order_id: order.id,
      handler: function (response) { console.log("Payment Success", response); }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const confirm = await confirmBox("Do you really want to place this order?");
    if (!confirm) return;

    try {
      let orderItems = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
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
        const result = await axios.post(serverUrl + "/api/order/placeOrder", orderData, { withCredentials: true });
        if (result.data) {
          setCartItem({});
          setShowPopup(true);
          setTimeout(() => { setShowPopup(false); navigate("/order"); }, 2000);
        }
      } else if (method === "razorpay") {
        const resultRazorpay = await axios.post(serverUrl + "/api/order/placeOrderbyrazorpay", orderData, { withCredentials: true });
        if (resultRazorpay.data) {
          initPay(resultRazorpay.data);
          setCartItem({});
          setShowPopup(true);
          setTimeout(() => { setShowPopup(false); navigate("/order"); }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 py-24 px-5 md:px-12 relative overflow-hidden">

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

        <div className="flex-1 lg:w-3/5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                               text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                Step 1
              </span>
              <Title text1="DELIVERY" text2="INFORMATION" />
            </div>

            <div className="h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent mb-8"></div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <input type="text" placeholder="First Name" name="firstName"
                  value={formData.firstName} onChange={onChangeHandler} required
                  className={inputClass} />
                <input type="text" placeholder="Last Name" name="lastName"
                  value={formData.lastName} onChange={onChangeHandler} required
                  className={inputClass} />
              </div>

              <input type="email" placeholder="Email Address" name="email"
                value={formData.email} onChange={onChangeHandler} required
                className={inputClass} />

              <input type="text" placeholder="Street" name="street"
                value={formData.street} onChange={onChangeHandler} required
                className={inputClass} />

              <div className="flex gap-3">
                <input type="text" placeholder="City" name="city"
                  value={formData.city} onChange={onChangeHandler} required
                  className={inputClass} />
                <input type="text" placeholder="State" name="state"
                  value={formData.state} onChange={onChangeHandler} required
                  className={inputClass} />
              </div>

              <div className="flex gap-3">
                <input type="number" placeholder="Pincode" name="pinCode"
                  value={formData.pinCode} onChange={onChangeHandler} required
                  className={inputClass} />
                <input type="text" placeholder="Country" name="country"
                  value={formData.country} onChange={onChangeHandler} required
                  className={inputClass} />
              </div>

              <input type="number" placeholder="Mobile No." name="phone"
                value={formData.phone} onChange={onChangeHandler} required
                className={inputClass} />

              <div className="pt-4">
                <button
                  onClick={onSubmitHandler}
                  className="w-full flex items-center justify-center gap-3
                             bg-rose-600 hover:bg-rose-500 text-white
                             py-4 rounded-full font-black text-[12px] tracking-widest uppercase
                             hover:shadow-[0_0_30px_rgba(225,29,72,0.35)]
                             transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
                >
                  <span>Place Order</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[16px]">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col gap-6 sticky top-24">

          <CartTotal />

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 
                               text-amber-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-amber-400 animate-pulse"></span>
                Step 2
              </span>
              <Title text1="PAYMENT" text2="METHOD" />
            </div>

            <div className="h-[1px] bg-gradient-to-r from-amber-500/40 via-zinc-700 to-transparent mb-6"></div>

            <div className="flex flex-col gap-3">
              {[
                { id: 'razorpay', label: 'Razorpay', icon: '💳' },
                { id: 'cod',      label: 'Cash On Delivery', icon: '💵' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMethod(opt.id)}
                  className={`w-full h-[52px] rounded-full border flex items-center justify-center gap-3
                              font-black text-[12px] tracking-widest uppercase transition-all duration-300 cursor-pointer
                              ${method === opt.id
                                ? 'bg-rose-600/10 border-rose-500/60 text-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.1)]'
                                : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-white'
                              }`}
                >
                  <span>{opt.icon}</span>
                  <span>{opt.label}</span>
                  {method === opt.id && (
                    <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse ml-1"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-7 
                          shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] rounded-2xl bg-emerald-500/10 border border-emerald-500/30 
                              flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <p className="text-white font-black text-[16px] tracking-tight">Order Placed!</p>
                <p className="text-zinc-500 text-[12px] tracking-wider mt-0.5">Redirecting to your orders...</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-700/50 to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaceOrder;