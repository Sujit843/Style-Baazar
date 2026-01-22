import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6"
import { IoFilterSharp } from "react-icons/io5"
import Title from "../components/Title"
import { shopDataContext } from "../context/ShopContext"
import Card from "../components/Card"

function Collection() {

  const [showFliter, setShowFilter] = useState(false)
  const { products, search, showSearch } = useContext(shopDataContext)

  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevent")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if (showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productCopy)
  }

  const sortProduct = () => {
    let fbCopy = filterProduct.slice()

    switch (sortType) {
      case "low-high":
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price))
        break

      case "high-low":
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price))
        break

      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProduct()
  }, [sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  return (
    <div className='w-[98vw] min-h-[100vh] flex flex-col lg:flex-row pt-[70px] pb-[6rem] lg:pb-[2rem]
    bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20 overflow-x-hidden'>

      {/* FILTER SIDEBAR - Desktop & Mobile */}
      <div className={`
        lg:w-[280px] w-full
        lg:min-h-[100vh] 
        lg:fixed lg:left-0 lg:top-[70px]
        bg-white 
        lg:border-r border-gray-200 
        lg:shadow-lg
        z-40
        transition-all duration-300
        ${showFliter ? 'max-h-[2000px] opacity-100' : 'max-h-0 lg:max-h-[2000px] opacity-0 lg:opacity-100 overflow-hidden lg:overflow-visible'}
      `}>
        
        {/* Filter Header - Mobile */}
        <div className='lg:hidden p-[20px] bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
          <div className='flex items-center justify-between'>
            <p className='text-[20px] font-bold flex gap-[10px] items-center'>
              <IoFilterSharp className='text-[22px]' />
              FILTERS
            </p>
            <button 
              onClick={() => setShowFilter(false)}
              className='text-[24px] font-bold hover:rotate-90 transition-transform duration-300'
            >
              ×
            </button>
          </div>
        </div>

        {/* Filter Content */}
        <div className='p-[20px] overflow-y-auto max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-100px)]'>
          
          {/* Desktop Filter Title */}
          <div className='hidden lg:block mb-[25px]'>
            <p className='text-[24px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex gap-[10px] items-center'>
              <IoFilterSharp className='text-purple-600' />
              FILTERS
            </p>
            <div className='w-[60px] h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-[8px]'></div>
          </div>

          {/* CATEGORY */}
          <div className='mt-[20px] lg:mt-[30px] p-[20px] rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <p className='text-[17px] font-bold mb-[15px] text-gray-800 flex items-center gap-[8px]'>
              <span className='w-[6px] h-[6px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
              CATEGORIES
            </p>

            <div className='flex flex-col gap-[12px] text-[15px]'>
              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="Men" 
                  onChange={toggleCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-purple-600'
                />
                <span className='group-hover:text-purple-600 transition-colors font-medium'>MEN</span>
              </label>

              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="WoMen" 
                  onChange={toggleCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-pink-600'
                />
                <span className='group-hover:text-pink-600 transition-colors font-medium'>WOMEN</span>
              </label>

              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="Kids" 
                  onChange={toggleCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-purple-600'
                />
                <span className='group-hover:text-purple-600 transition-colors font-medium'>KIDS</span>
              </label>
            </div>
          </div>

          {/* SUB CATEGORY */}
          <div className='mt-[20px] p-[20px] rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <p className='text-[17px] font-bold mb-[15px] text-gray-800 flex items-center gap-[8px]'>
              <span className='w-[6px] h-[6px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></span>
              SUB-CATEGORIES
            </p>

            <div className='flex flex-col gap-[12px] text-[15px]'>
              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="TopWear" 
                  onChange={toggleSubCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-blue-600'
                />
                <span className='group-hover:text-blue-600 transition-colors font-medium'>TopWear</span>
              </label>

              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="BottomWear" 
                  onChange={toggleSubCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-purple-600'
                />
                <span className='group-hover:text-purple-600 transition-colors font-medium'>BottomWear</span>
              </label>

              <label className='flex gap-[10px] items-center cursor-pointer group hover:bg-white/60 p-[8px] rounded-lg transition-all duration-200'>
                <input 
                  type="checkbox" 
                  value="WinterWear" 
                  onChange={toggleSubCategory}
                  className='w-[18px] h-[18px] cursor-pointer accent-blue-600'
                />
                <span className='group-hover:text-purple-600 transition-colors font-medium'>WinterWear</span>
              </label>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(category.length > 0 || subCategory.length > 0) && (
            <button 
              onClick={() => {
                setCategory([])
                setSubCategory([])
              }}
              className='w-full mt-[20px] py-[12px] bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className='lg:ml-[280px] w-full lg:w-[calc(100%-280px)]'>

        {/* TOP BAR */}
        <div className='w-full p-[20px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white shadow-sm border-b border-gray-200'>
          
          <div className='flex items-center gap-[15px] w-full sm:w-auto'>
            {/* Mobile Filter Toggle Button */}
            <button 
              onClick={() => setShowFilter(prev => !prev)}
              className='lg:hidden px-[18px] py-[10px] bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center gap-[8px] font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              <IoFilterSharp className='text-[18px]' />
              <span>Filters</span>
              {(category.length > 0 || subCategory.length > 0) && (
                <span className='bg-white text-purple-600 px-[8px] py-[2px] rounded-full text-[12px] font-bold'>
                  {category.length + subCategory.length}
                </span>
              )}
            </button>

            <div className='hidden sm:block'>
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
            </div>
          </div>

          {/* Mobile Title */}
          <div className='sm:hidden w-full text-center'>
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>

          {/* Sort Dropdown */}
          <select
            className='bg-white border-2 border-gray-300 w-full sm:w-[240px] h-[50px] rounded-lg px-[15px]
            text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer'
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value="relevent">Sort By: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Count */}
        <div className='px-[20px] py-[15px] bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200'>
          <p className='text-[14px] text-gray-600'>
            Showing <span className='font-bold text-purple-600'>{filterProduct.length}</span> products
            {(category.length > 0 || subCategory.length > 0) && (
              <span className='ml-[8px] text-gray-500'>
                (Filtered)
              </span>
            )}
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className='w-full min-h-[70vh] flex flex-wrap justify-center gap-[25px] md:gap-[30px] lg:gap-[35px] p-[20px] md:p-[30px]'>
          {
            filterProduct.length > 0 ? (
              filterProduct.map((item, index) => (
                <div 
                  key={item._id}
                  className='animate-fade-in'
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <Card
                    id={item._id}
                    name={item.name}
                    image={item.image1}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <div className='w-full h-[50vh] flex flex-col items-center justify-center gap-[20px]'>
                <div className='text-[80px]'>😕</div>
                <p className='text-[24px] font-bold text-gray-700'>No Products Found</p>
                <p className='text-[16px] text-gray-500'>Try adjusting your filters</p>
                <button 
                  onClick={() => {
                    setCategory([])
                    setSubCategory([])
                  }}
                  className='mt-[20px] px-[30px] py-[12px] bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg'
                >
                  Clear All Filters
                </button>
              </div>
            )
          }
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFliter && (
        <div 
          className='lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm'
          onClick={() => setShowFilter(false)}
        ></div>
      )}

      {/* Animations */}
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
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Collection