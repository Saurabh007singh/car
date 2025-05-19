import { ServiceSection } from "@/components/services/allservices";
import HeroCarousel from "@/components/services/herocrousel";

export default async function Services(){


  const [bannerRes, servicesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/banner`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/services`, { cache: "no-store" }),
  ]);

  const bannerData = await bannerRes.json();
  const services= await servicesRes.json();
 



  return (<>
  
  <section>
    <HeroCarousel slides={bannerData.data}></HeroCarousel>
  </section>
  <section >
    <ServiceSection services={services.data}></ServiceSection>
  </section>
  </>)
}