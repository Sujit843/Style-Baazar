import React from 'react'

function BottomFooter() {
  return (
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
  )
}

export default BottomFooter