import React from 'react'
import Title from '../components/Title'
import contact from "../assets/contact.jpg"
import Offer from "../components/Offer"
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 flex flex-col pt-[50px]">

        <section className="relative overflow-hidden px-5 md:px-12 py-10 flex-1">

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
          </div>

          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

          <div className="absolute top-1/3 right-[10%] w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-[1400px] mx-auto">

            <div className="mb-14">
              <p className="absolute -top-4 left-0 text-[80px] md:text-[130px] font-black text-white/[0.03] 
                            leading-none select-none tracking-tighter uppercase pointer-events-none">CONTACT</p>
              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                                 text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                                 px-4 py-2 rounded-full mb-4">
                  <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                  Get In Touch
                </span>
                <Title text1={"CONTACT"} text2={"US"} />
              </div>
              <div className="mt-8 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">

              <div className="lg:w-[55%] w-full relative group">
                <div className="absolute inset-0 bg-rose-500/5 rounded-2xl blur-xl group-hover:bg-rose-500/10 transition-all duration-500"></div>
                <img
                  src={contact}
                  alt="Contact Style Baazar"
                  className="relative w-full lg:h-[60vh] object-cover rounded-2xl 
                             border border-zinc-800 group-hover:border-rose-500/30 transition-all duration-500"
                />
              </div>

              <div className="lg:w-[45%] w-full flex flex-col gap-6">

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 
                                hover:border-rose-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-500 to-amber-500 rounded-l-2xl"></div>

                  <p className="text-[11px] font-black tracking-[4px] uppercase text-rose-400 mb-4">
                    Our Store
                  </p>

                  <div className="flex flex-col gap-3">
                    <p className="text-zinc-400 text-[14px] leading-relaxed flex items-start gap-3">
                      <span className="text-[16px] mt-0.5">📍</span>
                      1265 Random Station City, State, India
                    </p>
                    <p className="text-zinc-400 text-[14px] flex items-center gap-3">
                      <span className="text-[16px]">📞</span>
                      <span><span className="text-white font-semibold">Tel:</span> +91-986755533</span>
                    </p>
                    <p className="text-zinc-400 text-[14px] flex items-center gap-3">
                      <span className="text-[16px]">✉️</span>
                      <span><span className="text-white font-semibold">Email:</span> admin@stylebaazar.com</span>
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
                                  from-transparent via-rose-500/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 
                                hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 to-rose-500 rounded-l-2xl"></div>

                  <p className="text-[11px] font-black tracking-[4px] uppercase text-amber-400 mb-3">
                    Careers at Style Baazar
                  </p>

                  <p className="text-zinc-400 text-[14px] leading-relaxed">
                    Learn more about our teams, culture, and{" "}
                    <span className="text-white font-semibold">exciting job opportunities</span>.
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-[12px] font-black tracking-widest 
                                     uppercase text-amber-400 hover:text-white transition-colors duration-300 group/btn">
                    <span>Explore Careers</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
                                  from-transparent via-amber-500/30 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-rose-500/60 to-transparent"></div>
                  <span className="text-zinc-600 text-[11px] tracking-[3px] uppercase">Style Baazar</span>
                </div>
              </div>
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

export default Contact