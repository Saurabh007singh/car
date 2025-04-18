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

const SeamlessScrollingMenu2 = () => {
  const repeatedItems = [...menuItems, ...menuItems]; // Repeat to loop seamlessly

  return (
    <div className=" rotate-[-12deg] absolute z-10  overflow-hidden bg-[#F4F4F4] py-4 ">
      <motion.div
        className="flex w-max space-x-8"
        animate={{ x: ["0%", "50%"] }} // Scroll half since items are doubled
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="  flex flex-row gap-4 items-center justify-center  font-bold uppercase my-4  px-4"
          >
            <div className="w-10 h-10 border-4 border-black rounded-full mb-1"></div>
            <span className="text-[40px] text-black ">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SeamlessScrollingMenu2;
