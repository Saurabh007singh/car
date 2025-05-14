import { motion } from "framer-motion";
import HoverButton from "./button";

export default function HeroSlide({ slide }) {
  return (
    <motion.section
      className="relative w-full h-[800px] overflow-hidden"
      key={slide._id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {slide.images[0] ? (
        <div
          className="absolute inset-0 bg-cover bg-center border-b-4 border-white"
          style={{ backgroundImage: `url(${slide.images[0]})` }}
        />
      ) : null}

      <div className="absolute top-0 lg:left-[-300px] z-10 w-full h-full flex justify-center items-center">
        {slide.images[2]?<motion.img
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={slide.images[2]}
          alt="shape"
          className="h-[700px] w-[700px] animate-zoom-pulse"
        />:null}
        
      </div>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute lg:bottom-[-150px] lg:right-[-350px] md:bottom-[-250px] md:right-[-250px] sm:bottom-[-250px] sm:right-[-200px] bottom-[-250px] right-[-30px] z-10 w-full h-full flex justify-center items-center"
      >
        {slide.images[1] ? (
          <img
            src={slide.images[1]}
            alt="layer"
            className="lg:h-[400px] lg:w-[800px] md:h-[200px] md:w-[400px] h-[150px]"
          />
        ) : null}
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute z-20 inset-0 flex flex-col items-start top-20 gap-7 px-4 text-white"
      >
        <div className="flex items-center gap-2 mb-2">
          {slide.subHeading ? (
            <span className="text-lg sm:text-xl md:text-[18px] font-semibold">
              {slide.subHeading}
            </span>
          ) : null}
        </div>
        {slide.heading ? (
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 max-w-full sm:max-w-2xl text-left leading-tight">
            {slide.heading}
          </h1>
        ) : null}
        {slide.heading && slide.subheading ?<HoverButton text="KNOW MORE" height="60px" width="200px" />:null}
        
      </motion.div>
    </motion.section>
  );
}
