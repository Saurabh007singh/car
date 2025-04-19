"use client"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSlide from "./Heroslide";


export default function HeroCarousel({slides}) {
  const [current, setCurrent] = useState(0);


  return (<>{
      slides?.length > 0 ? <div className="relative w-full h-[800px] overflow-hidden">
      {/* Slide */}
      <AnimatePresence mode="wait">
        <HeroSlide key={slides[current]._id} slide={slides[current]} />
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 border-4 border-white transition-all duration-300 ${
              current === index ? "bg-white scale-110" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>:null
  }</>
    
  );
}
