import React, { useContext, useState } from 'react';
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from '../context/WishlistContext';

function Card({ name, image, id, price }) {
    const { currency } = useContext(shopDataContext);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const { toggleWishlist, isWishlisted } = useContext(WishlistContext);

    return (
        <div
            className="w-full bg-zinc-900 border border-zinc-800 
                       hover:border-rose-500/40 rounded-2xl overflow-hidden 
                       hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(225,29,72,0.12)] 
                       transition-all duration-300 group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => toggleWishlist({ id, name, image, price })}
                className="absolute top-3 right-3 z-20 w-[34px] h-[34px] rounded-full 
                           bg-zinc-950/70 backdrop-blur-sm border border-zinc-700 
                           flex items-center justify-center 
                           hover:border-rose-500/60 hover:bg-zinc-900 transition-all duration-300"
            >
                <FaHeart
                    className={`text-[14px] transition-all duration-300 hover:scale-125
                        ${isWishlisted(id) ? 'text-rose-500' : 'text-zinc-500'}`}
                />
            </button>

            <div className="relative w-full h-[260px] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => navigate(`/productdetails/${id}`)}
                />

                {isHovered && (
                    <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px] 
                                    flex items-end justify-center pb-5 transition-all duration-300">
                        <button
                            className="bg-white text-zinc-950 text-[12px] font-black tracking-widest 
                                       uppercase px-6 py-2 rounded-full 
                                       hover:bg-rose-500 hover:text-white 
                                       transition-all duration-300 hover:scale-105 shadow-lg"
                            onClick={() => navigate(`/productdetails/${id}`)}
                        >
                            Quick View
                        </button>
                    </div>
                )}

                <div className="absolute top-0 -left-full w-1/2 h-full 
                                bg-gradient-to-r from-transparent via-white/8 to-transparent 
                                skew-x-12 group-hover:left-full transition-all duration-700 pointer-events-none">
                </div>
            </div>

            <div className="px-4 py-3 flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                    <h3 className="text-zinc-300 text-[13px] font-medium leading-snug line-clamp-1 
                                   group-hover:text-white transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-amber-400 text-[15px] font-bold mt-1">
                        {currency}{price}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] 
                            bg-gradient-to-r from-transparent via-rose-500 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
        </div>
    );
}

export default Card;