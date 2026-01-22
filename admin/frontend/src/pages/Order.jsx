import React from 'react'
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { authDataContext } from '../context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import axios from "axios";
import { SiEbox } from 'react-icons/si';

function Order() {
  const [order, setOrder] = useState([]);
  const {serverUrl} = useContext(authDataContext);
  
  const fetchAllOrder = async () => {
    try {
      const result = await axios.post(serverUrl + "/api/order/list" , {} ,
        {withCredentials:true}
      )
      setOrder(result.data.reverse())
    } catch (error) {
      console.log(error);
    }
  } 

  const statusHandler = async (e, orderId) =>{
    try {
      const result = await axios.post(serverUrl + "/api/order/status" , {orderId , status:e.target.value},
        {withCredentials:true}
      )
      if(result.data) {
        await fetchAllOrder()
      }
    } catch (error) {
      console.log(error)  
    }
  }

  useEffect(() => {
    fetchAllOrder()
  }, []);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

return (
  <div className="w-full min-h-screen bg-gray-100">
    <Nav />

    <div className="flex">
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1
          mt-[70px]
          px-3 sm:px-4 md:px-6
          py-6
          overflow-x-hidden
          lg:ml-[300px]
          md:ml-[240px]
          sm:ml-[10rem]
          
        "
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          📦 All Orders
        </h1>

        {order.length === 0 && (
          <p className="text-gray-500 text-center">No orders found</p>
        )}

        {order.map((order, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              shadow
              p-4 sm:p-5
              mb-6
              flex
              flex-col
              gap-4
            "
          >
            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 ">
              
              {/* LEFT */}
              <div className="flex items-start gap-3">
                <SiEbox className="w-12 h-12 sm:w-14 sm:h-14 text-gray-600 shrink-0" />

                <div className="text-sm">
                  {order.items.map((item, i) => (
                    <p key={i} className="font-medium leading-snug">
                      {item.name.toUpperCase()} × {item.quantity}
                      <span className="ml-2 text-gray-500">
                        ({item.size})
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-sm space-y-2 lg:text-right">
                <p>
                  <span className="font-semibold">Total:</span>{" "}
                  ₹{order.amount}
                </p>

                <p className="text-gray-500">
                  <span className="font-semibold text-gray-700">
                    Order Date:
                  </span>{" "}
                  {formatDate(order.createdAt)}
                </p>

                <p className="flex lg:justify-end items-center gap-2">
                  <span className="font-semibold">Payment:</span>
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      order.payment ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {order.payment ? "DONE" : "PENDING"}
                  </span>
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold mb-1">Delivery Address</p>
              <p className="break-words">
                {order.address.firstName} {order.address.lastName},{" "}
                {order.address.street},{" "}
                {order.address.city}, {order.address.state} -{" "}
                {order.address.pincode}
              </p>
              <p className="mt-1">📞 {order.address.phone}</p>
            </div>

            {/* STATUS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="font-semibold">Order Status:</p>

              <select
                value={order.status}
                onChange={(e) =>
                  statusHandler(e, order._id, e.target.value)
                }
                className="
                  border
                  px-3
                  py-2
                  rounded-md
                  w-full
                  sm:w-[200px]
                  outline-none
                "
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">
                  Out for Delivery
                </option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default Order