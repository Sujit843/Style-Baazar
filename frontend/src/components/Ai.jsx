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
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] right-[2%]'>
        <img src={ai} alt='' className='w-[80px] h-[80px] animate-[bounceSlow_5s_ease-in-out_infinite] bg-rose-500
        rounded-[50%] cursor-pointer hover:scale-120 duration-300' onClick={() =>recoginiton.start()} />
    </div>
  )
}

export default Ai