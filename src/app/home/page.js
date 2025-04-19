// import HeroContent from "@/components/home/herocontent";
import BlogSection from "@/components/home/blogs";
import { DetailsSection } from "@/components/home/detailssection";
import HeroCarousel from "@/components/home/herocrousel";
import MenuMoving from "@/components/home/movingment";
import MenuMoving2 from "@/components/home/movingment2";
import { Portfolio } from "@/components/home/portfolio";
import { ServiceSection } from "@/components/home/servicessection";
import TestimonialSlider from "@/components/home/testimonials";



export default async function HomePage(){
  const [bannerRes, servicesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/banner`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/services`, { cache: "no-store" }),
  ]);

  const bannerData = await bannerRes.json();
  const servicesData = await servicesRes.json();
 
return <>
<div className="h-28 bg-black"></div>
  <section className="relative w-full  ">

<HeroCarousel slides={bannerData.data}/>

  </section>
  <section className="h-auto flex flex-grow">
    <ServiceSection services={servicesData.data} />
  </section>
  <section>
    <DetailsSection/>
  </section>
  <section className=" flex items-center justify-center lg:h-[500px] h-[250px] relative bg-[#F9F9F9]">
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


