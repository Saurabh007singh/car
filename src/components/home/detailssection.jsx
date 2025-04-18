
import HoverButton from "./button";
import Counter from "./counter";
import { GiCarWheel } from "react-icons/gi";
import { MdLocalCarWash } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


export function DetailsSection(){
  return(<div className=" flex bg-[#F9F9F9] lg:flex-row flex-col w-full h-auto p-4 gap-4 mt-20">
<div className="flex h-auto lg:w-[50%] flex-col gap-6 p-2 justify-center ">
<h1 className="font-opensans font-extrabold text-[40px] w-[70%]">Our Care for Your Car Just Like You Do</h1>
<p className="font-opensans text-[17px] w-[80%]">We understand the deep connection you have with your car. That's why we treat it with the same level of care and attention as you do.</p>
<p className="font-opensans text-[17px] w-[80%]">From routine maintenance to intricate detailing, our team is dedicated to preserving your vehicle's performance,</p>
<HoverButton text={"Contact Us --->"} height={"70px"} width={"200px"}/>
</div>
<div className="flex lg:flex-row  flex-col lg:w-[50%]">
  <div className="flex flex-col  w-full ">
    <div className="relative flex group hover:bg-red-600 flex-col transition duration-500 ease-in-out mt-[100px] bg-white shadow-lg lg:items-start items-center gap-4  justify-center p-4 lg:h-[200px] lg:w-[300px] h-[200px] ">
    <span className="text-[#aaaaad] group-hover:text-white transition duration-500 ease-in-out  text-[18px]">Wheel Replacement</span>
    <div className="flex flex-row text-7xl group-hover:text-white transition duration-500 ease-in-out  font-arial font-extrabold "><Counter target={900} duration={2}/>+</div>
    <div className="absolute top-[-30px] left-10 h-16 w-16 transition duration-500 ease-in-out group-hover:bg-black  bg-[#D70007] text-6xl "><GiCarWheel className="text-6xl text-white   p-3" /></div>
   
   
    </div>
    <div className="relative flex group hover:bg-red-600 flex-col transition duration-500 ease-in-out mt-[100px] bg-white shadow-lg lg:items-start items-center gap-4  justify-center p-4 lg:h-[200px] lg:w-[300px] h-[200px] ">
    <span className="text-[#aaaaad] group-hover:text-white transition duration-500 ease-in-out  text-[18px]">Color Correction</span>
    <div className="flex flex-row text-7xl group-hover:text-white transition duration-500 ease-in-out  font-arial font-extrabold "><Counter target={1000} duration={2}/>+</div>
    <div className="absolute top-[-30px] left-10 h-16 w-16 transition duration-500 ease-in-out group-hover:bg-black  bg-[#D70007] text-6xl "><MdLocalCarWash className="text-6xl text-white   p-3" /></div>
   
   
    </div>
    
  
  </div>
  <div className="flex flex-col  w-full ">
    <div className="relative flex group hover:bg-red-600 flex-col transition duration-500 ease-in-out mt-[50px] bg-white shadow-lg lg:items-start items-center gap-4  justify-center p-4 lg:h-[200px] lg:w-[300px] h-[200px] ">
    <span className="text-[#aaaaad] group-hover:text-white transition duration-500 ease-in-out  text-[18px]">Interior Remodeling</span>
    <div className="flex flex-row text-7xl group-hover:text-white transition duration-500 ease-in-out  font-arial font-extrabold "><Counter target={1400} duration={2}/>+</div>
    <div className="absolute top-[-30px] left-10 h-16 w-16 transition duration-500 ease-in-out group-hover:bg-black  bg-[#D70007] text-6xl "><FaTools className="text-6xl text-white   p-3" /></div>
   
   
    </div>
    <div className="relative flex group hover:bg-red-600 flex-col transition duration-500 ease-in-out mt-[100px] bg-white shadow-lg lg:items-start items-center gap-4  justify-center p-4 lg:h-[200px] lg:w-[300px] h-[200px] ">
    <span className="text-[#aaaaad] group-hover:text-white transition duration-500 ease-in-out  text-[18px]">Years Of Experience</span>
    <div className="flex flex-row text-7xl group-hover:text-white transition duration-500 ease-in-out  font-arial font-extrabold "><Counter target={700} duration={2}/>+</div>
    <div className="absolute top-[-30px] left-10 h-16 w-16 transition duration-500 ease-in-out group-hover:bg-black  bg-[#D70007] text-6xl "><IoIosPeople className="text-6xl text-white   p-3" /></div>
   
   
    </div>
    
  
  </div>
</div>
  </div>)
}