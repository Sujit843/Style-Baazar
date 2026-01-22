import React from 'react'
import Title from "../components/Title";
import { MdCurrencyExchange } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


function Policy() {
  return (
    <div className='w-[100vw] min-h-[100vh] md:min-h-[70vh] flex flex-col items-center justify-start gap-[50px] py-[30px] bg-gradient-to-br from-slate-50 via-white to-purple-50/30'>
        
        {/* Header Section */}
        <div className='w-[100%] text-center'>
            
            {/* Decorative Element */}
            <div className='flex items-center justify-center mb-[20px]'>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
                <div className='mx-[15px] w-[8px] h-[8px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></div>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
            </div>

            <Title text1={"OUR"} text2={"POLICY"} />
            
            <p className='w-[100%] max-w-[700px] m-auto text-[14px] md:text-[18px] px-[20px] text-gray-600 mt-[15px] font-light leading-relaxed'>
                Customer-Friendly Policies - <span className='font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Committed To Your Satisfaction</span> and Safety
            </p>
        </div>

        {/* Policy Cards */}
        <div className='w-[100%] max-w-[1300px] flex items-stretch justify-center flex-wrap gap-[40px] lg:gap-[50px] px-[20px] mt-[20px]'>
            
            {/* Card 1 - Easy Exchange */}
            <div className='w-[340px] max-w-[90%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-[35px] flex flex-col items-center justify-center gap-[18px] group border border-gray-100 relative overflow-hidden'>
                
                {/* Background Gradient on Hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                
                {/* Icon with Gradient Background */}
                <div className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10'>
                    <MdCurrencyExchange className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-transparent bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text' style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
                </div>

                <p className='font-bold text-[20px] md:text-[24px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10'>
                    Easy Exchange Policy
                </p>
                
                <p className='text-[14px] md:text-[16px] text-gray-600 text-center leading-relaxed relative z-10'>
                    Exchange Made Easy - Quick, Simple and Customer-Friendly Process.
                </p>

                {/* Bottom Accent Line */}
                <div className='absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>

            {/* Card 2 - Return Policy */}
            <div className='w-[340px] max-w-[90%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-[35px] flex flex-col items-center justify-center gap-[18px] group border border-gray-100 relative overflow-hidden'>
                
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                
                <div className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10'>
                    <RiDiscountPercentFill className='w-[45px] h-[45px] md:w-[50px] md:h-[50px]' style={{color: '#a855f7'}} />
                </div>

                <p className='font-bold text-[20px] md:text-[24px] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10'>
                    7 Days Return Policy
                </p>
                
                <p className='text-[14px] md:text-[16px] text-gray-600 text-center leading-relaxed relative z-10'>
                    Shop With Confidence - 7 Days Easy Return Guarantee.
                </p>

                <div className='absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>

            {/* Card 3 - Customer Support */}
            <div className='w-[340px] max-w-[90%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-[35px] flex flex-col items-center justify-center gap-[18px] group border border-gray-100 relative overflow-hidden'>
                
                <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                
                <div className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10'>
                    <BiSupport className='w-[45px] h-[45px] md:w-[50px] md:h-[50px]' style={{color: '#10b981'}} />
                </div>

                <p className='font-bold text-[20px] md:text-[24px] bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent relative z-10'>
                    Best Customer Support
                </p>
                
                <p className='text-[14px] md:text-[16px] text-gray-600 text-center leading-relaxed relative z-10'>
                    24/7 Support Available - Quick Response and Expert Assistance.
                </p>

                <div className='absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>

        </div>

        {/* Bottom Decorative Element */}
        <div className='flex items-center justify-center mt-[30px]'>
            <div className='w-[100px] h-[3px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full'></div>
        </div>
    </div>
  )
}

export default Policy