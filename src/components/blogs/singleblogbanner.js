"use client";

import { motion } from "framer-motion";

export  function SingleBlogBanner({serviceData}) {


  return (
    <>
      
        {serviceData ? (
          <div className="relative w-full">
            <div className="w-full h-auto ">
              <img
                src={serviceData?.images[0]}
                alt="service banner"
                className="w-full  h-[400px]"
              />
            </div>
          </div>
        ) : null}
   
    </>
  );
}
