import { CommonFormMain } from "../common/commonform";




export function GetInTouch({data}){
 
  return <>
  <div className="flex w-full lg:flex-row flex-col lg:p-3 p-1 gap-4 ">
    <div className="lg:w-[65%] ">
      <img src={data?.images[2]} alt="service image" className=" w-full "/>
    </div>
    <div className="lg:w-[35%] flex p-10 flex-col bg-[#F9F9F9]">
      <span className=" font-arial text-3xl mb-4 ">Get In Touch</span>
      <CommonFormMain></CommonFormMain>
      
    </div>
  </div>
  </>
}