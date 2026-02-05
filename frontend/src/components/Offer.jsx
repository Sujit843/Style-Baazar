import React from 'react'

function Offer() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
      <div className='w-[100%]  min-h-[40vh] flex flex-col items-center justify-center gap-[20px] py-[20px] bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden'>
            
            {/* Background Decorative Elements */}
            <div className='absolute top-[20%] left-[10%] w-[150px] h-[150px] bg-purple-300/20 rounded-full blur-3xl'></div>
            <div className='absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-pink-300/20 rounded-full blur-3xl'></div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center gap-[15px]'>
                
                {/* Special Offer Badge */}
                <div className='flex items-center gap-[10px] mb-[10px]'>
                    <div className='px-[15px] py-[8px] bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-[12px] md:text-[14px] font-bold shadow-lg animate-pulse'>
                        🎉 SPECIAL OFFER
                    </div>
                </div>

                <p className='md:text-[36px] text-[24px] font-bold px-[20px] text-center'>
                    <span className='bg-gradient-to-r from-blue-600 via-rose-500 to-orange-600 bg-clip-text text-transparent'>
                        Subscribe now & Get 20% OFF
                    </span>
                </p>
                
                <p className='md:text-[17px] text-[14px] text-gray-600 font-normal px-[20px] text-center max-w-[700px] leading-relaxed'>
                    Subscribe now & get <span className='font-bold text-orange-600'>20% OFF</span> on your first order! One click to subscribe, instant savings!
                </p>
            </div>

            {/* Form Section */}
            <div className='w-[100%] max-w-[650px] flex items-center justify-center mt-[20px] gap-[15px] px-[20px] relative z-10'>
                <div className='flex-1 relative group'>
                    <input 
                        type='email' 
                        placeholder='Enter Your Email'
                        required
                        className='w-[100%] h-[52px] px-[25px] rounded-full shadow-lg bg-white border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none text-gray-700 placeholder:text-gray-400'
                    />
                    <div className='absolute left-[5px] top-[50%] -translate-y-[50%] text-purple-500 opacity-0 group-focus-within:opacity-100 transition-opacity'>
                        ✉️
                    </div>
                </div>
                
                <button 
                    onClick={handleSubmit}
                    className='px-[30px] md:px-[40px] h-[52px] bg-gradient-to-r from-blue-400 to-green-400 hover:from-gray-700 hover:to-sky-300 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-[8px] group'
                >
                    <span>Subscribe</span>
                    <span className='transform group-hover:translate-x-1 transition-transform duration-300'>→</span>
                </button>
            </div>

            {/* Trust Indicators */}
            <div className='flex items-center gap-[20px] mt-[15px] flex-wrap justify-center relative z-10'>
                <div className='flex items-center gap-[6px] text-[12px] md:text-[14px] text-gray-600'>
                    <span className='text-green-500'>✓</span>
                    <span>No spam, ever</span>
                </div>
                <div className='flex items-center gap-[6px] text-[12px] md:text-[14px] text-gray-600'>
                    <span className='text-green-500'>✓</span>
                    <span>Unsubscribe anytime</span>
                </div>
                <div className='flex items-center gap-[6px] text-[12px] md:text-[14px] text-gray-600'>
                    <span className='text-green-500'>✓</span>
                    <span>Exclusive deals</span>
                </div>
            </div>

        </div>
  )
}

export default Offer