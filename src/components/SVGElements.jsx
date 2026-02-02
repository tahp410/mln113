import React from 'react';
import { motion } from 'framer-motion';

export const VietnamMap = ({ className = "w-48 h-48" }) => {
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified Vietnam Map Outline */}
      <motion.path
        d="M 50 10 Q 55 15 56 25 Q 57 35 55 45 Q 54 50 52 55 Q 51 60 50 65 Q 49 70 48 75 Q 47 80 46 85 Q 45 90 44 95 Q 43 100 42 105 Q 41 110 40 115 Q 39 120 38 125 Q 37 130 36 135 L 40 138 Q 42 135 43 130 Q 45 125 46 120 Q 48 115 49 110 Q 51 105 52 100 Q 53 95 54 90 Q 55 85 56 80 Q 57 75 58 70 Q 59 65 60 60 Q 61 55 62 50 Q 63 45 63 40 Q 63 30 61 20 Q 59 12 50 10 Z"
        fill="currentColor"
        className="text-amber-100"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* North region */}
      <motion.path
        d="M 48 15 Q 52 20 52 28 Q 51 32 50 35"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-amber-700"
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 2 }}
      />
      {/* Central region */}
      <motion.path
        d="M 50 45 Q 51 55 50 65"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-amber-700"
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      {/* South region */}
      <motion.path
        d="M 48 80 Q 47 90 45 100"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-amber-700"
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 2, delay: 1 }}
      />
    </svg>
  );
};

export const Mandala = ({ className = "w-64 h-64" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-amber-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, linear: true }}
      />

      {/* Decorative rings */}
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-amber-500"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, linear: true }}
      />

      <motion.circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-amber-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, linear: true }}
      />

      {/* Inner decorative elements */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 60 * Math.cos(rad);
        const y1 = 100 + 60 * Math.sin(rad);
        const x2 = 100 + 75 * Math.cos(rad);
        const y2 = 100 + 75 * Math.sin(rad);

        return (
          <g key={idx}>
            <motion.line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-amber-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
            />
            <motion.circle
              cx={x2}
              cy={y2}
              r="3"
              fill="currentColor"
              className="text-amber-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
            />
          </g>
        );
      })}

      {/* Center star */}
      <motion.circle
        cx="100"
        cy="100"
        r="8"
        fill="currentColor"
        className="text-amber-600"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Inner triangles pattern */}
      {[0, 120, 240].map((angle, idx) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 40 * Math.cos(rad);
        const y = 100 + 40 * Math.sin(rad);

        return (
          <motion.polygon
            key={`tri-${idx}`}
            points={`${x},${y} ${x - 5},${y + 8} ${x + 5},${y + 8}`}
            fill="currentColor"
            className="text-amber-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, linear: true }}
            style={{ transformOrigin: '100px 100px' }}
          />
        );
      })}
    </svg>
  );
};
