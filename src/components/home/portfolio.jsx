"use client"

import { motion, AnimatePresence } from "framer-motion";
import {ServiceCard} from "./servicecard";
import HoverButton from "./button";
import { useState} from "react";
import { useRouter } from "next/navigation";
import { PortfolioCard } from "../portfolio/portfoliocard";

export  function Portfolio({portfolio}) {
  const router=useRouter()

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);

  const visibleServices=portfolio.slice(0,6)
  
  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 p-2 mt-6 lg:px-5">

<div className=" h-[400px]  md:h-[400px] flex flex-col gap-10 items-start">
        <motion.div  initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}  className="flex flex-col gap-3">
          <span className="text-red-500 font-opensans font-extrabold">
            Our Portfolio List
          </span>
          <span className="font-opensans font-extrabold text-4xl">
            Our Portfolio
          </span>
          <p className="font-opensans text-[17px] w-[80%]">We understand the deep connection you have with your car. That's why we treat it with the same level of care and attention as you do.</p>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}><div onClick={()=>router.push("/home/portfolio")}><HoverButton text={"ALL PORTFOLIO --->"} height={"70px"} width={"230px"} /></div> </motion.div>
       
      </div>
        {visibleServices.map((item, index) => (
          <div
          className="h-[400px] md:h-[500px]"
            key={index}
            onMouseEnter={() => setActiveVideoIndex(index)}
          >
            <PortfolioCard {...item}  />
          </div>
        ))}
      </div>
 
 
  );
}
