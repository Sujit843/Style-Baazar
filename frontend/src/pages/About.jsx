import React from 'react'
import Title from "../components/Title"
import about from "../assets/about2.png"
import Offer from "../components/Offer"
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <div className='lg:w-[97vw] w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-[50px] pt-[70px] pb-[50px] bg-gradient-to-br from-slate-50 via-white to-slate-100'>
      
      <div className='animate-fade-in'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='w-[100%] flex flex-col items-center justify-center lg:flex-row gap-[40px] px-[20px]'>

        <div className='lg:w-[70%] w-[100%] flex items-center justify-center'>
          <div className='relative overflow-hidden rounded-2xl
          transition-all  '>
            <div className='absolute  transition-opacity duration-500'></div>
            <img
              src={about}
              alt='About Style Baazar'
              className='lg:w-[90%] w-[100%] lg:h-[60vh] object-cover rounded-2xl'
            />
          </div>
        </div>

        <div className='lg:w-[50%] w-[90%] flex items-start justify-center gap-[24px] flex-col'>

          <div className='space-y-5'>
            <p className='lg:max-w-[520px] w-[100%] md:text-[17px] text-[14px] text-gray-700 leading-relaxed font-light'>
              Style Baazar is a modern fashion e-commerce platform designed to provide a{" "}
              <span className='font-semibold text-gray-900'>smooth and enjoyable</span> online shopping experience.
            </p>

            <p className='lg:max-w-[520px] w-[100%] md:text-[17px] text-[14px] text-gray-700 leading-relaxed font-light'>
              Users can explore trendy collections, filter products by category, securely register and log in, and{" "}
              <span className='font-semibold text-gray-900'> place orders easily</span>.
            </p>

            <p className='lg:max-w-[520px] w-[100%] md:text-[17px] text-[14px] text-gray-700 leading-relaxed font-light'>
              Style Baazar focuses on{" "}
              <span className='font-semibold text-gray-900'>simplicity, performance, and user-friendly design</span>.
            </p>
          </div>

          {/* Mission Section */}
          <div className='mt-[20px] border-l-4 border-purple-500 pl-[20px] py-[16px] 
          bg-gradient-to-r from-purple-50 to-white rounded-xl shadow-sm'>
            <p className='md:text-[18px] text-[15px] font-bold text-gray-900 mb-[10px] tracking-wide'>
              OUR MISSION
            </p>
            <p className='lg:max-w-[520px] w-[100%] md:text-[17px] text-[14px] text-gray-700 leading-relaxed font-light'>
              At Style Baazar, our mission is to make fashion accessible, affordable, and enjoyable for everyone.
              We strive to deliver trendy, high-quality products with a seamless shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='w-[100%] flex items-center justify-center flex-col gap-[30px] mt-[40px]'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />

        <div className='lg:w-[85%] w-[95%] flex flex-col items-stretch justify-center lg:flex-row gap-[25px] py-[40px]'>

          {/* Card 1 */}
          <div className='lg:w-[33%] w-[100%] min-h-[280px] bg-white border border-gray-200 flex items-center 
          gap-[20px] flex-col px-[35px] py-[40px] rounded-xl shadow-lg 
          transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500'></div>

            <div className='w-[64px] h-[64px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg relative z-10'>
              <svg className='w-[32px] h-[32px] text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <b className='text-[22px] font-bold text-gray-900 relative z-10'>Quality Assurance</b>
            <p className='text-[15px] text-gray-600 text-center leading-relaxed relative z-10'>
              We ensure strict quality checks at every stage to provide durable, stylish, and reliable products.
            </p>
          </div>

          {/* Card 2 */}
          <div className='lg:w-[33%] w-[100%] min-h-[280px] bg-white border border-gray-200 flex items-center 
          gap-[20px] flex-col px-[35px] py-[40px] rounded-xl shadow-lg 
          transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500'></div>

            <div className='w-[64px] h-[64px] bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg relative z-10'>
              <svg className='w-[32px] h-[32px] text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <b className='text-[22px] font-bold text-gray-900 relative z-10'>Convenience</b>
            <p className='text-[15px] text-gray-600 text-center leading-relaxed relative z-10'>
              Shop anytime, anywhere with a smooth and hassle-free experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className='lg:w-[33%] w-[100%] min-h-[280px] bg-white border border-gray-200 flex items-center 
          gap-[20px] flex-col px-[35px] py-[40px] rounded-xl shadow-lg 
          transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500'></div>

            <div className='w-[64px] h-[64px] bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg relative z-10'>
              <svg className='w-[32px] h-[32px] text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-1.414-.586z" />
              </svg>
            </div>

            <b className='text-[22px] font-bold text-gray-900 relative z-10'>Customer Service</b>
            <p className='text-[15px] text-gray-600 text-center leading-relaxed relative z-10'>
              Our support team is always ready to help you with any queries.
            </p>
          </div>

        </div>
      </div>

      <Offer />
    </div>
      <Footer/>
    </>
  )
}

export default About
