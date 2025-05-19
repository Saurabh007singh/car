// import HeroContent from "@/components/home/herocontent";
import BlogSection from "@/components/home/blogs";
import { HomeContact } from "@/components/home/contact";
import { DetailsSection } from "@/components/home/detailssection";
import HeroCarousel from "@/components/home/herocrousel";
import MenuMoving from "@/components/home/movingment";
import MenuMoving2 from "@/components/home/movingment2";
import { Portfolio } from "@/components/home/portfolio";
import { ServiceSection } from "@/components/home/servicessection";
import TestimonialSlider from "@/components/home/testimonials";
import Why from "@/components/home/whychoose";



export default async function HomePage(){
  const [bannerRes, servicesRes,portfolioRes,blogRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/banner`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/services`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/portfolio`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/blog`, { cache: "no-store" }),
  ]);

  const bannerData = await bannerRes.json();
  const servicesData = await servicesRes.json();
  const portfolioData=await portfolioRes.json();
  const blogData=await blogRes.json();

  
 
return <>

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
  <section><Why/></section>
  <section className="h-auto flex flex-grow" >
    <Portfolio portfolio={portfolioData.data}/>
  </section>
  <section>
    <TestimonialSlider></TestimonialSlider>
  </section>
  <section>
    <BlogSection blog={blogData.data}/>
  </section>
  <section>
    <HomeContact></HomeContact>
  </section>
</>
} 


