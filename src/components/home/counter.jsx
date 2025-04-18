"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

export default function Counter({ target = 1000, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toLocaleString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, count, target, duration]);

  return <motion.span ref={ref} />;
}
