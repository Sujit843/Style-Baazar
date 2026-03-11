import { useNavigate } from "react-router-dom";
import Logo from "./../assets/vcart logo.png";
import google from "../assets/google.webp";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { userDataContext } from "../context/UserContext";

const inputClass = `w-full h-[50px] px-5 rounded-full bg-zinc-800 border border-zinc-700 
  text-white text-[13px] placeholder:text-zinc-600 tracking-wide
  outline-none focus:border-rose-500/60 transition-all duration-300`

function Registration() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const [name, setName]         = useState("")
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const { getCurrentUser } = useContext(userDataContext)

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + "/api/auth/registration", { name, email, password }, { withCredentials: true })
      getCurrentUser()
      alert('Registration successfully')
      navigate("/")
    } catch (error) {
      console.log(error);
      alert("Email already exists")
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-zinc-950 relative overflow-hidden pb-16">

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
      </div>

      <div className="absolute top-[10%] right-[8%] w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none"></div>

      <div
        className="w-full h-[70px] flex items-center px-6 md:px-10 gap-3 cursor-pointer 
                   relative z-10 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
        onClick={() => navigate("/")}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="w-[38px] h-[38px] rounded-xl bg-rose-600/10 border border-rose-500/20 
                        flex items-center justify-center hover:bg-rose-600/20 transition-all duration-300">
          <img src={Logo} className="w-[22px]" alt="logo" />
        </div>
        <h1 className="text-[20px] font-black text-white tracking-tight">
          Style <span className="text-transparent" style={{WebkitTextStroke: '1px #e11d48'}}>Baazar</span>
        </h1>
      </div>

      <div className="relative w-full flex flex-col items-center gap-3 mt-12 mb-6 px-5 z-10">
        <p className="absolute -top-4 text-[60px] md:text-[90px] font-black text-white/[0.03] 
                      leading-none select-none tracking-tighter uppercase pointer-events-none">
          REGISTER
        </p>
        <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                         text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                         px-4 py-2 rounded-full">
          <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
          Create Account
        </span>
        <h2 className="text-[32px] md:text-[42px] font-black leading-none tracking-tight text-center">
          <span className="text-white">Join </span>
          <span className="text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>Style Baazar</span>
        </h2>
        <p className="text-zinc-500 text-[13px]">Welcome — create your account below</p>
      </div>

      <div className="relative z-10 w-[92%] max-w-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="w-full px-6 md:px-8 py-8 flex flex-col gap-5">

          <button
            type="button"
            className="w-full h-[48px] bg-zinc-800 border border-zinc-700 hover:border-zinc-600
                       rounded-full flex items-center justify-center gap-3
                       text-zinc-400 hover:text-white text-[12px] font-black tracking-widest uppercase
                       transition-all duration-300 hover:bg-zinc-750 cursor-pointer group"
          >
            <img src={google} alt="" className="w-[18px] group-hover:scale-110 transition-transform duration-300" />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-zinc-800"></div>
            <span className="text-zinc-600 text-[11px] font-black tracking-[3px] uppercase">OR</span>
            <div className="flex-1 h-[1px] bg-zinc-800"></div>
          </div>

          <div className="flex flex-col gap-3">

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password (min. 6 characters)"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShow(prev => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors duration-300"
              >
                {show ? <IoMdEyeOff className="w-5 h-5" /> : <IoMdEye className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={handleSignup}
              className="w-full flex items-center justify-center gap-3 mt-2
                         bg-rose-600 hover:bg-rose-500 text-white
                         h-[50px] rounded-full font-black text-[12px] tracking-widest uppercase
                         hover:shadow-[0_0_30px_rgba(225,29,72,0.35)]
                         transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
            >
              <span>Create Account</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[16px]">→</span>
            </button>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

          <p className="text-center text-[13px] text-zinc-500">
            Already have an account?{" "}
            <span
              className="text-rose-400 hover:text-white font-black cursor-pointer transition-colors duration-300"
              onClick={() => navigate("/login")}
            >
              Login Now
            </span>
          </p>

          <p className="text-[11px] text-zinc-600 text-center leading-relaxed">
            By creating an account, you agree to our{" "}
            <span className="text-zinc-400 hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</span>
            {" "}and{" "}
            <span className="text-zinc-400 hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</span>
          </p>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-700/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex items-center justify-between w-[92%] max-w-[500px] mt-10">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
        <span className="mx-4 text-zinc-700 text-[10px] tracking-[4px] uppercase">Style Baazar</span>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
      </div>
    </div>
  )
}

export default Registration