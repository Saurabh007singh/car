"use client"
import { BsFillPeopleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import HoverButton from "./button";

export function Portfolio() {
  const items = [
    {
      id: "wheel repair",
      desc: "repairing the wheel",
      img:"/images/folio1.jpg"
    },
    {
      id: "wheel repair",
      desc: "repairing the wheel",
      img:"/images/folio2.jpg"
    },{
      id: "wheel repair",
      desc: "repairing the wheel",
      img:"/images/folio3.jpg"
    },{
      id: "wheel repair",
      desc: "repairing the wheel",
      img:"/images/folio4.jpg"
    },{
      id: "wheel repair",
      desc: "repairing the wheel",
      img:"/images/folio5.jpg"
    },
    
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  p-4 ">
 <div className="flex flex-col gap-10 items-start">
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
        viewport={{ once: false }}> <HoverButton text={"ALL PORTFOLIO --->"} height={"70px"} width={"230px"} /></motion.div>
       
      </div>
      {items.map((items,index) => {
        return <div key={index}><motion.div
          
          whileHover="hover"
          initial="initial"
          className="relative overflow-hidden shadow-lg bg-black h-[450px] group"
        >
          {/* Base Image */}
          <img
            src={items.img}
            alt={"dsdsd"}
            className="object-cover h-full w-full transition-opacity duration-300"
          />

          {/* Icon + Title at bottom center */}
          <motion.div
            variants={{
              initial: { opacity: 1 },
              hover: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10"
          >
            
            <span className="text-white font-opensans w-60 font-extrabold text-[20px]">
              {}
            </span>
          </motion.div>

          {/* Overlay that slides in on hover */}
          <motion.div
            variants={{
              initial: { y: "100%", opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0  left-0 w-full h-full p-6 flex flex-col z-20  bg-black/80  "
          >
            <div className="flex flex-col  items-start mt-48 gap-4 p-2">
             
              <h3 className="text-white text-[18px] font-opensans font-bold">
                {items.id}
              </h3>
              <p className="text-md font-opensans mt-2 text-white">{items.desc}</p>
              <HoverButton 
                text={"Know More "}
                height={"50px"}
                width={"150px"}
              />
            </div>
          </motion.div>
        </motion.div></div>;
      })}
     
    </div>
  );
}

