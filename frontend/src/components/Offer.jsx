import React from 'react'

function Offer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="w-full relative bg-zinc-950 overflow-hidden py-8 px-5">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center gap-5 text-center">

        <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 
                         text-amber-400 text-[11px] font-semibold tracking-[3px] uppercase 
                         px-4 py-2 rounded-full">
          <span className="w-[6px] h-[6px] rounded-full bg-amber-400 animate-pulse"></span>
          Special Offer
        </span>

        <div>
          <h2 className="text-[36px] md:text-[56px] font-black leading-none tracking-tight">
            <span className="text-white block">Subscribe &</span>
            <span className="text-transparent block" style={{WebkitTextStroke: '1.5px #e11d48'}}>
              Get 20% OFF
            </span>
          </h2>
        </div>

        <p className="text-[13px] md:text-[15px] text-zinc-500 leading-relaxed max-w-[500px]">
          One click to subscribe, instant savings on your first order.{" "}
          <span className="text-amber-400 font-semibold">Exclusive deals, no spam, ever.</span>
        </p>

        <div className="flex items-center gap-4 w-full max-w-[300px]">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
          <span className="text-zinc-600 text-[10px] tracking-[3px] uppercase">Join Now</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center gap-3 mt-1">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:flex-1 h-[50px] px-5 rounded-full bg-zinc-900 border border-zinc-800 
                       text-white text-[13px] placeholder:text-zinc-600 
                       outline-none focus:border-rose-500/60 transition-all duration-300
                       tracking-wide"
          />
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto h-[50px] px-7 bg-rose-600 hover:bg-rose-500 text-white text-[12px] 
                       font-black tracking-widest uppercase rounded-full 
                       hover:shadow-[0_0_25px_rgba(225,29,72,0.35)]
                       transition-all duration-300 hover:scale-105 
                       flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <span>Subscribe</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
          {["No spam, ever", "Unsubscribe anytime", "Exclusive deals"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[12px] text-zinc-600">
              <span className="w-[16px] h-[16px] rounded-full bg-rose-600/15 border border-rose-500/30 
                               flex items-center justify-center text-rose-400 text-[9px] font-black">✓</span>
              <span className="hover:text-zinc-400 transition-colors duration-200">{item}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
    </section>
  )
}

export default Offer