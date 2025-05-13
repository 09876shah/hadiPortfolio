import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CircularProgress = () => {
  const [progress, setProgress] = useState(0);
  const radius = 45; // Circle radius
  const circumference = 2 * Math.PI * radius; // Circle perimeter

  useEffect(() => {
    // Animate progress from 0 to 70%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 70) {
          clearInterval(interval);
          return 70;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="transparent"
          strokeWidth="10"
          fill="transparent"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E84A4A"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * progress) / 100}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (circumference * progress) / 100,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          strokeLinecap="round"
        />
        {/* Progress Text in Center */}
        <text
          x="50"
          y="55"
          fontSize="18"
          fontWeight="bold"
          fill="#E84A4A"
          textAnchor="middle"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
