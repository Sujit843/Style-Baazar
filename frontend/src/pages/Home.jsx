import React, { useEffect, useState } from 'react'
import Background from '../components/Background';
import Hero from '../components/Hero';
import Product from './Product';
import Policy from '../components/Policy';
import Offer from '../components/Offer';
import Footer from '../components/Footer';

const heroData = [
  { text1: "30% OFF",          text2: "Best for you" },
  { text1: "Discover the Best", text2: "Perfect Fashion"  },
  { text1: "Explore Our",       text2: "Best Collection"  },
  { text1: "Perfect Fashion",   text2: "Now On Sale"      },
]

function Home() {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prev => (prev === 3 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-x-hidden bg-zinc-950">

      <div className="w-full h-screen relative pt-[70px]">
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>

      <Product />
      <Policy />
      <Offer />
      <Footer />
    </div>
  )
}

export default Home