import { CommonFormMain } from "../common/commonform";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export function ProjectDetails({ data }) {

  return (
    <>
      <div className="flex w-full lg:flex-row flex-col lg:p-3 items-start p-1 mt-6  gap-4 ">
        <div className="lg:w-[65%] w-full flex flex-col gap-4 p-2 ">
          {data?.service ? <span className="bg-red-500 p-2 w-1/4 text-center text-white">
            {data?.service}
          </span>:null}
          
         {data?.heading1 ? <h1 className="text-3xl text-extrabold font-arial">
            {data?.heading1}
          </h1>:null}


          {data?.para1 ? <p className="text-slate-500">
           {data?.para1}
          </p>:null}
         { data?.heading2 ? <h2 className="text-3xl text-extrabold font-arial">
            {data?.heading2}
          </h2>:null}
          {data?.para2 ? <p className="text-slate-500">
            {data?.para2}
          </p>:null}
        </div>
        <div className="lg:w-[35%] w-full flex flex-col p-6 bg-[#F9F9F9] ">
          <div className="p-3 flex flex-col gap-3 ">
            <span className="text-2xl font-semibold font-arial">
              Project Information
            </span>
            <div className="flex flex-col">
              <span className="font-arial text-slate-500">Clients</span>
             {data?.client ?  <span className="font-arial font-bold">
                {data?.client}
              </span>:null}
            </div>
            <div className="flex flex-col">
              <span className="font-arial text-slate-500">Category</span>
              { data?.category? <span className="font-arial font-bold">
                {data?.category}
              </span>:null}
            </div>
            <div className="flex flex-col">
              <span className="font-arial text-slate-500">Timeframe</span>
              {data.timeframe?<span className="font-arial font-bold">
               {data.timeframe}
              </span>:null}
            </div>
            <span className="text-[#9595A2] text-[20px] font-bold font-arial mt-4">
              Links to our social media post
            </span>
            <div className="flex flex-row gap-4 mt-4">
              <Link href={data?.fbLink || "#"}  className=" flex items-center justify-center w-12 h-12 bg-[#E7E7E9]">
                <FaFacebookF className="text-[#9595A2] text-2xl" />
              </Link>
              <Link href={data?.instaLink || "#"} className=" flex items-center justify-center w-12 h-12 bg-[#E7E7E9]">
                <FaInstagram className="text-[#9595A2] text-2xl" />
              </Link>
              <Link href={data?.youtubeLink || "#"} className=" flex items-center justify-center w-12 h-12 bg-[#E7E7E9]">
                <FaYoutube className="text-[#9595A2] text-2xl" />
              </Link>
              <Link  href={data?.twitterLink || "#"} className=" flex items-center justify-center w-12 h-12 bg-[#E7E7E9]">
                <FaXTwitter className="text-[#9595A2] text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="flex lg:flex-row flex-col p-2">
        <img src={data?.images[3]} alt="service image1" className="  p-2" />
        <img src={data?.images[4]} alt="service image2" className="  p-2" />
        <img src={data?.images[5]} alt="service image3" className="  p-2" />
      </section>

      <section className="flex flex-col p-6 gap-2">
        <h1 className="text-[24px] font-bold ">Overview & Challenge</h1>
       {data?.pata3 ?<p className="text-slate-500">
          Donec non congue odio. Vivamus aliquam urna molestie ligula viverra,
          quis varius dui pharetra. Quisque nec lacus feugiat, pulvinar lorem
          hendrerit, mollis ipsum. Ut eget nisl laoreet, egestas magna et,
          luctus eros. Nunc mi diam, placerat eget magna nec, eleifend
          ullamcorper ligula. Phasellus aliquet convallis eros vitae tempus. Ut
          dolor arcu, scelerisque sed quam nec, tincidunt lobortis ex. Praesent
          dolor augue.
        </p>:null}
      </section>

      <section className="flex lg:flex-row flex-col gap-4  p-6">
        <div className="flex md:w-1/3 flex-col gap-2">
          <img
            src={data?.images[6]}
            alt="service image6"
            className=" h-16 w-16  "
          />
        { data?.service1 ? <span className="text-[18px] text-semibold">{data?.service1}</span>:null}
          {data?.brief1 ?<p className="text-slate-500">
            {data?.brief1}
          </p>:null}
        </div>
        <div className="flex md:w-1/3 flex-col gap-2">
          <img
            src={data?.images[7]}
            alt="service image6"
            className=" h-16 w-16  "
          />
           { data?.service2 ? <span className="text-[18px] text-semibold">{data?.service2}</span>:null}
          {data?.brief2 ?<p className="text-slate-500">
            {data?.brief2}
          </p>:null}
        </div>
        <div className="flex md:w-1/3 flex-col gap-2">
          <img
            src={data?.images[8]}
            alt="service image6"
            className=" h-16 w-16  "
          />
          { data?.service3 ? <span className="text-[18px] text-semibold">{data?.service3}</span>:null}
          {data?.brief3 ?<p className="text-slate-500">
            {data?.brief3}
          </p>:null}
        </div>
      </section>


   {data?.vidUrl?   <div className=" mt-5 flex flex-col w-full lg:h-[700px] md:h-[400px] sm:h-[400px] h-[340px] p-4">
          <span className="p-2 text-center w-full text-2xl font-semibold">WATCH OUR MEN IN ACTION</span>
          <iframe
  src={data?.vidUrl}
  className="w-full h-full border-0" // 👈 This replaces frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Service Video"
/>
            
          </div>:null}

      <div className="lg:hidden w-full flex flex-col mt-5  ">
        <div className="lg:hidden flex  p-3 lg:p-10 flex-col  bg-[#F9F9F9]">
          <span className=" font-arial text-3xl mb-4 ">Get In Touch</span>
          <CommonFormMain></CommonFormMain>
        </div>
        <div className=" lg:hidden flex flex-col mt-5  p-4 gap-3 bg-[#F9F9F9] ">
          <div>
            <span className=" font-semibold text-[20px]">CONTACT INFO</span>
          </div>
          <div className="flex flex-row  gap-3">
            <div>
              <FiPhoneCall className="text-red-500 h-6 w-6 mt-2 " />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[16px] font-semibold">Contact Phone</span>
              <span className="text-slate-600">+55 (9900) 666 22</span>
            </div>
          </div>
          <div className="flex flex-row  gap-3">
            <div>
              <MdOutlineMessage className="text-red-500 h-6 w-6 mt-2 " />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">Contact Mail</span>
              <span className="text-slate-600">example@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-row   gap-3">
            <div>
              <BiTargetLock className="text-red-500 h-6 w-6 mt-2 " />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">
                Head Office: 14/4, Bonosri, Road A, califurnia, USA.
              </span>
              <span className="text-slate-600">+55 (9900) 666 22</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
