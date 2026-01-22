import React, { useContext, useEffect, useState } from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { authDataContext } from '../context/AuthContext';
import axios from "axios"
import { MdColorLens, MdDeleteOutline } from "react-icons/md";


function List() {
  const [list, setList] = useState([]);
  const {serverUrl} = useContext(authDataContext);

  const removeList = async (id) => {
    try {
      // const result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {} , {withCredentials:true})
      const result = await axios.post(serverUrl + `/api/product/remove/${id}`,{},
        {withCredentials:true})
        console.log(result.data)
      if(result.data){
        fetchList();
      }else{
        console.log("Failed To remove product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchList = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/list" , {withCredentials:true})
      console.log(result.data)
      setList(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-[98vw] min-h-[100vh]  '>
      <Nav/>
      <div className='w-[100%] h-[100%] flex items-center justify-start'>
        <Sidebar />

        <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px]  '>
          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] font-sans text-semibold
          '>All Listed Product</div>

          {
            list?.length > 0 ? (
              list.map((item, index) => (
                <div className='w-[90%] md:h-[120px] h-[90px] bg-slate-300 rounded-xl flex items-center
                justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]' key={index} >
                  <img src={item.image1} alt='' className='w-[30%] md:w-[120px] h-[90%] rounded-lg '/>

                  <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]'>
                    <div className='w-[100%] md:text-[20px] text-[15px]'>{item.name}</div>
                    <div className='md:text-[17px] text-[15px]'>{item.category}</div>
                    <div className='md:text-[17px] text-[15px]'>₹{item.price}</div>
                  </div>

                  <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center  '>
                    <MdDeleteOutline 
                    className='w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-600
                    cursor-pointer hover:text-white' onClick={() => removeList(item._id)}/>

                  </div>
                </div>
              ))
            )
            :
            (
              <div className='text-lg font-semibold'>No Product Available</div>
            )
          }
        </div>

      </div>

    </div>
  )
}

export default List 