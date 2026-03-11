import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
import { MdDelete } from "react-icons/md"
import { FiPlus, FiMinus } from "react-icons/fi"
import CartTotal from '../components/CartTotal'
import BottomFooter from '../components/BottomFooter'
import confirmBox from '../utils/confirmBox'

function Cart() {
  const { products, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = []
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-5 text-center">
      <div className="w-[100px] h-[100px] rounded-2xl bg-zinc-900 border border-zinc-800 
                      flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-14 opacity-30"
        />
      </div>
      <div>
        <h2 className="text-[24px] font-black text-white tracking-tight">Your Cart is Empty</h2>
        <p className="text-zinc-500 text-[14px] mt-1">Looks like you haven't added anything yet</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-2 cursor-pointer bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 
                   rounded-full font-black text-[12px] tracking-widest uppercase
                   hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] transition-all duration-300 hover:scale-105"
      >
        Continue Shopping
      </button>
    </div>
  )

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 pb-28 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="relative max-w-[1400px] mx-auto px-5 md:px-12 pt-24 pb-10">

          <div className="mb-12">
            <p className="absolute top-16 left-5 md:left-12 text-[80px] md:text-[130px] font-black 
                          text-white/[0.03] leading-none select-none tracking-tighter uppercase pointer-events-none">
              CART
            </p>
            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                               text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                {cartData.length > 0 ? `${cartData.length} Item${cartData.length > 1 ? 's' : ''}` : 'Empty'}
              </span>
              <Title text1={"YOUR"} text2={"CART"} />
            </div>
            <div className="mt-6 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
          </div>

          {cartData.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 items-start">

              <div className="flex-1 flex flex-col gap-4">
                {cartData.map((item, index) => {
                  const productData = products.find((product) => product._id === item._id)

                  return (
                    <div key={index}
                      className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden 
                                 hover:border-rose-500/30 transition-all duration-300
                                 hover:shadow-[0_10px_40px_rgba(225,29,72,0.08)]">

                      <div className="flex items-center gap-4 p-4 md:p-5">

                        <div className="relative w-[90px] h-[90px] rounded-xl overflow-hidden flex-shrink-0 
                                        border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                          <img
                            src={productData.image1}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[14px] md:text-[15px] font-semibold leading-snug line-clamp-2">
                            {productData.name}
                          </p>
                          <div className="flex items-center gap-3 mt-2 flex-wrap">
                            <span className="text-amber-400 text-[15px] font-black">
                              ₹{productData.price}
                            </span>
                            <span className="w-[30px] h-[30px] flex items-center justify-center 
                                            bg-zinc-800 border border-zinc-700 rounded-lg 
                                            text-zinc-300 text-[12px] font-bold">
                              {item.size}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">

                          <div className="flex items-center gap-1 bg-zinc-800 border border-zinc-700 
                                          rounded-full px-2 py-1">
                            <button
                              disabled={item.quantity <= 1}
                              onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                              className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                                         text-zinc-400 hover:text-white hover:bg-zinc-700 
                                         disabled:opacity-30 transition-all duration-200"
                            >
                              <FiMinus size={14} />
                            </button>

                            <span className="w-7 text-center text-white text-[14px] font-black">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                              className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                                         text-zinc-400 hover:text-white hover:bg-zinc-700 
                                         transition-all duration-200"
                            >
                              <FiPlus size={14} />
                            </button>
                          </div>

                          <button
                            onClick={async () => {
                              const confirm = await confirmBox("Remove this product from cart?");
                              if (!confirm) return;
                              updateQuantity(item._id, item.size, 0);
                            }}
                            className="w-[36px] h-[36px] flex items-center justify-center rounded-full 
                                       bg-zinc-800 border border-zinc-700 text-zinc-500 
                                       hover:bg-rose-600/10 hover:border-rose-500/40 hover:text-rose-400 
                                       transition-all duration-300 cursor-pointer"
                          >
                            <MdDelete size={18} />
                          </button>
                        </div>

                      </div>

                      <div className="h-[1px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="w-full lg:w-[420px] flex-shrink-0 sticky top-24">
                <CartTotal />

                <button
                  className="w-full mt-5 flex items-center justify-center gap-3 md:ml-6
                             bg-rose-600 hover:bg-rose-500 text-white
                             py-4 rounded-full font-black text-[12px] tracking-widest uppercase
                             hover:shadow-[0_0_30px_rgba(225,29,72,0.35)]
                             transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  onClick={() => navigate("/placeOrder")}
                >
                  <span>Proceed To Checkout</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[16px]">→</span>
                </button>
              </div>

            </div>
          )}
        </div>
      </div>

      <BottomFooter />
    </>
  )
}

export default Cart