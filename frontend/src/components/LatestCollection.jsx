import React from 'react'
import Title from './Title'
import { useContext } from 'react'
import { useState } from 'react';
import {shopDataContext} from "../context/ShopContext";
import { useEffect } from 'react';
import Card from "../components/Card";

function LatestCollection() {
    const {products} = useContext(shopDataContext);
    const [latestProduct, setLatestProduct] = useState([])

    useEffect(() =>{
        setLatestProduct(products.slice(0,8))
    }, [products]);

  return (
    <div className='py-[30px] bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30'>
        
        {/* Header Section with Modern Design */}
        <div className='w-[100%] text-center md:mt-[20px] mb-[50px] px-[20px]'>
            
            {/* Decorative Element */}
            <div className='flex items-center justify-center mb-[20px]'>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
                <div className='mx-[15px] w-[8px] h-[8px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></div>
                <div className='w-[60px] h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent'></div>
            </div>

            <Title text1={"LATEST"} text2={"COLLECTION"} />
            
            <p className="w-[100%] max-w-[600px] m-auto text-[14px] md:text-[18px] px-[10px] text-gray-600 mt-[15px] font-light leading-relaxed">
                Step Into Style - <span className='font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>New Collection</span> Dropping This Season!
            </p>

            {/* Subtitle Badge */}
            <div className='flex items-center justify-center mt-[15px]'>
                <span className='px-[20px] py-[8px] bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-[12px] md:text-[14px] font-medium shadow-sm'>
                    ✨ Trending Now
                </span>
            </div>
        </div>

        {/* Products Grid with Animation */}
        <div className='w-[100%] max-w-[1400px] mx-auto px-[20px] flex items-center justify-center flex-wrap gap-[35px] md:gap-[40px]'>
            {
                latestProduct.map((item, index) =>(
                    <div 
                        key={index} 
                        className='transform hover:-translate-y-2 transition-all duration-300 animate-fade-in'
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        <Card 
                            name={item.name} 
                            image={item.image1} 
                            id={item._id} 
                            price={item.price} 
                        />
                    </div>
                ))
            }
        </div>

        {/* Bottom Decorative Element */}
        <div className='flex items-center justify-center mt-[60px]'>
            <div className='w-[100px] h-[3px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full'></div>
        </div>

        {/* Add these animations in your global CSS or tailwind config */}
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

export default LatestCollection