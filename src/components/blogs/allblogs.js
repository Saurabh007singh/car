"use client"

import { motion, AnimatePresence } from "framer-motion";

;
import { useState} from "react";
import { useRouter } from "next/navigation";
import { BlogCard } from "./blogcard";

export  function BlogSection({services}) {
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
          Our Service List
        </span>
        <span className="font-opensans  text-4xl">
          Our Services
        </span>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}> </motion.div>
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 lg:px-5">
        {visibleServices.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveVideoIndex(index)}
          >
            <BlogCard {...item}  />
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
          className="w-full lg:h-[700px] md:h-[400px] sm:h-[400px] h-auto relative"
        >
          <div className="relative w-full lg:h-[700px] md:h-[400px] sm:h-[400px] h-[200px]">
          
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