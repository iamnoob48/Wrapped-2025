import { useMemo } from "react";

// Helper function to generate random star positions
// It creates a long string like: "120px 500px #FFF, 900px 100px #FFF, ..."
const generateBoxShadowStars = (n) => {
  let value = "";
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    value += `${x}px ${y}px #FFF${i < n - 1 ? ", " : ""}`;
  }
  return value;
};

const StarsBackground = () => {
  // We generate stars only once when loaded (useMemo for performance)
  // Layer 1: 700 tiny, distant stars
  const smallStars = useMemo(() => generateBoxShadowStars(700), []);
  // Layer 2: 200 medium, brighter stars
  const mediumStars = useMemo(() => generateBoxShadowStars(200), []);
  // Layer 3: 100 bigger, twinkling stars
  const bigStars = useMemo(() => generateBoxShadowStars(100), []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Optional: A very subtle nebula gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-blue-950/20 to-[#050505] opacity-60"></div>

      {/* Layer 1: Small Stars (Static) */}
      <div
        style={{ boxShadow: smallStars }}
        className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent opacity-40 rounded-full"
      ></div>

      {/* Layer 2: Medium Stars (Slightly brighter) */}
      <div
        style={{ boxShadow: mediumStars }}
        className="absolute top-0 left-0 w-[1.5px] h-[1.5px] bg-transparent opacity-70 rounded-full"
      ></div>

      {/* Layer 3: Big Stars (Twinkling) */}
      <div
        style={{ boxShadow: bigStars }}
        // animate-pulse gives the twinkling effect
        className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent animate-pulse rounded-full shadow-neon-blue"
      ></div>
    </div>
  );
};

export default StarsBackground;
