import { PortfolioSection } from "@/components/portfolio/allportfolio";

import HeroCarousel from "@/components/services/herocrousel";

export default async function Services(){


  const [bannerRes, servicesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio/banner`, { cache: "no-store" }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/portfolio`, { cache: "no-store" }),
  ]);

  const bannerData = await bannerRes.json();
  const services= await servicesRes.json();
 



  return (<>
  
  <section>
    <HeroCarousel slides={bannerData.data}></HeroCarousel>
  </section>
  <section >
    <PortfolioSection services={services.data}></PortfolioSection>
  </section>
  </>)
}