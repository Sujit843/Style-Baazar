import React from 'react'
import Title from "../components/Title"
import about from "../assets/about2.png"
import Offer from "../components/Offer"
import Footer from "../components/Footer";

const whyCards = [
  {
    accent: "rose",
    iconBg: "bg-rose-600/10 border-rose-500/20",
    iconColor: "text-rose-400",
    border: "hover:border-rose-500/40",
    glow: "hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)]",
    line: "via-rose-500",
    title: "Quality Assurance",
    desc: "Strict quality checks at every stage — durable, stylish, and reliable products guaranteed.",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    accent: "amber",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    border: "hover:border-amber-500/40",
    glow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)]",
    line: "via-amber-500",
    title: "Convenience",
    desc: "Shop anytime, anywhere with a smooth and completely hassle-free experience.",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    accent: "emerald",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]",
    line: "via-emerald-500",
    title: "Customer Service",
    desc: "Our support team is always ready to help you with any queries, anytime.",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-1.414-.586z" />
    ),
  },
];

function About() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 flex flex-col pt-[50px]">


        <section className="relative overflow-hidden px-5 md:px-12 py-10">

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

          <div className="relative max-w-[1400px] mx-auto">

            <div className="mb-12">
              <p className="absolute -top-4 left-0 text-[80px] md:text-[130px] font-black text-white/[0.03] 
                            leading-none select-none tracking-tighter uppercase pointer-events-none">ABOUT</p>
              <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                               text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                Our Story
              </span>
              <Title text1={"ABOUT"} text2={"US"} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">

              <div className="lg:w-[55%] w-full relative group">
                <div className="absolute inset-0 bg-rose-500/5 rounded-2xl blur-xl group-hover:bg-rose-500/10 transition-all duration-500"></div>
                <img
                  src={about}
                  alt="About Style Baazar"
                  className="relative w-full lg:h-[65vh] object-cover rounded-2xl border border-zinc-800 
                             group-hover:border-rose-500/30 transition-all duration-500"
                />
              </div>

              <div className="lg:w-[45%] w-full flex flex-col gap-6">

                <div className="space-y-4">
                  {[
                    <>Style Baazar is a modern fashion e-commerce platform designed to provide a <span className="text-white font-semibold">smooth and enjoyable</span> online shopping experience.</>,
                    <>Users can explore trendy collections, filter products by category, securely register and log in, and <span className="text-white font-semibold">place orders easily</span>.</>,
                    <>Style Baazar focuses on <span className="text-white font-semibold">simplicity, performance, and user-friendly design</span>.</>,
                  ].map((text, i) => (
                    <p key={i} className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>

                <div className="relative mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 
                                overflow-hidden group hover:border-rose-500/30 transition-all duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-500 to-amber-500 rounded-l-2xl"></div>
                  <p className="text-[11px] font-black tracking-[4px] uppercase text-rose-400 mb-3">
                    Our Mission
                  </p>
                  <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed">
                    At Style Baazar, our mission is to make fashion{" "}
                    <span className="text-white font-semibold">accessible, affordable, and enjoyable</span> for everyone.
                    We strive to deliver trendy, high-quality products with a seamless shopping experience.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-rose-500/60 to-transparent"></div>
                  <span className="text-zinc-600 text-[11px] tracking-[3px] uppercase">Style Baazar</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 md:px-12 py-6 bg-zinc-950">

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

          <div className="relative max-w-[1400px] mx-auto">

            <div className="mb-8">
              <p className="absolute -top-4 left-0 text-[80px] md:text-[130px] font-black text-white/[0.03] 
                            leading-none select-none tracking-tighter uppercase pointer-events-none">WHY</p>
              <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 
                                   text-amber-400 text-[11px] font-semibold tracking-[3px] uppercase 
                                   px-4 py-2 rounded-full mb-4">
                    <span className="w-[6px] h-[6px] rounded-full bg-amber-400 animate-pulse"></span>
                    Our Edge
                  </span>
                  <Title text1={"WHY"} text2={"CHOOSE US"} />
                </div>
                <div className="flex items-center gap-3 md:pb-3">
                  <div className="h-[1px] w-12 bg-zinc-700"></div>
                  <span className="text-zinc-500 text-[12px] tracking-widest uppercase">3 Reasons</span>
                  <div className="h-[1px] w-12 bg-zinc-700"></div>
                </div>
              </div>
              <div className="mt-8 h-[1px] bg-gradient-to-r from-amber-500/40 via-zinc-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {whyCards.map((c, i) => (
                <div key={i}
                  className={`group relative bg-zinc-900 border border-zinc-800 rounded-2xl 
                              p-8 flex flex-col items-center text-center gap-5 overflow-hidden
                              hover:-translate-y-1 transition-all duration-300 ${c.border} ${c.glow}`}>

                  <div className={`w-[64px] h-[64px] rounded-2xl border flex items-center justify-center 
                                   group-hover:scale-110 transition-transform duration-300 ${c.iconBg}`}>
                    <svg className={`w-[30px] h-[30px] ${c.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {c.svg}
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-white text-[18px] md:text-[20px] font-black tracking-tight">{c.title}</h3>
                  </div>

                  <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                    {c.desc}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${c.line} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex items-center justify-between">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
              <span className="mx-5 text-zinc-600 text-[11px] tracking-[4px] uppercase font-medium">Style Baazar</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
        </section>

        <Offer />
      </div>
      <Footer />
    </>
  )
}

export default About