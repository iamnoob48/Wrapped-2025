import { motion, useScroll, useSpring } from "motion/react";
import { memories } from "../data"; // Make sure your data path is correct
import MonthSection from "./MonthSection";
import FinaleSection from "./FinaleSection";
import { FaMusic } from "react-icons/fa";

const MainTimeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen  text-starlight pb-32 overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-midnight via-midnight/80 to-transparent pointer-events-none"
      >
        <span className="font-bold text-neon-blue tracking-[0.2em] text-sm uppercase">
          Wrapped • 2025
        </span>
        <div className="animate-pulse text-neon-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">
          <FaMusic />
        </div>
      </motion.header>

      {/* Content */}
      <div className="w-full max-w-5xl mx-auto px-4 pt-24 md:pt-32">
        {memories.map((item, index) => (
          <MonthSection key={item.id} data={item} index={index} />
        ))}
      </div>

      <FinaleSection />
    </div>
  );
};

export default MainTimeline;
