import {useNavigate} from "react-router-dom";
import Logo from "../assets/vcart logo.png"
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import axios from "axios"
function Nav() {
  const navigate = useNavigate()
  const {serverUrl} = useContext(authDataContext)
  const {getAdmin} = useContext(adminDataContext)

  const logOut = async () =>{
    try {
      const result = await axios.get(serverUrl + "/api/auth/logOut", {withCredentials:true})
      getAdmin();
      navigate("/login")
      console.log(result.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-[100vw] h-[70px] fixed top-0 flex items-center justify-between px-[30px] shadow-md z-50 bg-white '>
      <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer 
      ' onClick={() => navigate("/")}>
        <img src={Logo} alt="" className="w-[30px] " />
        <h1 className="text-[25px] font-sans ">𝓢𝓽𝔂𝓵𝓮 𝓑𝓪𝓪𝔃𝓪𝓻</h1>
      </div>

      <button className="text-[15px] hover:border-[2px] border-[#89daea] 
      cursor-pointer bg-gray-800 py-[10px] px-[20px] rounded-2xl text-white"
      onClick={logOut}>LogOut</button>

    </div>
  )
}

export default Nav