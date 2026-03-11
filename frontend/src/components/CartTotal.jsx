import React, { useContext } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'

function CartTotal() {
    const {currency, getCartAmount, delivery_fee} = useContext(shopDataContext);

  return (
    <div className="w-full sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-8">

      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                         text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                         px-4 py-2 rounded-full mb-4">
          <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
          Order Summary
        </span>
        <h2 className="text-[32px] font-black leading-none tracking-tight mt-3">
          <span className="text-white">TOTAL</span>{" "}
          <span className="text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>
            AMOUNT
          </span>
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

        <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-800">
          <p className="text-zinc-400 text-[14px] font-medium tracking-wide">Subtotal</p>
          <p className="text-white text-[15px] font-bold">
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-800">
          <p className="text-zinc-400 text-[14px] font-medium tracking-wide">Shipping Fee</p>
          <p className="text-white text-[15px] font-bold">
            {currency} {delivery_fee}
          </p>
        </div>

        <div className="flex justify-between items-center px-5 py-5 bg-zinc-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent pointer-events-none"></div>
          <b className="text-white text-[16px] tracking-wide relative z-10">Total</b>
          <b className="text-amber-400 text-[20px] font-black relative z-10">
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
      </div>
    </div>
  )
}

export default CartTotal