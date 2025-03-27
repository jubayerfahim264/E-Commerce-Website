/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [offerEnded, setOfferEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // ✅ Track Audio State
  const audioRef = useRef(null);

  useEffect(() => {
    let countdownEndTime = localStorage.getItem("countdownEndTime");

    if (!countdownEndTime) {
      countdownEndTime = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // 10 days
      localStorage.setItem("countdownEndTime", countdownEndTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownEndTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setOfferEnded(true);
        localStorage.removeItem("countdownEndTime");
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✅ Toggle Play/Pause
  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((err) => console.log("Audio Play Error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const boxVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.2 },
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 },
  };

  return (
    <div className="my-5">
      {/* ✅ Background Music */}
      <audio ref={audioRef} loop>
        <source src="audio/sci-fi-clock.mp3" type="audio/mp3" />
      </audio>

      {/* ✅ Play/Pause Button */}
      <button className="btn bg-transparent mb-4" onClick={handleToggleAudio}>
        {isPlaying ? "🔇 " : "🔊 "}
      </button>

      {offerEnded ? (
        <h2 className="text-danger fw-bold">🎉 Offer Ended 🎉</h2>
      ) : (
        <div className="d-flex justify-content-center flex-wrap ">
          <motion.div
            className="p-4 rounded text-white bg-primary"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <h3>{timeLeft.days}</h3>
            <span>Days</span>
          </motion.div>

          <motion.div
            className="p-4 rounded text-white bg-success"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <h3>{timeLeft.hours}</h3>
            <span>Hours</span>
          </motion.div>

          <motion.div
            className="p-4 rounded text-dark bg-warning"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <h3>{timeLeft.minutes}</h3>
            <span>Minutes</span>
          </motion.div>

          <motion.div
            className="p-4 rounded text-white bg-danger"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <h3>{timeLeft.seconds}</h3>
            <span>Seconds</span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
