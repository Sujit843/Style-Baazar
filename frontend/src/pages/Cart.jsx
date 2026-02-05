import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
import { MdDelete } from "react-icons/md"
import { FiPlus, FiMinus } from "react-icons/fi"
import CartTotal from '../components/CartTotal'
import BottomFooter from '../components/BottomFooter'


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
    <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-40 opacity-80"
      />
      <h2 className="text-2xl font-bold text-gray-700">
        Your Cart is Empty
      </h2>
      <p className="text-gray-500">
        Looks like you haven’t added anything yet
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 cursor-pointer bg-rose-500 hover:bg-rose-800 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Continue Shopping
      </button>
    </div>
  )

  return (
    <>
      <div className='w-full min-h-screen p-4 md:p-6 lg:p-8 bg-gray-50 pb-28'>

        <div className='w-full text-center mt-16 mb-6'>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        {cartData.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className='w-full flex flex-col gap-4 md:gap-6'>
              {cartData.map((item, index) => {
                const productData = products.find(
                  (product) => product._id === item._id
                )

                return (
                  <div key={index} className='bg-white shadow-md rounded-2xl overflow-hidden'>
                    <div className='flex items-center gap-4 p-4 bg-gradient-to-r from-slate-100 to-slate-200'>

                      <img
                        src={productData.image1}
                        alt=''
                        className='w-24 h-24 rounded-lg object-cover'
                      />

                      <div className='flex-1'>
                        <p className='text-lg font-semibold text-gray-800'>
                          {productData.name}
                        </p>

                        <div className='flex items-center gap-3 mt-2'>
                          <p className='text-gray-700'>
                            Price:
                            <span className='text-green-500 font-semibold'>
                              ₹{productData.price}
                            </span>
                          </p>

                          <span className='w-8 h-8 flex items-center justify-center border rounded-lg bg-white'>
                            {item.size}
                          </span>
                        </div>
                      </div>

                      <div className='flex items-center gap-4'>

                        <div className='flex items-center gap-2 border-2 border-gray-300 rounded-lg px-2 py-1 bg-white'>
                          <button
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              updateQuantity(item._id, item.size, item.quantity - 1)
                            }
                            className='p-1 disabled:opacity-40 hover:text-red-500'
                          >
                            <FiMinus size={18} />
                          </button>

                          <span className='w-6 text-center font-semibold'>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.size, item.quantity + 1)
                            }
                            className='p-1 hover:text-green-600'
                          >
                            <FiPlus size={18} />
                          </button>
                        </div>

                        <MdDelete
                          className='w-7 h-7 cursor-pointer text-gray-600 hover:text-red-500'
                          onClick={() =>
                            updateQuantity(item._id, item.size, 0)
                          }
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className='mt-16'>
              <div className='max-w-md'>
                <CartTotal />

                <button
                  className='w-[280px] mt-6 md:ml-[3rem] bg-rose-400 hover:bg-rose-600 text-white
                  py-3 rounded-xl font-semibold md:mb-[1rem] cursor-pointer'
                  onClick={() => navigate("/placeOrder")}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        )}

      </div>

      <BottomFooter />
    </>
  )
}

export default Cart
