import React, { useContext } from 'react'
import ai from "../assets/ai4.png"
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function Ai() {
    const {showSearch , setShowSearch} = useContext(shopDataContext);
    const navigate = useNavigate();

    function speak(message) {
        const utterence = new SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterence);
    }
    const speechRecognition = window.speechRecognition|| window.webkitSpeechRecognition
    const recoginiton = new speechRecognition();
    if(!recoginiton){
        console.log("Not supported");
    }

    recoginiton.onresult = (e) =>{
        const transcript = e.results[0][0]?.transcript.trim();
        if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().
        includes("open") && !showSearch){
        speak("opening search");
        setShowSearch(true);
        navigate("/collection")

    }else if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().
        includes("close") && showSearch){
            speak("closing search");
            setShowSearch(false);
        }

    else if(transcript.toLowerCase().includes("collection") || transcript.toLowerCase().
        includes("collections") || transcript.toLowerCase().includes("products") || 
    transcript.toLowerCase().includes("products")){
        speak("opening collection page");
        navigate("/collection")
    }
    else if(transcript.toLowerCase().includes("about") ||  transcript.toLowerCase().
        includes("aboutpage")){
            speak("opening about page");
            navigate("/about");
            setShowSearch(false);
        }

        else if(transcript.toLowerCase().includes("home") ||  transcript.toLowerCase().
        includes("homepage")){
            speak("opening home page");
            navigate("/home");
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("cart") ||  transcript.toLowerCase().
        includes("cartpage")){
            speak("opening cart page");
            navigate("/cart");
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("contact")){
            speak("opening contact page");
            navigate("/contact");
            setShowSearch(false);
        }
        else if(transcript.toLowerCase().includes("order") ||  transcript.toLowerCase().
        includes("myorders") || transcript.includes("orders") || transcript.toLowerCase().
        includes("my order")){
            speak("opening your order page");
            navigate("/order");
            setShowSearch(false);
        }
        else{
            toast.error("try again")
        }
    }

  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] right-[2%] z-50 group'>

      <div className='absolute bottom-[95px] right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none'>
        <div className='bg-stone-900 text-white text-xs tracking-[0.2em] uppercase font-sans px-3 py-2 whitespace-nowrap border-l-2 border-amber-400'>
          Voice Assistant
        </div>
        <div className='w-2 h-2 bg-stone-900 rotate-45 ml-auto mr-4 -mt-1' />
      </div>

      <div
        onClick={() => recoginiton.start()}
        className='relative cursor-pointer'
      >
        <div className='absolute inset-0 rounded-full border border-amber-400/40 animate-ping' />
        <div className='absolute inset-[-4px] rounded-full border border-stone-300/30' />

        <div className='relative w-[70px] h-[70px] rounded-full bg-stone-900 border-2 border-stone-700 hover:border-amber-400 transition-all duration-300 flex items-center justify-center shadow-2xl hover:scale-110 overflow-hidden group-hover:shadow-amber-900/30'>

          <div className='absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 rounded-full transition-all duration-300' />

          <img
            src={ai}
            alt='AI Assistant'
            className='w-[46px] h-[46px] object-contain relative z-10 drop-shadow-lg'
          />

          <div className='absolute bottom-[6px] right-[6px] w-[8px] h-[8px] border border-amber-400 rotate-45 bg-stone-900' />
        </div>
      </div>

     
    </div>
  )
}

export default Ai