import React from 'react'
import Logo from "../assets/vcart logo.png";
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-zinc-950 relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
              <div className="w-[40px] h-[40px] rounded-xl bg-rose-600/10 border border-rose-500/20 
                              flex items-center justify-center group-hover:bg-rose-600/20 transition-all duration-300">
                <img src={Logo} alt="Style Baazar" className="w-[22px]" />
              </div>
              <p className="text-[20px] font-black text-white tracking-tight">
                Style <span className="text-transparent" style={{WebkitTextStroke: '1px #e11d48'}}>Baazar</span>
              </p>
            </div>

            <p className="text-[13px] text-zinc-500 leading-relaxed">
              A modern fashion platform designed to provide a smooth and enjoyable online shopping experience.
            </p>

            <div className="flex gap-3 mt-1">
              {[
                { icon: <FaFacebookF />, color: "hover:border-blue-500/60 hover:text-blue-400" },
                { icon: <FaInstagram />, color: "hover:border-pink-500/60 hover:text-pink-400" },
                { icon: <FaXTwitter />,  color: "hover:border-zinc-400/60 hover:text-white" },
              ].map((s, i) => (
                <a key={i} href="#"
                  className={`w-[36px] h-[36px] rounded-full bg-zinc-900 border border-zinc-800 
                              flex items-center justify-center text-zinc-500 text-[14px]
                              transition-all duration-300 hover:scale-110 ${s.color}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <span className="text-[11px] font-black tracking-[4px] uppercase text-white">Company</span>
              <div className="mt-2 h-[1px] w-8 bg-rose-500/60"></div>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home",       path: "/" },
                { label: "About Us",   path: "/about" },
                { label: "Collection", path: "/collection" },
                { label: "Delivery",   path: "/order" },
                { label: "Privacy Policy", path: "#" },
              ].map((item) => (
                <li key={item.label}
                  className="text-[13px] text-zinc-500 hover:text-white cursor-pointer 
                             transition-all duration-200 flex items-center gap-2 group"
                  onClick={() => navigate(item.path)}>
                  <span className="w-0 group-hover:w-3 h-[1px] bg-rose-500 transition-all duration-300"></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <span className="text-[11px] font-black tracking-[4px] uppercase text-white">Customer Service</span>
              <div className="mt-2 h-[1px] w-8 bg-rose-500/60"></div>
            </div>
            <ul className="flex flex-col gap-3">
              {["Track Order", "Returns & Exchange", "Shipping Info", "FAQs", "Size Guide"].map((item) => (
                <li key={item}
                  className="text-[13px] text-zinc-500 hover:text-white cursor-pointer 
                             transition-all duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-rose-500 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <span className="text-[11px] font-black tracking-[4px] uppercase text-white">Get In Touch</span>
              <div className="mt-2 h-[1px] w-8 bg-rose-500/60"></div>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "📞", text: "+91-989-999-8888" },
                { icon: "✉️", text: "contact@stylebaazar.com" },
                { icon: "📍", text: "123 Fashion Street, Mumbai" },
              ].map((item) => (
                <li key={item.text} className="text-[13px] text-zinc-500 flex items-center gap-3">
                  <span className="text-[14px]">{item.icon}</span>
                  <span className="hover:text-white transition-colors duration-200 cursor-default">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <p className="text-[11px] font-black tracking-[3px] uppercase text-zinc-400 mb-3">
                Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 text-[13px] bg-zinc-900 border border-zinc-800 
                             rounded-full text-white placeholder:text-zinc-600 
                             outline-none focus:border-rose-500/60 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-[12px] 
                                   font-black tracking-wider uppercase rounded-full 
                                   hover:shadow-[0_0_20px_rgba(225,29,72,0.3)]
                                   transition-all duration-300 hover:scale-105">
                  Go
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-5 
                      flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-zinc-600 tracking-wider text-center md:text-left">
          Copyright © 2026 <span className="text-zinc-400 font-semibold">Style Baazar</span>. All Rights Reserved.
        </p>
        <div className="flex gap-5 text-[11px] text-zinc-600 tracking-wider">
          {["Terms & Conditions", "Privacy Policy", "Cookies"].map((item, i, arr) => (
            <React.Fragment key={item}>
              <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
              {i < arr.length - 1 && <span className="text-zinc-800">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
    </footer>
  )
}

export default Footer