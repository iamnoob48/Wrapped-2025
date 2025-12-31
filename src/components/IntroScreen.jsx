import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const IntroScreen = ({ onStart }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-midnight text-center p-5 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-600 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
          2025 WRAPPED
        </h1>
        <p className="text-gray-400 mb-8 font-light tracking-wide">
          A cinematic journey through our year.
        </p>

        <button
          onClick={onStart}
          className="px-10 py-4 bg-neon-blue text-midnight font-bold rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.7)] hover:scale-105 transition-all flex items-center gap-3 mx-auto cursor-pointer"
        >
          <FaMusic className="text-xl" /> <span>Start the Memories</span>
        </button>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
