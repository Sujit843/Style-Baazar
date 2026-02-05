import React, { useContext } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'

function CartTotal() {
    const {currency, getCartAmount, delivery_fee} = useContext(shopDataContext);
  return (
    
    <div className='w-full sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-8'>
    <div className='text-lg sm:text-xl md:text-2xl py-3 md:py-4 md:mt-[1rem]'>
        <Title text1={"TOTAL"} text2={"AMOUNT"} />
    </div>
    <div className='flex flex-col gap-0 mt-3 md:mt-4 text-sm border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm'>
        <div className='flex justify-between items-center text-sm sm:text-base md:text-lg px-4 py-3 md:px-6 md:py-4 bg-gray-50'>
            <p className='text-gray-700'>Subtotal</p>
            <p className='font-semibold text-gray-900'>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className='border-gray-200'/>
        <div className='flex justify-between items-center text-sm sm:text-base md:text-lg px-4 py-3 md:px-6 md:py-4'>
            <p className='text-gray-700'>Shipping Fee</p>
            <p className='font-semibold text-gray-900'>{currency} {delivery_fee}</p>
        </div>
        <hr className='border-gray-200'/>
        <div className='flex justify-between items-center text-base sm:text-lg md:text-xl px-4 py-4 md:px-6 md:py-5 bg-blue-50'>
            <b className='text-gray-900'>Total</b>
            <b className='text-blue-600'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
    </div>
</div>
  )
}

export default CartTotal