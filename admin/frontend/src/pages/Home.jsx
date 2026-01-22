import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';

function Home() {
  const [totalProducts, setTotalProduct] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);

  const {serverUrl} = useContext(authDataContext);

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {} , {withCrendentials:true})
      setTotalProduct(products.data.length);

      const orders = await axios.get(`${serverUrl}/api/order/list`, {} , {withCrendentials:true})
      setTotalOrder(orders.data.length)
    } catch (error) {
      console.log("Failed to fetch count")
    }
  }

  useEffect(() => {
    fetchCounts()
  }, []);

  return (
    <div className='w-[100vw] h-[100vh] relative '>
      <Nav /> 
      <Sidebar />

    <div className='w-[70vw] h-[100vh] absolute left-[25%] flex items-start justify-start flex-col gap-[40px] py-[100px] '>
      <h1 className='text-[35px] font-semibold'>Style Baazar Panel </h1>
      <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row'>
        <div className='w-[400px] max-w-[90%] h-[200px] flex items-center justify-center flex-col gap-[20px] rounded-md shadow-sm
        md:text-[25px] text-[20px] border-[1px] '>Total No. of Products :
        <span>{totalProducts}</span>
        </div>

      <div className='w-[400px] max-w-[90%] h-[200px] flex items-center justify-center flex-col gap-[20px] rounded-md shadow-sm
        md:text-[25px] text-[20px] border-[1px] '>Total No. of Orders :
        <span>{totalOrder}</span>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Home