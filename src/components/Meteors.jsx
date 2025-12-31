import { cn } from "@/lib/utils";
import { motion } from "motion/react"; // Ensure you have framer-motion installed
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Ensure the container allows absolute positioning relative to the viewport
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {meteors.map((el, idx) => {
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              // Changed rotation to 215deg which is the standard "falling diagonal" look
              "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              // 1. Vertical Start: Start slightly above the top of the screen
              top: Math.floor(Math.random() * -100) + "px",

              // 2. Horizontal Spread: Randomly anywhere from 0% to 100% of the screen width
              left: Math.floor(Math.random() * 100) + "vw",

              // 3. Timing: Random delays so they don't all fall at once
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};

export default Meteors;
