import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Confirmation({onConfirm, onCancel}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-8 text-center overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="w-[80px] h-[80px] rounded-2xl bg-rose-600/10 border border-rose-500/20 
                        flex items-center justify-center mx-auto mb-6">
          <FaCheckCircle className="text-rose-400 text-[36px]" />
        </div>

        <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                         text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                         px-4 py-2 rounded-full mb-4">
          <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
          Confirm Order
        </span>

        <h2 className="text-[28px] md:text-[34px] font-black leading-none tracking-tight mt-3 mb-4">
          <span className="text-white">Are You </span>
          <span className="text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>Sure?</span>
        </h2>

        <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed mb-8 max-w-[320px] mx-auto">
          Once you place the order, it cannot be cancelled easily.
          <span className="text-zinc-400 font-medium"> Please confirm to continue.</span>
        </p>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/placeOrder")}
            className="flex-1 flex items-center justify-center gap-2
                       bg-rose-600 hover:bg-rose-500 text-white
                       py-3 rounded-full font-black text-[12px] tracking-widest uppercase
                       hover:shadow-[0_0_25px_rgba(225,29,72,0.35)]
                       transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
          >
            <FaCheckCircle className="text-[14px]" />
            <span>Yes, Place Order</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2
                       bg-zinc-800 border border-zinc-700 text-zinc-400
                       py-3 rounded-full font-black text-[12px] tracking-widest uppercase
                       hover:bg-rose-600/10 hover:border-rose-500/40 hover:text-rose-400
                       transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <FaTimesCircle className="text-[14px]" />
            <span>Cancel</span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
      </div>
    </div>
  );
}

export default Confirmation;