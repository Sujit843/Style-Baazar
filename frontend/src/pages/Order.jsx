import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { authDataContext } from '../context/authContext'
import axios from "axios"
function Order() {
    const {serverUrl} = useContext(authDataContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () =>{
        try {
            const result = await axios.post(serverUrl + "/api/order/userOrder" ,
                {} , {withCredentials:true}
            )
            if(result.data){
                let allOrderItem = [];
                result.data.map((order) =>{
                    order.items.map((item) =>{
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrderItem.push(item)
                    })
                })
                setOrderData(allOrderItem.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        loadOrderData()
    }, [])
  return (
    <div className="w-full min-h-screen bg-gray-400 px-4 pb-32">
      {/* Title */}
      <div className="pt-24 pb-8 text-center">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>

      {/* Orders List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 ">
        {orderData.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No orders found
          </p>
        )}

        {orderData.map((item, index) => (
          <div
            key={index}
            className=" relative w-full bg-slate-200 rounded-2xl shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-6"
          >
            {/* Product Image */}
            <img
              src={item.image1}
              alt={item.name}
              className="w-full md:w-[140px] h-[180px] md:h-[160px] object-cover rounded-xl"
            />

            {/* Product Details */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-xl font-semibold text-gray-800">
                {item.name}
              </p>

              <div className="flex items-center gap-4 text-lg text-gray-700">
                <p className="font-medium">₹{item.price}</p>

                <span className="w-8 h-8 flex items-center justify-center border rounded-md text-sm">
                  {item.size}
                </span>

                <span className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </span>
              </div>

              {/* Status */}
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  {item.status}
                </span>

                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                  {item.paymentMethod}
                </span>
              </div>
             
              
            </div>
            <div className='absolute md:right-[20%] right-[2%] md:top-[40%] top-[65%]'>
                <button className='px-[5px] md:px-[15px] md:py-[7px] py-[3px] rounded-md text-[12px] md:text-[16px] 
                cursor-pointer border hover:bg-green-100 ' onClick={loadOrderData}>Track Order</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order