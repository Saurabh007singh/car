"use client"
import { motion } from "framer-motion";

const menuItems = [
  "Color Correction",
  "Support",
  "Management",
  "Consultancy",
  "Editing",
  "Production",
];

const SeamlessScrollingMenu = () => {
  const repeatedItems = [...menuItems, ...menuItems]; // Repeat to loop seamlessly

  return (
    <div className="  z-20 overflow-hidden bg-red-600 py-4 ">
      <motion.div
        className="flex w-max space-x-8"
        animate={{ x: ["0%", "-50%"] }} // Scroll half since items are doubled
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 items-center justify-center text-white font-bold uppercase my-4  px-4"
          >
            <div className="w-10 h-10 border-4 border-white rounded-full mb-1"></div>
            <span className="text-[40px] ">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SeamlessScrollingMenu;
