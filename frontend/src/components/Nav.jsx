import logo from "../assets/vcart logo.png";
import { IoSearchCircleOutline, IoSearchCircle } from "react-icons/io5";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHome, IoMdContacts } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/authContext";
import { shopDataContext } from "../context/ShopContext";
import { WishlistContext } from "../context/WishlistContext";

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { showSearch, setShowSearch, search, setSearch, getCartCount } =
    useContext(shopDataContext);

  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logOut", {
        withCredentials: true,
      });
      getCurrentUser();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* ================= DESKTOP TOP NAV ================= */}
      <div
        className="fixed top-0 left-0 right-0 h-[70px] flex items-center justify-between px-[22px] md:px-[40px] 
                      bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-gray-100 z-50"
      >
        <div className="flex items-center gap-3 group">
          <div
            className="w-[40px] h-[40px] rounded-xl bg-rose-50 flex items-center justify-center 
                          group-hover:bg-rose-100 transition-all duration-300"
          >
            <img src={logo} className="w-[24px] cursor-pointer" alt="logo" onClick={() => navigate("/")}/>
          </div>
          <h1 className="text-[20px] md:text-[26px] font-bold text-gray-900 tracking-tight cursor-pointer"
          onClick={() => navigate("/")}>
            Style <span className="text-rose-600">Baazar</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-md">
          <li
            className=" font-medium text-gray-700 hover:text-rose-600 cursor-pointer 
                         transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 
                         after:w-0 after:h-[2px] after:bg-rose-600 after:transition-all after:duration-300 
                         hover:after:w-full"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className=" font-medium text-gray-700 hover:text-rose-600 cursor-pointer 
                         transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 
                         after:w-0 after:h-[2px] after:bg-rose-600 after:transition-all after:duration-300 
                         hover:after:w-full"
            onClick={() => navigate("/collection")}
          >
            Collection
          </li>
          <li
            className=" font-medium text-gray-700 hover:text-rose-600 cursor-pointer 
                         transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 
                         after:w-0 after:h-[2px] after:bg-rose-600 after:transition-all after:duration-300 
                         hover:after:w-full"
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className=" font-medium text-gray-700 hover:text-rose-600 cursor-pointer 
                         transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 
                         after:w-0 after:h-[2px] after:bg-rose-600 after:transition-all after:duration-300 
                         hover:after:w-full"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        <Link to="/wishlist" className="relative flex  sm:left-[10%] md:left-[2%] lg:left-[8%]">
        <p className="hidden md:block text-gray-700 md:font-medium">wishlist</p>
        <FaHeart className="text-red-500 text-2xl hover:scale-110 duration-300 " />
        {WishlistContext.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
        {wishlist.length}
          </span>
        )}
        </Link>

        <div className="flex items-center gap-5 relative">
          {!showSearch ? (
            
              <IoSearchCircleOutline
                onClick={() => {
                  setShowSearch(true);
                  navigate("/collection");
                }}
                className="text-[24px] text-gray-500  hover:text-rose-600 
                size-13  transition-colors duration-300"
              />
            
          ) : (
            <div
              className="w-[42px] h-[42px] rounded-full bg-rose-50 flex items-center justify-center 
                            cursor-pointer transition-all duration-300"
              onClick={() => setShowSearch(false)}
            >
              <IoSearchCircle className="text-[24px] text-rose-600" />
            </div>
          )}

          {!userData ? (
            <div
              className="w-[42px] h-[42px] rounded-full bg-gray-50 hover:bg-rose-50 flex items-center 
                            justify-center cursor-pointer transition-all duration-300 group"
              onClick={() => setShowProfile(!showProfile)}
            >
              <FaUserCircle
                className="text-[24px] text-gray-700 group-hover:text-rose-600 
                transition-colors duration-300"
              />
            </div>
          ) : (
            <div
              className="w-[42px] h-[42px] bg-rose-600 hover:bg-rose-700 text-white rounded-full 
                            flex items-center justify-center cursor-pointer font-bold text-[16px] 
                            shadow-lg shadow-rose-200 transition-all duration-300 hover:scale-105"
              onClick={() => setShowProfile(!showProfile)}
            >
              {userData.name[0].toUpperCase()}
            </div>
          )}

          {/* Cart */}
          <div
            className="hidden md:flex relative cursor-pointer group"
            onClick={() => navigate("/cart")}
          >
            <div
              className="w-[42px] h-[42px] rounded-full bg-gray-50 group-hover:bg-rose-50 
                            flex items-center justify-center transition-all duration-300"
            >
              <MdOutlineShoppingCart
                className="text-[24px] text-gray-700 group-hover:text-rose-600 
                transition-colors duration-300"
              />
            </div>
            {getCartCount() > 0 && (
              <span
                className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-rose-600 text-white 
                               text-[11px] font-bold rounded-full flex items-center justify-center 
                               shadow-lg animate-pulse"
              >
                {getCartCount()}
              </span>
            )}
          </div>

          {showProfile && (
            <div
              className="absolute top-[60px] right-0 w-[220px] bg-white shadow-[0_10px_40px_rgb(0,0,0,0.1)] 
                            rounded-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 
                            duration-200"
            >
              {!userData ? (
                <div
                  className="px-5 py-4 hover:bg-rose-50 cursor-pointer transition-all duration-200 
                                text-[15px] font-medium text-gray-700 hover:text-rose-600 
                                border-b border-gray-100"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              ) : (
                <div
                  className="px-5 py-4 hover:bg-rose-50 cursor-pointer transition-all duration-200 
                                text-[15px] font-medium text-gray-700 hover:text-rose-600 
                                border-b border-gray-100"
                  onClick={handleLogOut}
                >
                  Logout
                </div>
              )}
              <div
                className="px-5 py-4 hover:bg-rose-50 cursor-pointer transition-all duration-200 
                              text-[15px] font-medium text-gray-700 hover:text-rose-600
                              border-b border-gray-100"
                onClick={() => navigate("/order")}
              >
                Orders
              </div>
              <div
                className="px-5 py-4 hover:bg-rose-50 cursor-pointer transition-all duration-200 
                              text-[15px] font-medium text-gray-700 hover:text-rose-600"
                onClick={() => navigate("/about")}
              >
                About
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= DESKTOP & MOBILE SEARCH BAR ================= */}
      {showSearch && (
        <div
          className="fixed top-[80px] left-0 right-0 bg-white/95 backdrop-blur-md p-4 
                        shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-40"
        >
          <div className="max-w-[600px] mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[50px] px-5 rounded-2xl border-2 border-gray-100 outline-none 
                         focus:border-rose-600 transition-all duration-300 text-[15px] 
                         placeholder:text-gray-400"
            />
          </div>
        </div>
      )}

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[80px] bg-white/95 backdrop-blur-md 
                      border-t border-gray-100 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] 
                      flex lg:hidden items-center justify-between px-[16px] z-50"
      >
        <button
          className="flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 
                           text-gray-600 hover:text-rose-600 transition-all duration-300 group"
          onClick={() => navigate("/")}
        >
          <div
            className="w-[46px] h-[46px] rounded-2xl bg-gray-50 group-hover:bg-rose-50 
                          flex items-center justify-center transition-all duration-300"
          >
            <IoMdHome className="text-[22px] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-[12px] font-medium">Home</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 
                           text-gray-600 hover:text-rose-600 transition-all duration-300 group"
          onClick={() => navigate("/collection")}
        >
          <div
            className="w-[46px] h-[46px] rounded-2xl bg-gray-50 group-hover:bg-rose-50 
                          flex items-center justify-center transition-all duration-300"
          >
            <HiOutlineCollection className="text-[22px] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-[12px] font-medium">Collection</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 
                           text-gray-600 hover:text-rose-600 transition-all duration-300 group"
          onClick={() => navigate("/contact")}
        >
          <div
            className="w-[46px] h-[46px] rounded-2xl bg-gray-50 group-hover:bg-rose-50 
                          flex items-center justify-center transition-all duration-300"
          >
            <IoMdContacts className="text-[22px] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-[12px] font-medium">Contact</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 
                           text-gray-600 hover:text-rose-600 transition-all duration-300 group relative"
          onClick={() => navigate("/cart")}
        >
          <div
            className="w-[46px] h-[46px] rounded-2xl bg-gray-50 group-hover:bg-rose-50 
                          flex items-center justify-center transition-all duration-300 relative"
          >
            <MdOutlineShoppingCart className="text-[22px] group-hover:scale-110 transition-transform duration-300" />
            {getCartCount() > 0 && (
              <span
                className="absolute -top-1 -right-1 w-[20px] h-[20px] bg-rose-600 text-white 
                               text-[10px] font-bold rounded-full flex items-center justify-center 
                               shadow-lg animate-pulse"
              >
                {getCartCount()}
              </span>
            )}
          </div>
          <span className="text-[12px] font-medium">Cart</span>
        </button>
      </div>
    </>
  );
}

export default Nav;
