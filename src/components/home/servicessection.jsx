"use client"

import { motion, AnimatePresence } from "framer-motion";
import {ServiceCard} from "./servicecard";
import HoverButton from "./button";
import { useState} from "react";
import { useRouter } from "next/navigation";

export  function ServiceSection({services}) {
  const router=useRouter()
console.log(services)
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  console.log(services)
  const visibleServices=services.slice(0,4)
  


  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-8 p-4 lg:mt-16 relative">
      {/* Section Header */}
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center">
        <motion.div  initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}  className="flex flex-col gap-3  ">
          <span className="text-red-500 ml-1 font-opensans font-bold">
            Our Service List
          </span>
          <span className="font-opensans  text-4xl">
            Our Services
          </span>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}> <div onClick={()=>router.push("/home/services")}><HoverButton text={"ALL SERVICES ---->"} height={"px"} width={"200px"} /></div></motion.div>
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 lg:px-5">
        {visibleServices.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveVideoIndex(index)}
          >
            <ServiceCard {...item}  />
          </div>
        ))}
      </div>

      {/* Video Player */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVideoIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[700px] relative"
        >
          <div className="relative w-full h-[700px]">
          
          <iframe
  src={visibleServices[activeVideoIndex]?.vidUrl}
  className="w-full h-full border-0" // 👈 This replaces frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Service Video"
/>
            
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
