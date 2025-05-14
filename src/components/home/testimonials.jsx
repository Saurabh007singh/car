"use client"
import { useState } from "react";
import { FaQuoteRight, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "App Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Ripcar's attention to detail is unparalleled. I've never seen my car shine like this before!" - Sarah M. 'The team at Ripcar goes above and beyond to ensure my car is always running smoothly.`,
  },
  {
    name: "Jenny Wilson",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `The level of service and professionalism is top notch. I feel safe and confident every time I drive now. Thank you, Ripcar!`,
  },
  {
    name: "Robert Fox",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: `Excellent service and friendly team. The experience exceeded all expectations. Highly recommended!`,
  },
];

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" flex flex-col md:flex-row justify-between items-start md:items-center  bg-white gap-10 w-full p-6 mx-auto">
      {/* Left Section */}
      <div className="md:w-1/3 space-y-4 group">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-500">
          Indulge your vehicle with our comprehensive suite of services, meticulously crafted,
        </p>
        <div className="flex gap-4 pt-4 ">
          <button onClick={handlePrev} className="p-3 w-20 bg-red-600 text-white hover:bg-red-700">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="p-3 w-20  bg-black  text-white hover:bg-gray-800">
            <FaArrowRight className="ml-auto" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bg-white border border-gray-200 shadow-lg p-6 rounded-md md:w-2/3 min-h-[300px]">
        <FaQuoteRight className="text-5xl text-red-600 absolute top-0 right-0 transform translate-x-6 -translate-y-6" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-black">{testimonials[current].name}</h3>
                <p className="text-red-600 text-sm">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-black font-semibold text-lg">{testimonials[current].text}</p>

            {/* Stars */}
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-red-600 mr-1" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSlider;
