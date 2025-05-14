"use client"
import { motion} from "framer-motion";


import { useState} from "react";
import { useRouter } from "next/navigation";
import { BlogCard } from "./blogcard";

export  function BlogsSection({services}) {
  const router=useRouter()



  const visibleServices=services
  


  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-8 p-2 lg:mt-16 relative">
      {/* Section Header */}
      <div className="flex lg:flex-row gap-2 flex-col lg:justify-between lg:items-center">
        <motion.div  initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}  className="flex flex-col gap-3  ">
          <span className="text-red-500 ml-1 font-opensans font-bold">
            Our Blog List
          </span>
          <span className="font-opensans  text-4xl">
            Our Blogs
          </span>
        </motion.div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:px-20">
        {visibleServices.map((item, index) => (
          <div
            key={index}
            className="w-full h-[500px]"
          >
            <BlogCard {...item}  />
          </div>
        ))}
      </div>
    </div>
  );
}
