import { motion } from "framer-motion";

const MonthSection = ({ data, index }) => {
  const isEven = index % 2 === 0;

  // Helper to check if this month has the special 3-image layout
  const isCluster = data.images && data.images.length >= 3;

  return (
    <div
      className={`flex flex-col min-h-[90vh] mb-32 md:mb-0 relative ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* ==========================
          SIDE A: Sticky Title + Text
      ========================== */}
      <div
        className={`md:w-1/2 flex flex-col justify-center h-fit md:h-[100vh] z-10 md:sticky md:top-0 px-4 md:px-10 ${
          isEven ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <h2
            className={`text-8xl md:text-[10rem] font-bold text-gray-800 opacity-20 absolute -top-10 select-none ${
              isEven ? "-left-10" : "-right-10"
            }`}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </h2>
          <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 relative z-10">
            {data.month}
          </h2>
          <div
            className={`w-20 h-1 bg-neon-blue mt-4 shadow-[0_0_10px_#00f3ff] ${
              isEven ? "mr-auto" : "ml-auto"
            }`}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm relative max-w-sm ${
            isEven ? "self-start" : "self-end"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed font-hand">
            "{data.text}"
          </p>
        </motion.div>
      </div>

      {/* ==========================
          SIDE B: The Images (Dynamic)
      ========================== */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-4 md:p-10 relative">
        {/* CONDITIONAL RENDERING: Cluster vs Single */}
        {isCluster ? (
          // --- OPTION 1: The 3-Image Cluster (Feb, Mar, Apr, May) ---
          <div className="relative w-full h-[500px] flex items-center justify-center group perspective-1000">
            {data.images.map((imgSrc, i) => {
              // Logic for positioning (Left, Center, Right)
              let rotate = "rotate-0";
              let translateX = "translate-x-0";
              let zIndex = "z-10";

              if (i === 0) {
                rotate = "-rotate-12";
                translateX = "-translate-x-12";
                zIndex = "z-0";
              }
              if (i === 1) {
                rotate = "rotate-0";
                translateX = "translate-x-0";
                zIndex = "z-20";
              } // Center is on top
              if (i === 2) {
                rotate = "rotate-12";
                translateX = "translate-x-12";
                zIndex = "z-0";
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`
                    absolute w-64 h-80 rounded-xl border-4 border-gray-100 shadow-2xl overflow-hidden transition-all duration-500 ease-out
                    ${rotate} ${translateX} ${zIndex}
                    
                    /* THE MAGIC: Blur siblings on hover, Pop self on hover */
                    group-hover:blur-sm         /* Blur everyone when group is hovered */
                    hover:!blur-none            /* Force unblur SELF */
                    hover:scale-130             /* Pop out SELF */
                    hover:z-50                  /* Bring SELF to front */
                    hover:rotate-0              /* Straighten SELF */
                  `}
                >
                  <img
                    src={imgSrc}
                    alt="memory"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        ) : (
          // --- OPTION 2: Standard Single Image ---
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: isEven ? 2 : -2 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative group w-full max-w-md"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/90 shadow-2xl p-2">
              {data.img ? (
                <img
                  src={data.img}
                  alt={data.month}
                  className="w-full object-cover aspect-[4/5] rounded"
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-gray-800 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MonthSection;
