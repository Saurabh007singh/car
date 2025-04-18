import { GetInTouch } from "@/components/services/getintouch";
import { SingleServiceBanner } from "@/components/services/specificservicebanner";
import axios from "axios";

  


export default async function SpecificService({params}){
const {id} = await params
  const res = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/services/specificservice/${id}`, { cache: "no-store" }
  );
  const data = await res.data.data;


  return(<>
  <div className="h-28 bg-black"></div>
  <section >
    <SingleServiceBanner serviceData={data}/>
  </section>
  <section>
    <GetInTouch data={data}/>
  </section>
  </>) 
}