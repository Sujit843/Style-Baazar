import { useContext, useState } from "react";
import Logo from "../assets/vcart logo.png"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false);
  const {serverUrl} = useContext(authDataContext);
  const {adminData, getAdmin} = useContext(adminDataContext);
  let navigate = useNavigate();

  const adminLogin = async (e) =>{
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + "/api/auth/adminlogin" ,{email, password} ,
        {withCrendentials: true}
      )
      console.log(result.data);
      getAdmin();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    
          <div className='w-[100vw] h-[100vh]  flex flex-col 
            justify-start items-center'>
            <div className='w-[100%] h-[80px] flex  justify-start items-center  px-[30px] 
            gap-[10px] cursor-pointer ' > 
              <img className="w-[40px]" src={Logo} alt="" />
              <h1 className="text-[22px] font-sans">Style Baazar</h1>
            </div>
      
            <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] ">
              <span className="text-[25px] text-semibold">Registration Page</span>
              <span className="text-[16px] ">Welcome to Style Baazar, Apply to Admin Login</span>
            </div>
      
            <div className="max-w-[600px] w-[80%] h-[400px] bg-[#00000025] border-[1px] 
            border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
              <form action=""  onSubmit={adminLogin} className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] ">

                <div className="w-[90%] h-[280px] flex flex-col items-center justify-center gap-[15px] relative">
      
                <input type="text" className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm
                  rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold"
                  placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email}/>
      
                <input type={!show? "text" : "password"} className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm
                  rounded-lg shadow-lg   px-[20px] font-semibold"
                  placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                {!show && <IoMdEye className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] mb-[25px]" 
                onClick={() => setShow(prev => !prev)}/>}
                {show &&  <IoMdEyeOff className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] mb-[25px]" 
                onClick={() => setShow(prev => !prev)}/>}
      
                  <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex text-white
                  items-center justify-center mt-[15px] text-[17px] font-semibold">Login</button>

                </div>
              </form>
            </div>
      
          </div>
  )
}

export default Login