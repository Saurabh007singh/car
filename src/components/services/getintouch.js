import { CommonFormMain } from "../common/commonform";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
export function GetInTouch({ data }) {

  return (
    <>
      <div className="flex w-full lg:flex-row flex-col lg:p-3 items-start p-1 mt-14  gap-4 ">
        <div className="lg:w-[65%] w-full flex flex-col gap-4 p-2 ">
          <img src={data?.images[2]} alt="service image" className=" w-full " />
         <div className="flex lg:flex-row  flex-col items-start w-full gap-2 ">
          <img src={data?.images[3]} className="lg:h-10 h-8"/> 
          <div className="flex flex-col gap-4 w-full">
            <h1 className="lg:text-2xl text-[20px] font-semibold">{data?.cardHeading1}</h1>
            <h2 className="lg:text-1xl text-[18px] font-semibold">{data?.cardSubHeading1}</h2>
            <div style={{ whiteSpace: 'pre-wrap' }}><p className="text-slate-600">{data?.para1}</p></div>
            
            </div>
            
          </div>
        </div>
        <div className="lg:w-[35%] w-full flex flex-col  ">
          <div className="lg:flex hidden p-3 lg:p-10 flex-col  bg-[#F9F9F9]">
            <span className=" font-arial text-3xl mb-4 ">Get In Touch</span>
            <CommonFormMain></CommonFormMain>
           
          </div> 
          <div className=" hidden md:flex flex-col mt-15 p-4 gap-3 bg-[#F9F9F9] ">
              <div><span className=" font-semibold text-[20px]">CONTACT INFO</span></div>
              <div className="flex flex-row  gap-3">
                <div><FiPhoneCall className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col items-start">
      <span className="text-[16px] font-semibold">Contact Phone</span>
      <span className="text-slate-600">+55 (9900) 666 22</span>
                </div>
              </div>
              <div className="flex flex-row  gap-3">
              <div><MdOutlineMessage className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col">
                <span className="text-[16px] font-semibold">Contact Mail</span>
                <span className="text-slate-600">example@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-row   gap-3">
              <div><BiTargetLock className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col">
                <span className="text-[16px] font-semibold">Head Office: 14/4, Bonosri, Road A, califurnia, USA.</span>
                <span className="text-slate-600">+55 (9900) 666 22</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col lg:p-3 items-start p-2  gap-4">
        <div className="lg:w-[35%] w-full flex flex-col ">{data?.images[4]?<img src={data?.images[4]} alt="service image" className=" w-full " />:null} </div>
        <div className="lg:w-[65%] w-full flex flex-col gap-4 ">
         
         <div className="lg:flex-row flex-col flex items-start w-full gap-2 ">
          {data?.images[5]?<img src={data?.images[5]} className="lg:h-10 h-8"/>:null}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="lg:text-2xl text-[20px] font-semibold">{data?.cardHeading2}</h1>
            <h2 className="lg:text-1xl text-[18px] font-semibold">{data?.cardSubHeading2}</h2>
            <div style={{ whiteSpace: 'pre-wrap' }}><p className="text-slate-600">{data?.para2}</p></div>
            
            </div>
            
          </div>
        </div>
          
        </div>
        <div className="flex w-full flex-col-reverse lg:flex-row  lg:p-3 items-start p-2 gap-4">
       
        <div className="lg:w-[65%] w-full flex flex-col gap-4 ">
         
         <div className="lg:flex-row flex-col flex items-start w-full gap-2 ">
          {data?.images[7]?<img src={data?.images[7]} className="lg:h-10 h-8"/>:null}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="lg:text-2xl text-[20px] font-semibold">{data?.cardHeading2}</h1>
            <h2 className="lg:text-1xl text-[18px] font-semibold">{data?.cardSubHeading2}</h2>
            <div style={{ whiteSpace: 'pre-wrap' }}><p className="text-slate-600">{data?.para2}</p></div>
            
            </div>
            
          </div>
        </div>
        <div className="lg:w-[35%] w-full flex flex-col ">{data?.images[6]?<img src={data?.images[6]} alt="service image" className=" w-full " />:null} </div>
          
        </div>
        <div className=" mt-5 flex flex-col w-full lg:h-[700px] md:h-[400px] sm:h-[400px] h-[200px]">
          <span className="p-2 text-center w-full text-2xl font-semibold">WATCH OUR MEN IN ACTION</span>
          <iframe
  src={data?.vidUrl}
  className="w-full h-full border-0" // 👈 This replaces frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Service Video"
/>
            
          </div>
        <div className="lg:hidden w-full flex flex-col mt-5  ">
          <div className="lg:hidden flex  p-3 lg:p-10 flex-col  bg-[#F9F9F9]">
            <span className=" font-arial text-3xl mb-4 ">Get In Touch</span>
            <CommonFormMain></CommonFormMain>
           
          </div> 
          <div className=" lg:hidden flex flex-col mt-5  p-4 gap-3 bg-[#F9F9F9] ">
              <div><span className=" font-semibold text-[20px]">CONTACT INFO</span></div>
              <div className="flex flex-row  gap-3">
                <div><FiPhoneCall className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col items-start">
      <span className="text-[16px] font-semibold">Contact Phone</span>
      <span className="text-slate-600">+55 (9900) 666 22</span>
                </div>
              </div>
              <div className="flex flex-row  gap-3">
              <div><MdOutlineMessage className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col">
                <span className="text-[16px] font-semibold">Contact Mail</span>
                <span className="text-slate-600">example@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-row   gap-3">
              <div><BiTargetLock className="text-red-500 h-6 w-6 mt-2 " /></div>
                <div className="flex flex-col">
                <span className="text-[16px] font-semibold">Head Office: 14/4, Bonosri, Road A, califurnia, USA.</span>
                <span className="text-slate-600">+55 (9900) 666 22</span>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}
