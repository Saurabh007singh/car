"use client"

import { useRef } from "react"
import HoverButton from "../home/button";

export function CommonFormMain({text}){
const name=useRef();
const email=useRef();
const phone=useRef();
const consent=useRef();
const message=useRef();



function handleSubmit(){
  if(consent.current.checked === false){
    alert("please agree the terms and conditions ")
  }else{
    alert("thanks for submitting we will contact you soon")
  }

}
return  <>
<div className="flex flex-col gap-4 ">
  
<input type="text" ref={name} placeholder="Full Name" className=" h-12 bg-white  " />
<input type="email" ref={email} placeholder="Email address" className="h-12 bg-white" />
<input type="text" ref={phone} placeholder="Phone no" className="h-12 bg-white" />
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

<div className="" onClick={()=>handleSubmit()}><HoverButton  text={"Get In Touch-->"}/></div>

  </div></> 
}