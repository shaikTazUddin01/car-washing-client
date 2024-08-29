import { useEffect, useState } from "react";

// Countdown component
const Countdown = ({ date, startTime ,title}:any) => {
  // Function to format time difference
  const getRemainingTime = (date: string, startTime: string) => {
    const bookingStartTime = new Date(`${date}T${startTime}`);
    const currentTime = new Date(); // Calculate current time here

    const timeDiff = bookingStartTime.getTime() - currentTime.getTime(); // Calculate time difference based on current time

    if (timeDiff <= 0) return "Time has passed"; // Handle if the booking time has already passed

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(date, startTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(date, startTime)); // Update remaining time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [date, startTime]);

  return (
    <h1 className="text-xl font-semibold">{title} : {remainingTime}</h1>
  );
};

export default Countdown;
