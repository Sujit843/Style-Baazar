import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Card from "../components/Card";

function RelatedProduct({category, subCategory, currentProductId}) {
  const {products} = useContext(shopDataContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice()
      productCopy = productCopy.filter((item) => category === item.category)
      productCopy = productCopy.filter((item) => subCategory === item.subCategory)
      productCopy = productCopy.filter((item) => currentProductId !== item._id)
      setRelated(productCopy.slice(0, 4))
    }
  }, [products, category, subCategory, currentProductId]);

  if (related.length === 0) return null;

  return (
    <section className="relative bg-zinc-950 overflow-hidden py-12 px-5 md:px-12">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="relative max-w-[1400px] mx-auto mb-12">

        <p className="absolute -top-5 left-0 text-[60px] md:text-[100px] font-black text-white/[0.03] 
                      leading-none select-none tracking-tighter uppercase pointer-events-none">
          RELATED
        </p>

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                             text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                             px-4 py-2 rounded-full mb-4">
              <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
              You May Also Like
            </span>
            <h2 className="text-[36px] md:text-[52px] font-black leading-none tracking-tight">
              <span className="text-white block">RELATED</span>
              <span className="block text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>
                PRODUCTS
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-zinc-700"></div>
            <span className="text-zinc-500 text-[12px] tracking-widest uppercase">{related.length} Items</span>
            <div className="h-[1px] w-12 bg-zinc-700"></div>
          </div>
        </div>

        <div className="mt-8 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map((item, index) => (
            <div key={index}
              className="group relative rounded-2xl overflow-hidden 
                         bg-zinc-900 border border-zinc-800 
                         hover:border-rose-500/40 hover:-translate-y-1 
                         transition-all duration-300 hover:shadow-[0_20px_60px_rgba(225,29,72,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              </div>
              <Card
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
    </section>
  )
}

export default RelatedProduct