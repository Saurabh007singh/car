import { motion } from 'framer-motion';
import HoverButton from './button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function ServiceCard({ _id, images, cardHeading, cardSubHeading }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate={isHovered ? 'hover' : 'initial'}
      className="relative overflow-hidden shadow-lg bg-black lg:h-[360px] h-[380px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Base Image */}
      <img
        src={images[0]}
        alt={cardHeading}
        className="lg:object-cover object-fit h-full w-full transition-opacity duration-300"
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
        <img
          src={images[1]}
          alt={cardHeading}
          className="h-14 w-14"
        />
        <span className="text-white font-opensans w-60 font-extrabold text-[20px]">
          {cardHeading}
        </span>
      </motion.div>

      {/* Overlay that slides in on hover */}
      <motion.div
        variants={{
          initial: { y: '100%', opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 w-full h-full p-6 flex flex-col z-20 bg-black/60"
      >
        <div className="flex flex-col gap-4 p-2">
          <img
            src={images[1]}
            alt={cardHeading}
            className="h-14 w-14"
          />
          <h3 className="text-white text-[18px] font-opensans font-bold">{cardHeading}</h3>
          <p className="text-md font-opensans mt-2 text-white">{cardSubHeading}</p>
          <div onClick={() => router.push(`/home/services/${_id}`)}>
            <HoverButton text="Know More" height="50px" width="150px" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
