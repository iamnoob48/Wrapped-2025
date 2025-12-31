import { useState, useRef, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import MainTimeline from "./components/MainTimeline";
import StarsBackground from "./components/StarsBackground"; // <-- 1. Import it
import { Meteors } from "./components/Meteors";

const App = () => {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/billo_rani.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startExperience = () => {
    setStarted(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      }
    }, 100);
  };

  return (
    // Ensure the main container is relative so the fixed stars stay inside
    <div className="relative min-h-screen bg-midnight">
      {/* 2. Place the stars here. They have z-0, so they stay in the back. */}
      <StarsBackground />
      <Meteors number={1000} />

      {/* The rest of your app sits on top (they naturally have higher z-index) */}
      {started ? <MainTimeline /> : <IntroScreen onStart={startExperience} />}
    </div>
  );
};

export default App;
