import React, { useContext, useState } from 'react';
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
    const { currency } = useContext(shopDataContext);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='w-[260px] max-w-[90%] h-[370px] bg-white/5 backdrop-blur-lg rounded-2xl hover:scale-105 duration-300 flex items-start justify-start flex-col p-3 cursor-pointer border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 relative group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

            {/* Image container with overlay */}
            <div className="relative w-full h-[75%] rounded-xl overflow-hidden mb-3">
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                    onClick={() => navigate(`/productdetails/${id}`)}
                />
                
                {/* Overlay on hover */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
                        <button 
                            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigate(`/productdetails/${id}`)}
                        >
                            Quick View
                        </button>
                    </div>
                )}
            </div>

            {/* Product info */}
            <div className="w-full flex-1 flex flex-col justify-between relative z-10">
                <h3 className='text-slate-400 text-base font-medium line-clamp-2 mb-1'>
                    {name}
                </h3>
                
                <div className="flex items-center justify-between">
                    <div className='text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                        {currency} {price}
                    </div>
                    
                    {/* Add to cart button */}
                    <button 
                        className="bg-gradient-to-r from-sky-400 to-green-400 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add your cart logic here
                            console.log('Added to cart:', id);
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:left-full transition-all duration-700"></div>
            </div>
        </div>
    );
}

export default Card;