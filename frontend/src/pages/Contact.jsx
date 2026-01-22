import React from 'react'
import Title from '../components/Title'
import contact from "../assets/contact.jpg"
import Offer from "../components/Offer"

function Contact() {
  return (
    <div className='lg:w-[97vw] w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-[40px] pt-[70px] pb-[50px]
    bg-gradient-to-br from-slate-50 via-white to-slate-100'>

      {/* Title */}
      <Title text1={"CONTACT"} text2={"US"} />

      {/* Main Section */}
      <div className='w-[100%] flex flex-col items-center justify-center lg:flex-row gap-[40px] px-[20px]'>

        {/* Image Section */}
        <div className='lg:w-[70%] w-[100%] flex items-center justify-center'>
          <div className='relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 
          transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]'>
            <img
              src={contact}
              alt='Contact Style Baazar'
              className='lg:w-[70%] w-[80%] lg:h-[60vh] object-cover rounded-xl'
            />
          </div>
        </div>

        {/* Text / Info Section */}
        <div className='lg:w-[50%] w-[90%] flex items-start justify-center gap-[18px] flex-col'>

          <p className='md:text-[18px] text-[14px] font-bold text-gray-900 tracking-wide'>
            OUR STORE
          </p>

          <p className='md:text-[16px] text-[13px] text-gray-700 leading-relaxed'>
            1265 Random Station City, State, India
          </p>

          <p className='md:text-[16px] text-[13px] text-gray-700'>
            <span className='font-semibold text-gray-900'>Tel:</span> +91-986755533
          </p>

          <p className='md:text-[16px] text-[13px] text-gray-700'>
            <span className='font-semibold text-gray-900'>Email:</span> admin@stylebaazar.com
          </p>

          {/* Divider */}
          <div className='w-[60px] h-[2px] bg-purple-500 rounded-full my-[10px]'></div>

          <p className='md:text-[18px] text-[14px] font-bold text-gray-900 tracking-wide'>
            CAREERS AT STYLE BAAZAR
          </p>

          <p className='md:text-[16px] text-[13px] text-gray-700 leading-relaxed'>
            Learn more about our teams, culture, and exciting job opportunities.
          </p>
        </div>
      </div>

      <Offer />
    </div>
  )
}

export default Contact
