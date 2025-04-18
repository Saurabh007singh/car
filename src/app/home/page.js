// import HeroContent from "@/components/home/herocontent";
import BlogSection from "@/components/home/blogs";
import { DetailsSection } from "@/components/home/detailssection";
import HeroCarousel from "@/components/home/herocrousel";
import MenuMoving from "@/components/home/movingment";
import MenuMoving2 from "@/components/home/movingment2";
import { Portfolio } from "@/components/home/portfolio";
import { ServiceSection } from "@/components/home/servicessection";
import TestimonialSlider from "@/components/home/testimonials";



export default  function HomePage(){
return <>
<div className="h-28 bg-black"></div>
  <section className="relative w-full  ">

<HeroCarousel/>

  </section>
  <section>
    <ServiceSection/>
  </section>
  <section>
    <DetailsSection/>
  </section>
  <section className=" flex items-center justify-center h-[500px] relative bg-[#F9F9F9]">
    <MenuMoving></MenuMoving>
    <MenuMoving2></MenuMoving2>
  </section>
  <section>
    <Portfolio/>
  </section>
  <section className=" flex items-center justify-center w-full h-[500px] relative bg-[#F9F9F9]">
    <TestimonialSlider></TestimonialSlider>
  </section>
  <section>
    <BlogSection/>
  </section>
</>
} 