import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {shopDataContext} from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import RelatedProduct from '../components/RelatedProduct';

function ProductDetails() {
    const {productId} = useParams()
    const {products, currency, addToCart} = useContext(shopDataContext);
    const [productData, setProductData] = useState({});

    const [image , setImage] = useState("");
    const [image1 , setImage1] = useState("");
    const [image2 , setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [sizes, setSizes] = useState([]);
    const [activeTab, setActiveTab] = useState('description');

    const fetchProductData = () => {
        products.map((item) =>{
            if (item._id === productId){
                setProductData(item)
                console.log(productData)
                setImage1(item.image1)
                setImage2(item.image2)
                setImage3(item.image3)
                setImage4(item.image4)
                setImage(item.image1);
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])

return productData ? (
 <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20 md:mt-16 mt-24 pb-[4rem]">
      
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          
          {/* Image Gallery Section */}
          <div className="w-full lg:w-1/2">
            {/* Main Image with Modern Frame */}
            <div className="w-full aspect-square border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xl mb-4 md:mb-6 group relative">
              <img 
                src={image} 
                alt={productData.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Sale Badge */}
              {productData.bestSeller && (
                <div className='absolute top-[15px] right-[15px]'>
                  <div className='relative'>
                    <div className='bg-gradient-to-br from-orange-500 to-red-500 text-white px-[15px] py-[8px] rounded-full text-[12px] font-bold shadow-lg flex items-center gap-[5px]'>
                      <span>⭐</span>
                      <span>BEST SELLER</span>
                    </div>
                    <div className='absolute inset-0 bg-orange-400 blur-md opacity-50 rounded-full'></div>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnails - Horizontal Scroll */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 scrollbar-hide">
              {[image1, image2, image3, image4].filter(img => img).map((img, idx) => (
                <div 
                  key={idx}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-3 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    image === img 
                      ? 'border-purple-500 scale-105 shadow-lg ring-4 ring-purple-200' 
                      : 'border-gray-300 hover:border-purple-300 hover:scale-105'
                  }`}
                  onClick={() => setImage(img)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-5">
            
            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
              {productData.name && productData.name.toUpperCase()}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 py-3 rounded-xl w-fit border border-yellow-200">
              <div className="flex gap-1">
                <FaStar className="text-lg sm:text-xl fill-yellow-400" />
                <FaStar className="text-lg sm:text-xl fill-yellow-400" />
                <FaStar className="text-lg sm:text-xl fill-yellow-400" />
                <FaStar className="text-lg sm:text-xl fill-yellow-400" />
                <FaStarHalfStroke className="text-lg sm:text-xl fill-yellow-400" />
              </div>
              <p className="text-base sm:text-lg font-bold text-gray-700">(123 reviews)</p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 rounded-xl border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Price</p>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currency} {productData.price}
              </p>
            </div>

            {/* Description */}
            <div className="bg-white px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col gap-3 bg-white px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                Select Size
              </p>
              <div className="flex flex-wrap gap-3">
                {productData.size && productData.size.map((item, index) => (
                  <button 
                    key={index}
                    className={`border-2 py-3 px-5 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
                      sizes.includes(item) 
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent scale-105 shadow-lg" 
                        : "bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:scale-105"
                    }`}
                    onClick={() => {
                      if (sizes.includes(item)) {
                        setSizes(sizes.filter(s => s !== item));
                      } else {
                        setSizes([...sizes, item]);
                      }
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full sm:w-auto text-base sm:text-lg py-4 px-10 rounded-xl mt-2 shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              onClick={() => {
                if(sizes.length === 0){
                  addToCart(productData._id, null);
                } else {
                  sizes.forEach(s => addToCart(productData._id, s));
                }
              }}
            >
              <span>Add to Cart</span>
              <span className='transform group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </button>

            {/* Divider */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"></div>

            {/* Additional Info with Icons */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-3 rounded-xl border border-green-200">
                <BsShieldCheck className="text-2xl text-green-600 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700 font-medium">100% Original Product</p>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 rounded-xl border border-blue-200">
                <MdOutlinePayment className="text-2xl text-blue-600 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700 font-medium">Cash On Delivery Available</p>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-3 rounded-xl border border-orange-200">
                <TbTruckDelivery className="text-2xl text-orange-600 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700 font-medium">Easy Return & Exchange within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
        
        {/* Tabs */}
        <div className="flex border-b-2 border-gray-200 overflow-x-auto bg-white rounded-t-xl">
          <button 
            className={`flex-shrink-0 px-6 sm:px-8 py-4 text-sm sm:text-base font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'description'
                ? 'border-b-4 border-purple-500 text-purple-600 bg-purple-50'
                : 'text-gray-600 hover:text-purple-500 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`flex-shrink-0 px-6 sm:px-8 py-4 text-sm sm:text-base font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'border-b-4 border-purple-500 text-purple-600 bg-purple-50'
                : 'text-gray-600 hover:text-purple-500 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (123)
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white border-2 border-t-0 border-gray-200 p-6 sm:p-8 md:p-10 rounded-b-xl shadow-lg">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
                quidem esse. Doloribus expedita veritatis officia accusantium
                veniam non totam quia distinctio. Ea sint ducimus libero perspiciatis, 
                obcaecati dolor earum similique?
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                High-quality materials ensure durability and comfort. Perfect for everyday wear
                and special occasions. Easy care instructions make maintenance simple.
              </p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <p className="text-base text-gray-600">Customer reviews will appear here.</p>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <RelatedProduct 
            category={productData.category} 
            subCategory={productData.subCategory} 
            currentProductId={productData._id}
          />
        </div>
      </div>
    </div>

  ) : <div className="opacity-0"></div>
}

export default ProductDetails