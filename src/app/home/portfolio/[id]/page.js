import { ProjectDetails } from "@/components/portfolio/projectdetails";
import { GetInTouch } from "@/components/services/getintouch";import { SingleServiceBanner } from "@/components/services/specificservicebanner";


export default async function SpecificService({params}){
const {id} = await params
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/portfolio/specificportfolio/${id}`, { cache: "no-store" }
  );
  const data = await res.json();


  return(<>
 
  <section >
    <SingleServiceBanner serviceData={data?.data}/>
  </section>
  <section>
  <img src={data?.data?.images[2]} alt="service image" className=" w-full mt-8 p-4" />
  </section>
  <section>
    <ProjectDetails data={data?.data}/>
  </section>
  
  </>) 
}