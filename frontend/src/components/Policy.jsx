import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { GiCardExchange } from "react-icons/gi";

const policies = [
  {
    icon: <GiCardExchange className="w-[36px] h-[36px] text-amber-400" />,
    accent: "amber",
    title: "Easy Exchange",
    sub: "Policy",
    desc: "Exchange Made Easy — Quick, Simple and Customer-Friendly Process.",
  },
  {
    icon: <RiDiscountPercentFill className="w-[36px] h-[36px] text-rose-400" />,
    accent: "rose",
    title: "7 Days Return",
    sub: "Policy",
    desc: "Shop With Confidence — 7 Days Easy Return Guarantee.",
  },
  {
    icon: <BiSupport className="w-[36px] h-[36px] text-emerald-400" />,
    accent: "emerald",
    title: "Best Customer",
    sub: "Support",
    desc: "24/7 Support Available — Quick Response and Expert Assistance.",
  },
];

const accentMap = {
  amber:   { border: "hover:border-amber-500/40",  glow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)]",  iconBg: "bg-amber-500/10 border-amber-500/20",  line: "via-amber-500",  subColor: "text-amber-400" },
  rose:    { border: "hover:border-rose-500/40",   glow: "hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)]",   iconBg: "bg-rose-500/10 border-rose-500/20",    line: "via-rose-500",   subColor: "text-rose-400"  },
  emerald: { border: "hover:border-emerald-500/40",glow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]",  iconBg: "bg-emerald-500/10 border-emerald-500/20", line: "via-emerald-500", subColor: "text-emerald-400"},
};

function Policy() {
  return (
    <section className="w-full relative bg-zinc-950 overflow-hidden py-6 px-5 md:px-12">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="relative max-w-[1400px] mx-auto mb-4">

        <p className="absolute -top-6 left-0 text-[80px] md:text-[130px] font-black text-white/[0.03] 
                      leading-none select-none tracking-tighter uppercase pointer-events-none">
          POLICY
        </p>

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                             text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                             px-4 py-2 rounded-full mb-4">
              <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
              Customer First
            </span>
            <h2 className="text-[42px] md:text-[64px] font-black leading-none tracking-tight">
              <span className="text-white block">OUR</span>
              <span className="block text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>
                POLICY
              </span>
            </h2>
          </div>

          <div className="md:text-right max-w-[320px]">
            <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed font-light">
              Customer-friendly policies.
              <span className="text-amber-400 font-medium"> Committed to your satisfaction.</span>
            </p>
            <div className="flex md:justify-end items-center gap-3 mt-4">
              <div className="h-[1px] w-12 bg-zinc-700"></div>
              <span className="text-zinc-500 text-[12px] tracking-widest uppercase">Our Promise</span>
              <div className="h-[1px] w-12 bg-zinc-700"></div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {policies.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <div key={i}
                className={`group relative bg-zinc-900 border border-zinc-800 rounded-2xl 
                            p-8 flex flex-col items-center text-center gap-5 overflow-hidden
                            hover:-translate-y-1 transition-all duration-300
                            ${a.border} ${a.glow}`}>

                <div className={`w-[72px] h-[72px] rounded-2xl border flex items-center justify-center 
                                 group-hover:scale-110 transition-transform duration-300 ${a.iconBg}`}>
                  {p.icon}
                </div>

                <div>
                  <h3 className="text-white text-[20px] md:text-[22px] font-black leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <span className={`text-[14px] font-semibold tracking-wider uppercase ${a.subColor}`}>
                    {p.sub}
                  </span>
                </div>

                <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {p.desc}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-[2px] 
                                 bg-gradient-to-r from-transparent ${a.line} to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto mt-6 flex items-center justify-between">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
        <span className="mx-5 text-zinc-600 text-[11px] tracking-[4px] uppercase font-medium">Style Baazar</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
    </section>
  )
}

export default Policy