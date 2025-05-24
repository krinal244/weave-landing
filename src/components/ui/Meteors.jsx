// Meteors.jsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden"
    >
      {meteors.map((_, idx) => {
        const left = Math.random() * 100; // random horizontal position
        const delay = Math.random() * 5; // 0–5s
        const duration = Math.random() * 3 + 2; // 2–5s
        const top = Math.random() * -100; // start slightly above

        return (
          <span
            key={`meteor-${idx}`}
            className="absolute h-[2px] w-[80px] rotate-[45deg] bg-gradient-to-r from-white via-white/50 to-transparent opacity-70 blur-sm"
            style={{
              top: `${top}px`,
              left: `${left}%`,
              animation: `meteor-fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes meteor-fall {
            0% {
              transform: translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: translate(100px, 600px);
              opacity: 0;
            }
          }
        `}
      </style>
    </motion.div>
  );
};
