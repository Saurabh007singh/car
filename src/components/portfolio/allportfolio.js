"use client"

import { motion, AnimatePresence } from "framer-motion";
import {ServiceCard} from "../home/servicecard";
import HoverButton from "../home/button";
;
import { useState} from "react";
import { useRouter } from "next/navigation";
import { PortfolioCard } from "./portfoliocard";

export  function PortfolioSection({services}) {
  const router=useRouter()
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const visibleServices=services.slice(0,4)
  

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-8 p-4 lg:mt-16  relative">
    {/* Section Header */}
    <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center">
      <motion.div  initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}  className="flex flex-col gap-3  ">
        <span className="text-red-500 ml-1 font-opensans font-bold">
          Our Portfolio List
        </span>
        <span className="font-opensans  text-4xl">
          Our Portfolio
        </span>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}> </motion.div>
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:px-5">
        {visibleServices.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveVideoIndex(index)}
          >
            <PortfolioCard {...item}  />
          </div>
        ))}
      </div>

     
    </div>
  );
}






