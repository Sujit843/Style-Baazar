import { FaCircle } from "react-icons/fa";

function Hero({heroData, heroCount, setHeroCount}) {
  return (
    <div className='w-full md:w-[45%] lg:w-[40%] h-full absolute top-0 left-0 z-20'>
      
      {/* Gradient Overlay for better text visibility */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10'></div>

      {/* Content Container */}
      <div className='absolute left-[8%] md:left-[10%] top-[120px] sm:top-[40px] md:top-[140px] 
      lg:top-[150px] max-w-[85%] md:max-w-[90%] z-20'>
        
        {/* Decorative Element */}
        <div className='flex items-center gap-[12px] mb-[15px] md:mb-[20px] animate-fade-in'>
          <div className='w-[35px] md:w-[50px] h-[3px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full'></div>
          <span className='text-orange-400 text-[11px] md:text-[13px] font-bold tracking-wider'>NEW COLLECTION</span>
        </div>

        {/* Hero Text */}
        <div className='space-y-[8px] md:space-y-[12px] '>
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] 
          font-bold leading-tight drop-shadow-2xl animate-slide-up ">
            {heroData.text1}
          </h1>
          <h2 className="text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] font-bold leading-tight drop-shadow-2xl animate-slide-up-delayed bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            {heroData.text2}
          </h2>
        </div>

        {/* CTA Button */}
        <button className='mt-[20px] md:mt-[30px] px-[25px] md:px-[35px] py-[16px] md:py-[14px] bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-[13px] md:text-[15px] rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-[10px] group animate-fade-in-slow'>
          <span>Shop Now</span>
          <span className='transform group-hover:translate-x-1 transition-transform duration-300'>→</span>
        </button>

        {/* Navigation Dots */}
        <div className='absolute top-[280px] sm:top-[320px] md:top-[360px] lg:top-[390px] left-0 flex items-center gap-[12px] md:gap-[15px]'>
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setHeroCount(index)}
              className={`transition-all duration-300 cursor-pointer hover:scale-125 ${
                heroCount === index 
                  ? 'w-[35px] md:w-[45px] h-[10px] md:h-[12px] rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg' 
                  : 'w-[10px] md:w-[12px] h-[10px] md:h-[12px] rounded-full bg-white/70 hover:bg-white'
              }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up-delayed {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-up-delayed {
          animation: slide-up-delayed 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Hero