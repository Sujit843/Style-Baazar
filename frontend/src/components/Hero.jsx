import { useNavigate } from "react-router-dom";

function Hero({heroData, heroCount, setHeroCount}) {
  const navigate = useNavigate()

  return (
    <div className="w-full md:w-[45%] lg:w-[40%] h-full absolute top-0 left-0 z-20">

      <div className="hidden sm:flex flex-col absolute left-[8%] md:left-[10%] 
                      top-[120px] sm:top-[40px] md:top-[140px] lg:top-[150px] 
                      max-w-[85%] md:max-w-[90%] z-20 gap-0">

        <div className="flex items-center gap-3 mb-5 animate-[fadeIn_0.8s_ease-out_forwards]">
          <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                           text-rose-500 text-[11px] font-semibold tracking-[3px] uppercase 
                           px-4 py-2 rounded-full">
            <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
            New Collection
          </span>
        </div>

        <div className="space-y-2 mb-7">
          <h1 className="text-white text-[28px] sm:text-[30px] md:text-[42px] lg:text-[52px] 
                         font-black leading-none tracking-tight drop-shadow-2xl
                         animate-[slideUp_0.8s_ease-out_forwards]">
            {heroData.text1}
          </h1>
          <h2 className="text-[28px] sm:text-[30px] md:text-[42px] lg:text-[52px] 
                         font-black leading-none tracking-tight drop-shadow-2xl
                         text-white"
              style={{WebkitTextStroke: '1.5px #e11d48'}}>
            {heroData.text2}
          </h2>
        </div>

        <div className="flex items-center gap-4 mb-7">
          <div className="h-[1px] w-12 bg-gradient-to-r from-rose-500/60 to-transparent"></div>
          <span className="text-zinc-500 text-[11px] tracking-[3px] uppercase">Style Baazar</span>
        </div>

        <button
          className="border bg-rose-600 p-2 text-white rounded-xl w-[200px] cursor-pointer
          hover:bg-rose-700"
          onClick={() => navigate("/collection")}
        >
          <span>Shop Now</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[16px]">→</span>
        </button>

        <div className="flex items-center gap-3 mt-10 animate-[fadeIn_1s_ease-out_0.6s_forwards] opacity-0">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setHeroCount(index)}
              className={`transition-all duration-300 cursor-pointer hover:scale-125 rounded-full
                ${heroCount === index
                  ? 'w-[28px] h-[8px] bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.6)]'
                  : 'w-[8px] h-[8px] bg-zinc-600 hover:bg-zinc-400'
                }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Hero