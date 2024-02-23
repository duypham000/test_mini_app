import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired?: boolean;
}

export const useCountdown = (countDownDate: number): TimeRemaining | null => {
  // useState
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(
    null
  );

  useEffect(() => {
    let newTimeRemaining: TimeRemaining | null = null;

    const countdownTimer = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result
      newTimeRemaining = { days, hours, minutes, seconds, isExpired: false };

      // If the count down is over, write some text
      if (distance < 0) {
        if (countdownTimer) clearInterval(countdownTimer);

        newTimeRemaining = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  return timeRemaining;
};
