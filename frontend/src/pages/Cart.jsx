import React, { useContext, useEffect, useState } from 'react'
import {shopDataContext} from "../context/ShopContext";
import {useNavigate} from "react-router-dom";
import Title from "../components/Title";
import { MdDelete } from "react-icons/md";
import CartTotal from '../components/CartTotal';

function Cart() {
    const {products, currency , cartItem, updateQuantity, }  = useContext(shopDataContext);
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      const tempData = [];
      for (const items in cartItem){
        for (const item in cartItem[items]){
          if(cartItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item]
            });
          }
        }
      }
      setCartData(tempData);
    }, [cartItem])
  return (

  <div className='w-full min-h-screen p-4 md:p-6 lg:p-8 bg-gray-50 md:pb-6 pb-28'>
    <div className='w-full text-center mt-16 md:mt-16 mb-6'>
        <Title text1={"YOUR"} text2={"CART"} />
    </div>
    <div className='w-full flex flex-col gap-4 md:gap-6'>
      {
        cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='w-full bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden'>
              <div className='w-full flex flex-row items-center gap-3 sm:gap-4 md:gap-6 p-4 md:p-5 
              bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl relative'>
                <img src={productData.image1} alt='' className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg shadow-sm object-cover flex-shrink-0'/>
                
                <div className='flex flex-col gap-2 md:gap-3 flex-1 min-w-0'>
                  <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 truncate'>{productData.name}</p>
                  <div className='flex items-center gap-2 md:gap-3 flex-wrap'>
                    <p className='text-sm sm:text-base md:text-lg font-medium text-gray-700'>Price: <span className='text-green-400'>₹{productData.price}</span></p>
                    <p className='w-7 h-7 sm:w-8 sm:h-8 text-sm font-medium flex rounded-lg items-center justify-center border-2 border-gray-300 bg-white'>
                      {item.size}
                    </p>
                  </div>  
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4'>
                  <input 
                    type='number' 
                    min={1} 
                    value={item.quantity}
                    className='w-14 sm:w-16 md:w-20 px-2 py-1.5 md:py-2 text-base md:text-lg font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 bg-white'
                    onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(
                      item._id, item.size, Number(e.target.value)
                    )}
                  />
                  <MdDelete 
                    className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer text-gray-600 hover:text-red-500 hover:scale-110 transition-all'
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    <div className='flex justify-start items-end mt-12 md:mt-16 lg:mt-20'>
      <div className='w-full sm:w-auto sm:min-w-[400px] md:min-w-[450px]'>
        <CartTotal />
        <button 
          className='w-full sm:w-auto text-base md:text-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer 
          py-2.5 md:py-3 px-8 md:px-12 md:ml-6 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-4 border-0
          mt-6 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={() => {
            if(cartData.length > 0){
              navigate("/placeOrder")
            }
          }}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
</div>
  )
}

export default Cart