import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // State variables
  const [inputMinutes, setInputMinutes] = useState(""); // For user input

  const [timeLeft, setTimeLeft] = useState(0); // Remaining time in seconds

  const [isRunning, setIsRunning] = useState(false); // Timer running state   // Handle input change

  const handleInputChange = (e) => {
    setInputMinutes(e.target.value);
  };

  // Start the timer

  const startTimer = () => {
    if (inputMinutes && !isNaN(inputMinutes) && inputMinutes > 0) {
      setTimeLeft(inputMinutes * 60); // Convert minutes to seconds
      setIsRunning(true);
    }
  };

  // Countdown logic

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      // Stop the timer when it reaches zero

      setIsRunning(false);
    }
    return () => clearInterval(timer); // Cleanup the interval
  }, [isRunning, timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Countdown Timer</h1>
      {!isRunning && timeLeft === 0 && (
        <div>
          <input
            type="number"
            value={inputMinutes}
            onChange={handleInputChange}
            placeholder="Enter minutes"
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "150px",
              textAlign: "center",
            }}
          />
          <button
            onClick={startTimer}
            style={{
              padding: "10px 20px",
              marginLeft: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Start Timer
          </button>
        </div>
      )}
      {isRunning || timeLeft > 0 ? (
        <h2 style={{ fontSize: "48px", margin: "20px 0" }}>
          {formatTime(timeLeft)}
        </h2>
      ) : (
        <h2 style={{ fontSize: "32px", color: "green" }}>Time's up!</h2>
      )}
    </div>
  );
};

export default CountdownTimer;
