import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { authDataContext } from '../context/authContext'
import axios from "axios"
import BottomFooter from '../components/BottomFooter';

function Order() {
  const { serverUrl } = useContext(authDataContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(serverUrl + "/api/order/userOrder", {}, { withCredentials: true })
      if (result.data) {
        let allOrderItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
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

  useEffect(() => { loadOrderData() }, [])

  const statusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
      case 'shipped':   return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
      case 'cancelled': return 'bg-rose-500/10 border-rose-500/30 text-rose-400'
      default:          return 'bg-zinc-800 border-zinc-700 text-zinc-400'
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 px-5 md:px-12 pb-32 relative overflow-hidden">

        <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="relative max-w-[900px] mx-auto">

          <div className="pt-24 pb-10">
            <p className="absolute top-16 left-0 text-[80px] md:text-[120px] font-black text-white/[0.03] 
                          leading-none select-none tracking-tighter uppercase pointer-events-none">ORDERS</p>
            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                               text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                {orderData.length > 0 ? `${orderData.length} Order${orderData.length > 1 ? 's' : ''}` : 'Orders'}
              </span>
              <Title text1={"MY"} text2={"ORDERS"} />
            </div>
            <div className="mt-6 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
          </div>

          {orderData.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[40vh] gap-5 text-center">
              <div className="w-[80px] h-[80px] rounded-2xl bg-zinc-900 border border-zinc-800 
                              flex items-center justify-center text-[36px]">
                📦
              </div>
              <div>
                <p className="text-[22px] font-black text-white">No Orders Yet</p>
                <p className="text-zinc-500 text-[14px] mt-1">Your order history will appear here</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {orderData.map((item, index) => (
              <div key={index}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden
                           hover:border-rose-500/30 transition-all duration-300
                           hover:shadow-[0_10px_40px_rgba(225,29,72,0.08)]">

                <div className="flex flex-col md:flex-row gap-5 p-5">

                  <div className="w-full md:w-[130px] h-[180px] md:h-[140px] rounded-xl overflow-hidden 
                                  flex-shrink-0 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                    <img
                      src={item.image1}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-3">
                    <p className="text-white text-[15px] md:text-[16px] font-semibold leading-snug">
                      {item.name}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-amber-400 text-[16px] font-black">₹{item.price}</span>

                      <span className="w-[30px] h-[30px] flex items-center justify-center 
                                       bg-zinc-800 border border-zinc-700 rounded-lg 
                                       text-zinc-300 text-[12px] font-bold">
                        {item.size}
                      </span>

                      <span className="text-zinc-500 text-[12px] tracking-wider">
                        Qty: <span className="text-zinc-300 font-semibold">{item.quantity}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 text-[11px] font-black tracking-widest uppercase 
                                       rounded-full border ${statusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="px-3 py-1 text-[11px] font-black tracking-widest uppercase 
                                       rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
                        {item.paymentMethod}
                      </span>
                    </div>

                    {item.date && (
                      <p className="text-zinc-600 text-[11px] tracking-wider">
                        Ordered: <span className="text-zinc-500">{new Date(item.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex md:flex-col items-end justify-end md:justify-center flex-shrink-0">
                    <button
                      onClick={loadOrderData}
                      className="flex items-center gap-2 px-5 py-2 rounded-full
                                 bg-zinc-800 border border-zinc-700 text-zinc-400
                                 text-[11px] font-black tracking-widest uppercase
                                 hover:bg-rose-600/10 hover:border-rose-500/40 hover:text-rose-400
                                 transition-all duration-300 cursor-pointer group/btn"
                    >
                      <span>Track</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
            ))}
          </div>

          {orderData.length > 0 && (
            <div className="mt-14 flex items-center justify-between">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
              <span className="mx-5 text-zinc-600 text-[11px] tracking-[4px] uppercase font-medium">Style Baazar</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
            </div>
          )}
        </div>
      </div>

      <BottomFooter />
    </>
  )
}

export default Order