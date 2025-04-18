"use client"

import { motion, AnimatePresence } from "framer-motion";
import {ServiceCard} from "../home/servicecard";
import HoverButton from "../home/button";
import { Play } from "lucide-react";
import axios from "axios";
import { useEffect,useState} from "react";
import { useRouter } from "next/navigation";

export  function ServiceSection() {
  const router=useRouter()
const [services,setServices]=useState([])
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const visibleServices=services.slice(0,4)
  useEffect(() => {
    const fetchServices = async () => {
      try {
       
        const res = await axios.get("/api/home/services");
        setServices(res.data.data); // assuming your API returns { success, data }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
  
    fetchServices();
  }, []);


  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-8 p-4 mt-16 relative">
      {/* Section Header */}
      <div className="flex flex-row justify-between items-center">
        <motion.div  initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}  className="flex flex-col gap-3">
          <span className="text-red-500 font-opensans font-extrabold">
            Our Service List
          </span>
          <span className="font-opensans font-extrabold text-4xl">
            Our Services
          </span>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}> <div onClick={()=>router.push("/home/services")}><HoverButton text={"ALL SERVICES ---->"} height={"70px"} width={"200px"} /></div></motion.div>
       
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