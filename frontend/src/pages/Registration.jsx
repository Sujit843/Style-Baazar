import { useNavigate } from "react-router-dom";
import Logo from "./../assets/vcart logo.png";
import google from "../assets/google.webp";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { userDataContext } from "../context/UserContext";
import Title from "../components/Title";

function Registration() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const {serverUrl} = useContext(authDataContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {getCurrentUser} = useContext(userDataContext)

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl +  "/api/auth/registration" ,{
        name, email, password
      } ,{withCredentials:true})
      console.log(name, email, password)
      console.log(result.data);
      getCurrentUser()
      alert('Registration successfully')
      navigate("/")
      
    } catch (error) {
      console.log(error);
      alert("email already exist")
    }
  }
  
  return (
    <div className='w-[98vw] min-h-[100vh] flex flex-col justify-start items-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 relative overflow-hidden pb-[40px]'>
      
      {/* Animated Background Shapes */}
      <div className='absolute top-[5%] right-[8%] w-[250px] h-[250px] bg-blue-300/30 rounded-full blur-3xl animate-float'></div>
      <div className='absolute bottom-[15%] left-[5%] w-[350px] h-[350px] bg-purple-300/30 rounded-full blur-3xl animate-float-delayed'></div>
      <div className='absolute top-[50%] left-[15%] w-[180px] h-[180px] bg-pink-300/20 rounded-full blur-2xl animate-float'></div>

      {/* Header with Logo */}
      <div className='w-[100%] h-[80px] flex justify-start items-center px-[20px] md:px-[30px] gap-[10px] cursor-pointer relative z-10 bg-white/80 backdrop-blur-md shadow-sm' 
        onClick={() => navigate("/")}> 
        <div className='relative group'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
          <img className="w-[35px] md:w-[40px] relative z-10 group-hover:scale-110 transition-transform duration-300" src={Logo} alt="" />
        </div>
        <h1 className="text-[20px] md:text-[22px] font-sans bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">𝓢𝓽𝔂𝓵𝓮 𝓑𝓪𝓪𝔃𝓪𝓻</h1>
      </div>

      {/* Title Section */}
      <div className="w-[100%] flex items-center justify-center flex-col gap-[10px] mt-[40px] relative z-10 px-[20px]">
        <Title text1={"Registration"} text2={"Page"}/>
        <p className="text-[14px] md:text-[16px] text-gray-600 text-center">Welcome to Style Baazar, Create Your Account</p>
      </div>

      {/* Registration Card */}
      <div className="max-w-[600px] w-[90%] md:w-[80%] bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl flex items-center justify-center mt-[30px] relative z-10 overflow-hidden">
        
        {/* Top Gradient Border */}
        <div className='absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></div>

        <div className="w-[90%] py-[40px] flex flex-col items-center justify-start gap-[25px]">
          
          {/* Google Registration Button */}
          <button 
            type="button"
            className="w-[100%] h-[55px] bg-white border-2 border-gray-300 hover:border-blue-400 rounded-xl flex items-center justify-center gap-[12px] py-[20px] cursor-pointer transition-all duration-300 hover:shadow-lg group font-medium text-gray-700"
          >
            <img src={google} alt="" className="w-[24px] group-hover:scale-110 transition-transform duration-300" /> 
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="w-[100%] flex items-center justify-center gap-[15px]">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="text-gray-500 font-medium">OR</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Registration Form */}
          <div className="w-[100%] flex flex-col items-center justify-center gap-[20px] relative">

            {/* Username Input */}
            <div className="w-[100%] relative group">
              <input 
                type="text" 
                className="w-[100%] h-[55px] border-2 border-gray-300 focus:border-blue-400 rounded-xl bg-white px-[20px] font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder:text-gray-400"
                placeholder="Full Name" 
                required 
                onChange={(e) => setName(e.target.value)} 
                value={name}
              />
              <div className='absolute left-[15px] top-[50%] -translate-y-[50%] text-blue-500 opacity-0 group-focus-within:opacity-100 transition-opacity'>
                👤
              </div>
            </div>

            {/* Email Input */}
            <div className="w-[100%] relative group">
              <input 
                type="email" 
                className="w-[100%] h-[55px] border-2 border-gray-300 focus:border-purple-400 rounded-xl bg-white px-[20px] font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder:text-gray-400"
                placeholder="Email Address" 
                required 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
              />
              <div className='absolute left-[5px] top-[50%] -translate-y-[50%] text-purple-500 opacity-0 group-focus-within:opacity-100 transition-opacity'>
                ✉️
              </div>
            </div>

            {/* Password Input */}
            <div className="w-[100%] relative">
              <input 
                type={show ? "password" : "text"} 
                className="w-[100%] h-[55px] border-2 border-gray-300 focus:border-pink-400 rounded-xl bg-white px-[20px] pr-[50px] font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all duration-300 placeholder:text-gray-400"
                placeholder="Password (min. 6 characters)" 
                required 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
              />
              
              {/* Eye Icon */}
              <div className="absolute right-[15px] top-[50%] -translate-y-[50%]">
                {!show && (
                  <IoMdEye 
                    className="w-[24px] h-[24px] cursor-pointer text-gray-500 hover:text-pink-600 transition-colors duration-300" 
                    onClick={() => setShow(prev => !prev)}
                  />
                )}
                {show && (
                  <IoMdEyeOff 
                    className="w-[24px] h-[24px] cursor-pointer text-gray-500 hover:text-pink-600 transition-colors duration-300" 
                    onClick={() => setShow(prev => !prev)}
                  />
                )}
              </div>
            </div>

            {/* Create Account Button */}
            <button 
              onClick={handleSignup}
              className="w-[100%] h-[55px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-xl flex text-white items-center justify-center mt-[10px] text-[17px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[102%] group"
            >
              <span>Create Account</span>
              <span className='ml-[8px] transform group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </button>

            {/* Login Link */}
            <p className="flex gap-[8px] text-[15px] text-gray-600 flex-wrap justify-center">
              Already have an account?
              <span 
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all duration-300" 
                onClick={() => navigate("/login")}
              >
                Login Now
              </span>
            </p>

            {/* Terms & Conditions */}
            <p className="text-[12px] text-gray-500 text-center mt-[10px] px-[10px]">
              By creating an account, you agree to our{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span>
              {' '}and{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className='flex items-center justify-center mt-[40px] relative z-10'>
        <div className='w-[100px] h-[3px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full'></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Registration