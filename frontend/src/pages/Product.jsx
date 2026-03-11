import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from "../components/BestSeller";

function Product() {
  return (
    <div className="w-full bg-zinc-950">
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default Product