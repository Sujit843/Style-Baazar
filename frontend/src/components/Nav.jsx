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
import { authDataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";
import { WishlistContext } from "../context/WishlistContext";
import confirmBox from "../utils/confirmBox";

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { showSearch, setShowSearch, search, setSearch, getCartCount } =
  useContext(shopDataContext);

  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const { wishlist } = useContext(WishlistContext);

  const handleLogOut = async () => {
    const confirm = await confirmBox("Do you really want to logout?");
    if (!confirm) return;
    try {
      await axios.get(serverUrl + "/api/auth/logOut", { withCredentials: true });
      getCurrentUser();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[70px] flex items-center justify-between 
                      px-[22px] md:px-[40px] bg-zinc-950/95 backdrop-blur-md 
                      border-b border-zinc-800 z-50
                      shadow-[0_4px_30px_rgba(0,0,0,0.4)]">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-[38px] h-[38px] rounded-xl bg-rose-600/10 border border-rose-500/20 
                          flex items-center justify-center group-hover:bg-rose-600/20 transition-all duration-300">
            <img src={logo} className="w-[22px]" alt="logo" />
          </div>
          <h1 className="text-[20px] md:text-[24px] font-black tracking-tight text-white">
            Style <span className="text-transparent" style={{WebkitTextStroke: '1px #e11d48'}}>Baazar</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8">
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="text-[13px] font-semibold tracking-widest uppercase text-zinc-400 
                         hover:text-white cursor-pointer transition-all duration-300 
                         relative after:absolute after:bottom-[-4px] after:left-0 
                         after:w-0 after:h-[1px] after:bg-rose-500 
                         after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 relative">

          <Link
            to="/wishlist"
            className="relative flex items-center gap-2 px-3 py-2 rounded-full 
                       hover:bg-zinc-800 border border-transparent hover:border-zinc-700
                       transition-all duration-300 group"
          >
            <div className="relative">
              <FaHeart className="text-[18px] text-zinc-500 group-hover:text-rose-500 transition-all duration-300 group-hover:scale-110" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[17px] h-[17px] bg-rose-600 text-white 
                                 text-[9px] font-black rounded-full flex items-center justify-center px-1 
                                 shadow-lg shadow-rose-500/30">
                  {wishlist.length}
                </span>
              )}
            </div>
            <span className="hidden md:block text-[12px] font-semibold tracking-wider uppercase text-zinc-500 group-hover:text-zinc-200 transition-colors duration-300">
              Wishlist
            </span>
          </Link>

          {!showSearch ? (
            <div
              className="w-[40px] h-[40px] rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 
                         hover:border-zinc-600 flex items-center justify-center cursor-pointer transition-all duration-300 group"
              onClick={() => { setShowSearch(true); navigate("/collection"); }}
            >
              <IoSearchCircleOutline className="text-[22px] text-zinc-400 group-hover:text-white transition-colors duration-300" />
            </div>
          ) : (
            <div
              className="w-[40px] h-[40px] rounded-full bg-rose-600/20 border border-rose-500/40 
                         flex items-center justify-center cursor-pointer transition-all duration-300"
              onClick={() => setShowSearch(false)}
            >
              <IoSearchCircle className="text-[22px] text-rose-400" />
            </div>
          )}

          {!userData ? (
            <div
              className="w-[40px] h-[40px] rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 
                         hover:border-zinc-600 flex items-center justify-center cursor-pointer transition-all duration-300 group"
              onClick={() => setShowProfile(!showProfile)}
            >
              <FaUserCircle className="text-[22px] text-zinc-400 group-hover:text-white transition-colors duration-300" />
            </div>
          ) : (
            <div
              className="w-[40px] h-[40px] bg-rose-600 hover:bg-rose-500 text-white rounded-full 
                         flex items-center justify-center cursor-pointer font-black text-[15px] 
                         shadow-lg shadow-rose-500/20 transition-all duration-300 hover:scale-105"
              onClick={() => setShowProfile(!showProfile)}
            >
              {userData.name[0].toUpperCase()}
            </div>
          )}

          <div
            className="hidden md:flex relative cursor-pointer group"
            onClick={() => navigate("/cart")}
          >
            <div className="w-[40px] h-[40px] rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 
                            hover:border-zinc-600 flex items-center justify-center transition-all duration-300">
              <MdOutlineShoppingCart className="text-[22px] text-zinc-400 group-hover:text-white transition-colors duration-300" />
            </div>
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-[20px] h-[20px] bg-rose-600 text-white 
                               text-[10px] font-black rounded-full flex items-center justify-center 
                               shadow-lg shadow-rose-500/30 animate-pulse">
                {getCartCount()}
              </span>
            )}
          </div>

          {showProfile && (
            <div className="absolute top-[56px] right-0 w-[200px] bg-zinc-900 
                            border border-zinc-800 rounded-2xl overflow-hidden 
                            shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-50">
              <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

              {!userData ? (
                <div
                  className="px-5 py-3 hover:bg-zinc-800 cursor-pointer transition-all duration-200 
                             text-[13px] font-semibold tracking-wider uppercase text-zinc-400 
                             hover:text-white border-b border-zinc-800"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              ) : (
                <div className="flex items-center justify-between border-b border-zinc-800">
                  <div
                    className="px-5 py-3 hover:bg-zinc-800 cursor-pointer transition-all duration-200 
                               text-[13px] font-semibold tracking-wider uppercase text-zinc-400 
                               hover:text-rose-400 flex-1"
                    onClick={handleLogOut}
                  >
                    Logout
                  </div>
                  <div
                    className="px-4 py-3 hover:bg-zinc-800 cursor-pointer transition-all duration-200 
                               text-zinc-500 hover:text-rose-400 text-[15px] font-bold"
                    onClick={() => setShowProfile(false)}
                  >
                    ✕
                  </div>
                </div>
              )}
              <div
                className="px-5 py-3 hover:bg-zinc-800 cursor-pointer transition-all duration-200 
                           text-[13px] font-semibold tracking-wider uppercase text-zinc-400 
                           hover:text-white border-b border-zinc-800"
                onClick={() => navigate("/order")}
              >
                Orders
              </div>
              <div
                className="px-5 py-3 hover:bg-zinc-800 cursor-pointer transition-all duration-200 
                           text-[13px] font-semibold tracking-wider uppercase text-zinc-400 hover:text-white"
                onClick={() => navigate("/about")}
              >
                About
              </div>
            </div>
          )}
        </div>
      </div>

      {showSearch && (
        <div className="fixed top-[70px] left-0 right-0 bg-zinc-950/98 backdrop-blur-md 
                        border-b border-zinc-800 px-5 py-4 z-40">
          <div className="max-w-[600px] mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[48px] px-5 pr-12 rounded-full bg-zinc-900 border border-zinc-700 
                         outline-none focus:border-rose-500 transition-all duration-300 text-[14px] 
                         text-white placeholder:text-zinc-600 font-medium"
            />
            <IoSearchCircleOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px] text-zinc-500 pointer-events-none" />
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-zinc-950/98 backdrop-blur-md 
                      border-t border-zinc-800 flex lg:hidden items-center justify-between 
                      px-[12px] z-50 shadow-[0_-4px_30px_rgba(0,0,0,0.4)]">

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/50 to-transparent"></div>

        {[
          { icon: <IoMdHome className="text-[20px]" />, label: "Home", action: () => navigate("/") },
          { icon: <HiOutlineCollection className="text-[20px]" />, label: "Collection", action: () => navigate("/collection") },
          { icon: <IoMdContacts className="text-[20px]" />, label: "Contact", action: () => navigate("/contact") },
        ].map(({ icon, label, action }) => (
          <button
            key={label}
            className="flex flex-col items-center justify-center gap-1 min-w-[56px] py-2 
                       text-zinc-500 hover:text-white transition-all duration-300 group"
            onClick={action}
          >
            <div className="w-[42px] h-[42px] rounded-xl bg-zinc-900 group-hover:bg-zinc-800 
                            border border-zinc-800 group-hover:border-zinc-600
                            flex items-center justify-center transition-all duration-300">
              {icon}
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase">{label}</span>
          </button>
        ))}

        <Link
          to="/wishlist"
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] py-2 
                     text-zinc-500 hover:text-white transition-all duration-300 group"
        >
          <div className="w-[42px] h-[42px] rounded-xl bg-zinc-900 group-hover:bg-zinc-800 
                          border border-zinc-800 group-hover:border-rose-500/40
                          flex items-center justify-center transition-all duration-300 relative">
            <FaHeart className="text-[18px] text-zinc-500 group-hover:text-rose-500 transition-all duration-300" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-rose-600 text-white 
                               text-[9px] font-black rounded-full flex items-center justify-center px-1">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase">Wishlist</span>
        </Link>

        <button
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] py-2 
                     text-zinc-500 hover:text-white transition-all duration-300 group relative"
          onClick={() => navigate("/cart")}
        >
          <div className="w-[42px] h-[42px] rounded-xl bg-zinc-900 group-hover:bg-zinc-800 
                          border border-zinc-800 group-hover:border-zinc-600
                          flex items-center justify-center transition-all duration-300 relative">
            <MdOutlineShoppingCart className="text-[20px]" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-rose-600 text-white 
                               text-[9px] font-black rounded-full flex items-center justify-center 
                               animate-pulse">
                {getCartCount()}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase">Cart</span>
        </button>
      </div>
    </>
  );
}

export default Nav;