import React, { useContext, useEffect, useState } from 'react'
import { IoFilterSharp } from "react-icons/io5"
import Title from "../components/Title"
import { shopDataContext } from "../context/ShopContext"
import Card from "../components/Card"

function Collection() {
  const [showFilter, setShowFilter] = useState(false)
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

  useEffect(() => { sortProduct() }, [sortType])
  useEffect(() => { setFilterProduct(products) }, [products])
  useEffect(() => { applyFilter() }, [category, subCategory, search, showSearch])

  const activeFilterCount = category.length + subCategory.length

  const FilterSection = ({ title, items, onChange, selected }) => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-[5px] h-[5px] rounded-full bg-rose-500"></span>
        <p className="text-[11px] font-black tracking-[3px] uppercase text-zinc-400">{title}</p>
      </div>
      <div className="flex flex-col gap-2">
        {items.map(({ value, label }) => (
          <label key={value}
            className="flex items-center gap-3 cursor-pointer group p-2 rounded-xl 
                       hover:bg-zinc-800 transition-all duration-200">
            <div className="relative w-[18px] h-[18px] flex-shrink-0">
              <input
                type="checkbox"
                value={value}
                checked={selected.includes(value)}
                onChange={onChange}
                className="w-full h-full rounded cursor-pointer accent-rose-600"
              />
            </div>
            <span className={`text-[13px] font-medium transition-colors duration-200 uppercase tracking-wider
                             ${selected.includes(value) ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`}>
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row pt-[30px] pb-[6rem] lg:pb-0 bg-zinc-950 overflow-x-hidden relative">

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="fixed top-[70px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent z-30"></div>

      <div className={`
        lg:w-[280px] w-full
        lg:min-h-screen
        lg:fixed lg:left-0 lg:top-[71px]
        bg-zinc-950 border-r border-zinc-800
        z-40 transition-all duration-300
        ${showFilter ? 'max-h-[2000px] opacity-100' : 'max-h-0 lg:max-h-[2000px] opacity-0 lg:opacity-100 overflow-hidden lg:overflow-visible'}
      `}>

        <div className="lg:hidden px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <span className="inline-flex items-center gap-2 text-rose-400 text-[11px] font-black tracking-[3px] uppercase">
            <IoFilterSharp className="text-[16px]" />
            Filters
          </span>
          <button
            onClick={() => setShowFilter(false)}
            className="w-[32px] h-[32px] rounded-full bg-zinc-800 border border-zinc-700 
                       flex items-center justify-center text-zinc-400 hover:text-white 
                       hover:bg-zinc-700 transition-all duration-200 text-[18px]"
          >×</button>
        </div>

        <div className="p-5 overflow-y-auto max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-71px)] flex flex-col gap-4">

          <div className="hidden lg:flex items-center gap-3 mb-2">
            <IoFilterSharp className="text-rose-500 text-[18px]" />
            <span className="text-[11px] font-black tracking-[4px] uppercase text-white">Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-auto w-[22px] h-[22px] bg-rose-600 text-white text-[10px] 
                               font-black rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </div>

          <div className="h-[1px] hidden lg:block bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent mb-2"></div>

          <FilterSection
            title="Categories"
            items={[
              { value: "Men", label: "Men" },
              { value: "WoMen", label: "Women" },
              { value: "Kids", label: "Kids" },
            ]}
            onChange={toggleCategory}
            selected={category}
          />

          <FilterSection
            title="Sub-Categories"
            items={[
              { value: "TopWear", label: "TopWear" },
              { value: "BottomWear", label: "BottomWear" },
              { value: "WinterWear", label: "WinterWear" },
            ]}
            onChange={toggleSubCategory}
            selected={subCategory}
          />

          {activeFilterCount > 0 && (
            <button
              onClick={() => { setCategory([]); setSubCategory([]) }}
              className="w-full py-3 bg-zinc-900 border border-rose-500/30 text-rose-400 
                         text-[11px] font-black tracking-widest uppercase rounded-full 
                         hover:bg-rose-600/10 hover:border-rose-500/60 
                         transition-all duration-300"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      <div className="relative lg:ml-[280px] w-full lg:w-[calc(100%-280px)]">

        <div className="w-full px-5 md:px-8 py-3 flex flex-col sm:flex-row justify-between 
                        items-start sm:items-center gap-4 bg-zinc-950 border-b border-zinc-800 sticky top-[70px] z-20">

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowFilter(prev => !prev)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-zinc-900 border border-zinc-800 hover:border-rose-500/40
                         text-zinc-400 hover:text-white text-[12px] font-black tracking-wider uppercase
                         transition-all duration-300"
            >
              <IoFilterSharp className="text-[16px]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-[20px] h-[20px] bg-rose-600 text-white text-[10px] 
                                 font-black rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="hidden sm:block">
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
            </div>
          </div>

          <div className="sm:hidden w-full">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-zinc-500 text-[12px] tracking-wider">
              <span className="text-amber-400 font-black">{filterProduct.length}</span> products
            </span>

            <select
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700
                         h-[42px] rounded-full px-4 pr-8
                         text-zinc-400 text-[12px] font-semibold tracking-wider
                         focus:outline-none focus:border-rose-500/60 
                         transition-all duration-300 cursor-pointer appearance-none"
              onChange={(e) => setSortType(e.target.value)}
              value={sortType}
            >
              <option value="relevent">Sort: Relevant</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>
        </div>

        <div className="w-full min-h-[70vh] p-5 md:p-8 mt-[2rem]">
          {filterProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filterProduct.map((item, index) => (
                <div
                  key={item._id}
                  className="group relative rounded-2xl
                             bg-zinc-900 border border-zinc-800 
                             hover:border-rose-500/40 hover:-translate-y-1 
                             transition-all duration-300 hover:shadow-[0_20px_60px_rgba(225,29,72,0.12)]"
                >
                  <Card id={item._id} name={item.name} image={item.image1} price={item.price} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-5 text-center">
              <div className="w-[80px] h-[80px] rounded-2xl bg-zinc-900 border border-zinc-800 
                              flex items-center justify-center text-[36px]">
                😕
              </div>
              <div>
                <p className="text-[22px] font-black text-white">No Products Found</p>
                <p className="text-zinc-500 text-[14px] mt-1">Try adjusting your filters</p>
              </div>
              <button
                onClick={() => { setCategory([]); setSubCategory([]) }}
                className="mt-2 px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white 
                           text-[12px] font-black tracking-widest uppercase rounded-full 
                           hover:shadow-[0_0_25px_rgba(225,29,72,0.35)]
                           transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {showFilter && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 z-30 backdrop-blur-sm"
          onClick={() => setShowFilter(false)}
        ></div>
      )}

      {showFilter && (
        <button
          onClick={() => setShowFilter(false)}
          className="lg:hidden fixed top-[80px] right-4 z-50 
                     w-[42px] h-[42px] rounded-full 
                     bg-gray-600 hover:bg-gray-500
                     border border-rose-400/40
                     flex items-center justify-center 
                     text-white text-[24px] font-black
                     shadow-[0_0_20px_rgba(225,29,72,0.45)]
                     transition-all duration-200 hover:scale-110"
        >
          ×
        </button>
      )}

    </div>
  )
}

export default Collection