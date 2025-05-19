import { GetInTouch } from "@/components/services/getintouch";
import { SingleServiceBanner } from "@/components/services/specificservicebanner";


  


export default async function SpecificService({params}){
const {id} = await params
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/services/specificservice/${id}`, { cache: "no-store" }
  );
  const data = await res.json();


  return(<>
  <section >
    <SingleServiceBanner serviceData={data.data}/>
  </section>
  <section>
    <GetInTouch data={data.data}/>
  </section>
  </>) 
}