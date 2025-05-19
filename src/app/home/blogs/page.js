import { BlogsSection } from "@/components/blogs/blogssection";
import { ServiceSection } from "@/components/services/allservices";
import HeroCarousel from "@/components/services/herocrousel";

export default async function Blogs(){


  const [bannerRes, servicesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/banner`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/blog`, { cache: "no-store" }),
  ]);

  const bannerData = await bannerRes.json();
  const services= await servicesRes.json();
 



  return (<>
  
  <section>
    <HeroCarousel slides={bannerData.data}></HeroCarousel>
  </section>
  <section >
    <BlogsSection services={services.data}></BlogsSection>
  </section>
  </>)
}