import { CommonFormMain2 } from "@/components/common/commonform2"

export default function Contact(){
  return<>
  <div className="flex flex-col md:flex-row my-10 md:p-10  gap-2">
      <div className="md:w-1/2 w-full flex flex-col gap-2 md:p-10 p-2">
      <h1 className="text-3xl font-semibold ">Have Questions?</h1>
      <h2 className="text-3xl font-semibold ">Get In Touch!</h2>
     <p className="">House no 49 tntura road</p>
     <p className="text-red-500 ">repcar@gmail.com</p>
      <img src={"/images/contact.jpg"} alt="contact-image" className=""/>
      
      </div>
      <div className="md:w-1/2 w-full md:p-10 bg-slate-200 mt-10 "><CommonFormMain2></CommonFormMain2></div>

    </div>
  </>
}