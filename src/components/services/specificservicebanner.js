"use client";

import { motion } from "framer-motion";

export  function SingleServiceBanner({serviceData}) {


  return (
    <>
      
        {serviceData ? (
          <div className="relative w-full">
            <div className="w-full h-auto ">
              <img
                src={serviceData?.images[0]}
                alt="service banner"
                className="w-full lg:h-auto h-[300px]"
              />
                <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute lg:bottom-[-150px] lg:right-[-350px] md:bottom-[-40px] md:right-[-200px] sm:bottom-[-50px] sm:right-[-100px] bottom-[-80px] right-[-30px] z-10 w-full h-full flex justify-center items-center"
      >
        <img
         
          src={serviceData?.images[1]}
          alt="layer"
          className="lg:h-[400px]  md:h-[200px] sm:h-[150px] h-[130px] "
        />
      </motion.div>
      <motion.div initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} className="absolute z-20 inset-0 top-2 flex flex-col items-start lg:top-20 gap-7 px-4 text-white">
        <div className="flex items-center">
          <span className="lg:text-lg sm:text-md text-md md:text-[18px] font-semibold">
            {serviceData?.bannerHeading}
          </span>
        </div>
        <h1 className="text-4xl sm:text-4xl lg:text-7xl font-bold  max-w-full sm:max-w-2xl text-left leading-tight">
          {serviceData?.bannerSubHeading}
        </h1>
        
      </motion.div>
              
            </div>
          </div>
        ) : null}
   
    </>
  );
}
