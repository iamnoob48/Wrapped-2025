import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";

const IntroScreen = ({ onStart }) => {
  // State to control when the button appears
  const [showButton, setShowButton] = useState(false);

  // The text to animate
  const titleText = "CHAPTER: 2025".split("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each letter (Typewriter speed)
        delayChildren: 0.5, // Wait 0.5s before starting
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center p-5 overflow-hidden relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-md relative z-10 flex flex-col items-center">
        {/* TYPEWRITER TITLE */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-600 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setShowButton(true)} // <-- Trigger button after text finishes
        >
          {titleText.map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char} {/* Handle spaces correctly */}
            </motion.span>
          ))}
        </motion.h1>

        {/* SUBTITLE (Fades in with the button) */}
        {showButton && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400 mb-8 font-light tracking-wide"
          >
            A cinematic journey through our year bring your popcorn.
          </motion.p>
        )}

        {/* BUTTON (Appears only after typing is done) */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={onStart}
            className="px-10 py-4 bg-neon-blue text-midnight font-bold rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.7)] hover:scale-105 transition-all flex items-center gap-3 mx-auto cursor-pointer"
          >
            <FaMusic className="text-xl" /> <span>View Memories</span>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;
