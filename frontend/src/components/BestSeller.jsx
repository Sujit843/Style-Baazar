import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card';

function BestSeller() {
  const {products} = useContext(shopDataContext);
  const [bestSeller, SetBestSeller] = useState([]);

  useEffect(()=>{
    const filterProduct = products.filter((item) => item.bestSeller)
    SetBestSeller(filterProduct.slice(0, 4));
  }, [products])
  
  return (
    <div className='py-[6px] bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30'>
        
        {/* Header Section with Modern Design */}
        <div className='w-[100%] text-center md:mt-[6px] mb-[30px] px-[20px]'>
            
            {/* Decorative Element with Fire Theme */}
            <div className='flex items-center justify-center mb-[7px]'>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent'></div>
                <div className='mx-[15px]'>
                  <div className='relative'>
                    <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse'></div>
                    <div className='absolute inset-0 w-[10px] h-[10px] rounded-full bg-orange-400 blur-sm animate-pulse'></div>
                  </div>
                </div>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent'></div>
            </div>

            <Title text1={"BEST"} text2={"SELLER"} />
            
            <p className="w-[100%] max-w-[700px] m-auto text-[14px] md:text-[18px] px-[10px] text-gray-600 mt-[1px] font-light leading-relaxed">
                Tried, Tested, <span className='font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>Loved</span> - Discover Our All-Time Best-Sellers
            </p>

        </div>

        <div className='w-[100%] max-w-[1400px] mx-auto px-[20px] flex items-center justify-center flex-wrap gap-[35px] md:gap-[40px]'>
            {
                bestSeller.map((item, index) => (
                    <div 
                        key={index} 
                        className='transform hover:-translate-y-2 transition-all duration-300 animate-fade-in relative'
                        style={{animationDelay: `${index * 0.15}s`}}
                    >
                        {/* Best Seller Badge on Card */}
                        <div className='absolute -top-[12px] -right-[12px] z-10'>
                            <div className='relative'>
                                <div className='bg-gradient-to-br from-blue-400 to-rose-500 text-white px-[12px] py-[6px] rounded-full text-[10px] md:text-[11px] font-bold shadow-lg flex items-center gap-[4px]'>
                                    <span>⭐</span>
                                    <span>BEST</span>
                                </div>
                                <div className='absolute inset-0 bg-orange-400 blur-md opacity-50 rounded-full'></div>
                            </div>
                        </div>

                        <Card 
                            name={item.name} 
                            id={item._id} 
                            price={item.price} 
                            image={item.image1} 
                        />
                    </div>
                ))
            }
        </div>

        {/* Bottom Decorative Element */}
        <div className='flex items-center justify-center mt-[60px]'>
            <div className='w-[100px] h-[3px] bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full'></div>
        </div>

        {/* Add Animations */}
        <style jsx>{`
            @keyframes fade-in {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fade-in {
                animation: fade-in 0.6s ease-out forwards;
                opacity: 0;
            }
        `}</style>
    </div>
  )
}

export default BestSeller