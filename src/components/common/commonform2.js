"use client"

import { useRef } from "react"
import HoverButton from "../home/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const initialData={
  name:"",
  email:"",
  phone:"",
  message:""
}


export function CommonFormMain2({text}){
const name=useRef();
const email=useRef();
const phone=useRef();
const consent=useRef();
const message=useRef();
const router=useRouter()


async function handleSubmit(){
  if(consent.current.checked === false){
    alert("please agree the terms and conditions ")
  }else{
    initialData.name=name.current.value
    initialData.email=email.current.value
    initialData.phone=phone.current.value
    initialData.message=message.current.value

    const result=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/`,initialData)

    if(result.data.success){
      router.push("/home/thankyou")
    }
  }

}
return  <>
<div className="flex flex-col gap-4 md:p-6 ">
  
<input type="text" ref={name} placeholder="Full Name" required className=" h-12 bg-white border-2"/>
<input type="email" ref={email} placeholder="Email address" required className="h-12 bg-white border-2"/>
<input type="text" ref={phone} placeholder="Phone no" required className="h-12 bg-white border-2"/>
<textarea
          ref={message}
          placeholder="Your message"
          className="h-24 bg-white resize-none p-2 border rounded"
        />
<label className="flex items-center space-x-2">
          <input
            type="checkbox"
            ref={consent}
            className=""
          />
          <span>I agree to the terms and conditions</span>
        </label>
        <details className="text-sm text-gray-600 mt-2 transition duration-300">
  <summary className="cursor-pointer text-slate-400 underline ">Read Terms and Conditions</summary>
  <p className="text-sm text-gray-600">
  By submitting this form, you agree to the following terms:
  <br /><br />
  1. **Data Collection**: The information you provide (such as name, email, and phone number) will be used solely to contact you regarding your inquiry.
  <br />
  2. **Privacy**: We respect your privacy. Your data will not be shared with third parties without your consent.
  <br />
  3. **Communication**: You may receive follow-up emails or phone calls from our team in response to your submission.
  <br />
  4. **Accuracy**: Please ensure the information you provide is accurate and up to date.
  <br />
  5. **Consent**: By checking the box, you confirm that you understand and agree to these terms.
</p>
</details>

<div className="" onClick={()=>handleSubmit()}><HoverButton height={"50px"} width={"190px"}  text={"Get In Touch-->"}/></div>

  </div></> 
}