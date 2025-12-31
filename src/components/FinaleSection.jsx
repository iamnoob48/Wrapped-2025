import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Meteors from "./Meteors";

const FinaleSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 mt-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl bg-black/40 border border-neon-blue/50 p-12 rounded-3xl backdrop-blur-md relative z-10 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-300 drop-shadow-lg">
          To Another Year
        </h2>
        <p className="text-2xl text-gray-300 font-hand mb-12 leading-relaxed">
          I really loved this year with you it wasnt perfect we had our ups and
          downs but we ultimately chose each other ik im troubling you most of
          the time im the reason you cry but moving forward i want to be the
          reason you are happy truly happy. <br />
        </p>
        <p className="text-2xl text-gray-300 font-hand mb-12 leading-relaxed">
          "They say for every sun there is a moon and for every Deepti Saini
          there is a Nandu Vaibhav. Thank you for making 2025 so unforgettable"
        </p>
        <div className="text-red-500 text-7xl inline-block drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse">
          <FaHeart />
        </div>
      </motion.div>
      <Meteors number={30} />
    </div>
  );
};

export default FinaleSection;
