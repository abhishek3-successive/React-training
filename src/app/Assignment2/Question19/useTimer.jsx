'use client'
import { useState, useEffect, useRef } from 'react';

function useTimer(initialTime) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer
  const start = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Pause the timer
  const pause = () => {
    setIsRunning(false);
  };

  // Reset the timer to initial time
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  // Effect to handle the countdown
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup function
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset
  };
}

export default useTimer;