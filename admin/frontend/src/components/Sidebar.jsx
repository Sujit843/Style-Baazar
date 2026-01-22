import { IoIosAddCircleOutline } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className='w-[18%] h-[100vh] border-r-[1px] py-[30px] fixed laft-0 top-[70px] bg-yellow-50'> 
    <div className='flex flex-col gap-4 pt-[5px] pl-[20%] text-[15px]'>

      <div className='flex items-center justify-center md:justify-start gap-3 border-[2px] border-gray-400
      cursor-pointer hover:bg-[#2c7b89] hover:text-white ' onClick={()=> navigate("/addform")}>
        <IoIosAddCircleOutline className="w-[40px] h-[25px]" />
        <p className="hidden md:block p-[4px] text-[16px]">Add Items</p>
      </div>

    <div className='flex items-center justify-center md:justify-start gap-3 border-[2px] border-gray-400
      cursor-pointer hover:bg-[#2c7b89] hover:text-white ' onClick={()=> navigate("/list")}>
        <FaListAlt className="w-[40px] h-[25px]"/>
        <p className="hidden md:block p-[4px] text-[16px]">List Items</p>
      </div>

    <div className='flex items-center justify-center md:justify-start gap-3 border-[2px] border-gray-400
      cursor-pointer hover:bg-[#2c7b89] hover:text-white ' onClick={()=> navigate("/order")}>
        <SiTicktick className="w-[40px] h-[25px]"/>
        <p className="hidden md:block p-[4px] text-[16px]">View Orders</p>
      </div>  
    </div>
    </div>
  )
}

export default Sidebar