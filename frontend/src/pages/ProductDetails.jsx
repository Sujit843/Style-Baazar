import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import RelatedProduct from '../components/RelatedProduct';
import BottomFooter from '../components/BottomFooter';

function ProductDetails() {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(shopDataContext);
  const [productData, setProductData] = useState({});
  const [image, setImage]   = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [sizes, setSizes]   = useState([]);
  const [activeTab, setActiveTab] = useState('description');

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage1(item.image1); setImage2(item.image2);
        setImage3(item.image3); setImage4(item.image4);
        setImage(item.image1);
        return null;
      }
    })
  }

  useEffect(() => { fetchProductData() }, [productId, products])

  const features = [
    { icon: <BsShieldCheck className="text-[22px] text-emerald-400" />,  label: "100% Original Product",              accent: "emerald" },
    { icon: <MdOutlinePayment className="text-[22px] text-amber-400" />, label: "Cash On Delivery Available",          accent: "amber"   },
    { icon: <TbTruckDelivery className="text-[22px] text-rose-400" />,   label: "Easy Return & Exchange within 7 days", accent: "rose"  },
  ]

  const accentBorder = { emerald: "border-emerald-500/20 hover:border-emerald-500/40", amber: "border-amber-500/20 hover:border-amber-500/40", rose: "border-rose-500/20 hover:border-rose-500/40" }

  return productData ? (
    <>
      <div className="w-full min-h-screen bg-zinc-950 md:mt-16 mt-16 pb-[4rem] relative overflow-hidden">


        <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
        </div>


        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12">

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">

            <div className="w-full lg:w-1/2">

              <div className="w-full aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl 
                              overflow-hidden mb-4 group relative
                              hover:border-rose-500/30 transition-all duration-500
                              hover:shadow-[0_20px_60px_rgba(225,29,72,0.1)]">
                <img
                  src={image}
                  alt={productData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {productData.bestSeller && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-zinc-950 
                                     text-[10px] font-black tracking-widest uppercase 
                                     px-3 py-1 rounded-full shadow-lg shadow-amber-500/30">
                      ⭐ BEST SELLER
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                                from-transparent via-rose-500 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {[image1, image2, image3, image4].filter(img => img).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setImage(img)}
                    className={`flex-shrink-0 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-xl overflow-hidden 
                                cursor-pointer transition-all duration-300 border-2
                                ${image === img
                                  ? 'border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)]'
                                  : 'border-zinc-800 hover:border-zinc-600'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-5">

              <div>
                <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                                 text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                                 px-4 py-2 rounded-full mb-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                  {productData.category}
                </span>
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-black leading-none tracking-tight text-white">
                  {productData.name && productData.name.toUpperCase()}
                </h1>
              </div>

              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 
                              px-4 py-3 rounded-full w-fit">
                <div className="flex gap-1">
                  {[1,2,3,4].map(i => <FaStar key={i} className="text-amber-400 text-[14px]" />)}
                  <FaStarHalfStroke className="text-amber-400 text-[14px]" />
                </div>
                <span className="text-zinc-400 text-[12px] font-semibold tracking-wider">(123 reviews)</span>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 relative overflow-hidden
                              hover:border-amber-500/30 transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 to-rose-500 rounded-l-2xl"></div>
                <p className="text-zinc-500 text-[11px] font-black tracking-[3px] uppercase mb-1">Price</p>
                <p className="text-amber-400 text-[36px] md:text-[42px] font-black leading-none">
                  {currency}{productData.price}
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5
                              hover:border-zinc-700 transition-all duration-300">
                <p className="text-zinc-400 text-[14px] leading-relaxed">
                  {productData.description}
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5">
                <p className="text-[11px] font-black tracking-[3px] uppercase text-zinc-400 mb-4 flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-rose-500"></span>
                  Select Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {productData.size && productData.size.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (sizes.includes(item)) {
                          setSizes(sizes.filter(s => s !== item));
                        } else {
                          setSizes([...sizes, item]);
                        }
                      }}
                      className={`px-5 py-2 rounded-full text-[12px] font-black tracking-wider uppercase 
                                  border transition-all duration-300 cursor-pointer
                                  ${sizes.includes(item)
                                    ? 'bg-rose-600 border-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)] scale-105'
                                    : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
                                  }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-3
                           bg-rose-600 hover:bg-rose-500 text-white
                           py-4 rounded-full font-black text-[13px] tracking-widest uppercase
                           hover:shadow-[0_0_30px_rgba(225,29,72,0.35)]
                           transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
                onClick={() => {
                  if (sizes.length === 0) {
                    addToCart(productData._id, null);
                  } else {
                    sizes.forEach(s => addToCart(productData._id, s));
                  }
                }}
              >
                <span>Add to Cart</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[16px]">→</span>
              </button>

              <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

              <div className="flex flex-col gap-2">
                {features.map((f, i) => (
                  <div key={i}
                    className={`flex items-center gap-3 bg-zinc-900 border rounded-xl px-4 py-3 
                                transition-all duration-300 ${accentBorder[f.accent]}`}>
                    {f.icon}
                    <p className="text-zinc-400 text-[13px] font-medium">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14">

            <div className="flex border-b border-zinc-800">
              {[
                { id: 'description', label: 'Description' },
                { id: 'reviews',     label: 'Reviews (123)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-[12px] font-black tracking-widest uppercase 
                               transition-all duration-300 cursor-pointer border-b-2 -mb-[2px]
                               ${activeTab === tab.id
                                 ? 'border-rose-500 text-rose-400'
                                 : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-zinc-900 border border-t-0 border-zinc-800 rounded-b-2xl p-6 md:p-8">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
                    quidem esse. Doloribus expedita veritatis officia accusantium
                    veniam non totam quia distinctio. Ea sint ducimus libero perspiciatis,
                    obcaecati dolor earum similique?
                  </p>
                  <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed">
                    High-quality materials ensure durability and comfort. Perfect for everyday wear
                    and special occasions. Easy care instructions make maintenance simple.
                  </p>
                </div>
              )}
              {activeTab === 'reviews' && (
                <p className="text-zinc-500 text-[14px]">Customer reviews will appear here.</p>
              )}
            </div>
          </div>

          <div className="mt-10">
            <RelatedProduct
              category={productData.category}
              subCategory={productData.subCategory}
              currentProductId={productData._id}
            />
          </div>
        </div>
      </div>

      <BottomFooter />
    </>
  ) : <div className="opacity-0"></div>
}

export default ProductDetails