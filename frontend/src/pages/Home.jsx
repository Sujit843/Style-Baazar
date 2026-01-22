import React, { useEffect, useState } from 'react'
import Background from '../components/Background';
import Hero from '../components/Hero';
import Product from './Product';
import Policy from '../components/Policy';
import Offer from '../components/Offer';
import Footer from '../components/Footer';

function Home() {
  const heroData = [
    {text1: "𝟛𝟘% 𝕆𝔽𝔽 𝕃𝕚𝕞𝕚𝕥𝕖𝕕 𝕆𝕗𝕗𝕖𝕣 " , text2: "Ⓢⓣⓨⓛⓔ ⓣⓗⓐⓣ"},
    {text1: "𝘋𝘪𝘴𝘤𝘰𝘷𝘦𝘳 𝘵𝘩𝘦 𝘉𝘦𝘴𝘵 𝘖𝘧 𝘉𝘰𝘭𝘥 𝘍𝘢𝘴𝘩𝘪𝘰𝘯", text2: "𝓛𝓲𝓶𝓲𝓽𝓮𝓭 𝓣𝓲𝓶𝓮 𝓞𝓷𝓵𝔂"},
    {text1: "ₑₓₚₗₒᵣₑ ₒᵤᵣ Bₑₛₜ Cₒₗₗₑcₜᵢₒₙ ",  text2: "Ⓢⓗⓞⓟ Ⓝⓞⓦ"},
    {text1: " 𝙲𝚑𝚘𝚘𝚜𝚎 𝚈𝚘𝚞𝚛 𝙿𝚎𝚛𝚏𝚎𝚌𝚝 𝙵𝚊𝚜𝚑𝚒𝚘𝚗 𝙵𝚒𝚝", text2: "Ⓝⓞⓦ ⓞⓝ Ⓢⓐⓛⓔ"}
  ]

  const [heroCount, setHercount] = useState(0);
  
  useEffect(() =>{
    let interval = setInterval(() =>{
      setHercount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
    }, 3000)
    return () =>clearInterval(interval)
  }, [])
  return (
    <div className='overflow-x-hidden  top-[70px] mt-[2rem]'> 
    <div className='w-full lg:h-[100vh] md:h-[50vh] sm:h-[30vh]  '>
      {/* <div><p className='text-[17px] py-[5px] px-[4px] items-center text-center'>"Discover unbeatable deals, trending products, and fast delivery—shop smart,
        live better, and enjoy every moment with effortless online shopping."</p></div> */}
    <Background heroCount={heroCount}/>
    <Hero heroCount={heroCount} setHeroCount={setHercount} heroData={heroData[heroCount]}/>
    </div>
    <Product/>
    <Policy />
    <Offer/>
    <Footer/>
    </div>
  )
}

export default Home