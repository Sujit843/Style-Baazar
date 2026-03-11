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
    <section className="relative bg-zinc-950 overflow-hidden py-6 px-5 md:px-12">

      <div className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="relative max-w-[1400px] mx-auto mb-6">

        <p className="absolute -top-6 left-0 text-[80px] md:text-[130px] font-black text-white/[0.03] leading-none select-none tracking-tighter uppercase pointer-events-none">
          NEW
        </p>

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          
          <div>
            <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                             text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                             px-4 py-2 rounded-full mb-4">
              <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
              Trending Now
            </span>

            <h2 className="text-[42px] md:text-[64px] font-black leading-none tracking-tight">
              <span className="text-white block">LATEST</span>
              <span className="block text-transparent"
                style={{WebkitTextStroke: '1.5px #e11d48'}}>
                COLLECTION
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-[320px]">
            <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed font-light">
              Step into the season's freshest looks. 
              <span className="text-rose-400 font-medium"> Curated for the bold.</span>
            </p>
            <div className="flex md:justify-end items-center gap-3 mt-4">
              <div className="h-[1px] w-12 bg-zinc-700"></div>
              <span className="text-zinc-500 text-[12px] tracking-widest uppercase">8 Pieces</span>
              <div className="h-[1px] w-12 bg-zinc-700"></div>
            </div>
          </div>
        </div>

        <div className="mt-6 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {latestProduct.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
                         bg-zinc-900 border border-zinc-800 
                         hover:border-rose-500/50 hover:-translate-y-1 
                         transition-all duration-300 hover:shadow-[0_20px_60px_rgba(225,29,72,0.15)]"
            >
              {index === 0 && (
                <span className="absolute top-3 left-3 z-10 bg-rose-600 text-white text-[10px] 
                                 font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                  New
                </span>
              )}

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                </div>
                <Card
                  name={item.name}
                  image={item.image1}
                  id={item._id}
                  price={item.price}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto mt-6 flex items-center justify-between">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
        <span className="mx-5 text-zinc-600 text-[11px] tracking-[4px] uppercase font-medium">
          Style Baazar
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/50 to-transparent"></div>
    </section>
  )
}

export default LatestCollection