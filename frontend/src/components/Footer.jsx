import React from 'react'
import Logo from "../assets/vcart logo.png";

function Footer() {
  return (
    <footer className='w-full bg-gradient-to-b from-slate-50 to-slate-100 mt-9'>
    <div className='w-full px-4 md:px-8 lg:px-16 py-8 md:py-12'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
            
            {/* Company Info */}
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2 mb-2'>
                    <img src={Logo} alt='Style Baazar Logo' className='w-10 h-10 md:w-12 md:h-12'/>
                    <p className='text-xl md:text-2xl font-bold text-gray-800'>Style Baazar</p>
                </div>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                    Style Baazar is a modern fashion e-commerce platform designed to provide a smooth and enjoyable online shopping experience.
                </p>
                <div className='flex gap-4 mt-2'>
                    <a href='#' className='w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all hover:scale-110'>
                        <i className='fab fa-facebook-f text-sm'></i>
                    </a>
                    <a href='#' className='w-9 h-9 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-all hover:scale-110'>
                        <i className='fab fa-instagram text-sm'></i>
                    </a>
                    <a href='#' className='w-9 h-9 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all hover:scale-110'>
                        <i className='fab fa-twitter text-sm'></i>
                    </a>
                </div>
            </div>

            {/* Company Links */}
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>COMPANY</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Home</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>About Us</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Collection</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Delivery</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Privacy Policy</li>
                </ul>
            </div>

            {/* Customer Service */}
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>CUSTOMER SERVICE</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Track Order</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Returns & Exchange</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Shipping Info</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>FAQs</li>
                    <li className='text-sm md:text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors'>Size Guide</li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>GET IN TOUCH</h3>
                <ul className='flex flex-col gap-3'>
                    <li className='text-sm md:text-base text-gray-600 flex items-center gap-2'>
                        <span className='text-blue-600'>📞</span> +91-989-999-8888
                    </li>
                    <li className='text-sm md:text-base text-gray-600 flex items-center gap-2'>
                        <span className='text-blue-600'>✉️</span> contact@stylebaazar.com
                    </li>
                    <li className='text-sm md:text-base text-gray-600 flex items-center gap-2'>
                        <span className='text-blue-600'>📍</span> 123 Fashion Street, Mumbai
                    </li>
                </ul>
                <div className='mt-2'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Subscribe to Newsletter</p>
                    <div className='flex gap-2'>
                        <input 
                            type='email' 
                            placeholder='Your email' 
                            className='flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                        <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/* Divider */}
    <div className='w-full h-[1px] bg-gray-300'></div>

    {/* Bottom Bar */}
    <div className='w-full bg-gray-900 text-gray-300 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3'>
            <p className='text-xs md:text-sm text-center md:text-left'>
                Copyright © 2026 Style Baazar. All Rights Reserved.
            </p>
            <div className='flex gap-4 text-xs md:text-sm'>
                <a href='#' className='hover:text-white transition-colors'>Terms & Conditions</a>
                <span>|</span>
                <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
                <span>|</span>
                <a href='#' className='hover:text-white transition-colors'>Cookies</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer