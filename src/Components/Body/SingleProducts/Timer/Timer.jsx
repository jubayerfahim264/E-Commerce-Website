import "../../../../App.css";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [offerEnded, setOfferEnded] = useState(false);

  // LocalStorage থেকে checkoutTime বের করা
  useEffect(() => {
    let countdownEndTime = localStorage.getItem("countdownEndTime");

    // যদি না থাকে তাহলে এখন থেকে 10 দিন পরে সেট করবো
    if (!countdownEndTime) {
      countdownEndTime = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", countdownEndTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownEndTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setOfferEnded(true);
        localStorage.removeItem("countdownEndTime"); // শেষ হলে clear
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
  return (
    <div className="d-flex gap-3 my-4 flex-wrap">
      {offerEnded ? (
        <h4 className="text-danger fw-bold">🎉 Offer Ended 🎉</h4>
      ) : (
        <>
          <div className="time-box bg-primary text-dark p-3 rounded">
            <h4>{timeLeft.days}</h4>
            <span className="text-white">Days</span>
          </div>
          <div className="time-box bg-success text-black  p-3 rounded">
            <h4>{timeLeft.hours}</h4>
            <span className="text-white">Hours</span>
          </div>
          <div className="time-box bg-warning text-dark p-3 rounded">
            <h4>{timeLeft.minutes}</h4>
            <span className="text-white">Minutes</span>
          </div>
          <div className="time-box bg-danger text-dark p-3 rounded">
            <h4>{timeLeft.seconds}</h4>
            <span className="text-white">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
