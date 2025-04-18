import { ServiceSection } from "@/components/services/allservices";
import HeroCarousel from "@/components/services/herocrousel";

export default function Services(){
  return (<>
  <div className="h-28 bg-black"></div>
  <section>
    <HeroCarousel></HeroCarousel>
  </section>
  <section>
    <ServiceSection></ServiceSection>
  </section>
  </>)
}