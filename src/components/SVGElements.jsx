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

// Vietnam Flag - Red with Yellow Star
export const VietnamFlag = ({ className = "w-48 h-32" }) => {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Red background */}
      <motion.rect
        width="120"
        height="80"
        fill="#DA251D"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Yellow star */}
      <motion.path
        d="M 60 20 L 65 35 L 80 35 L 68 45 L 73 60 L 60 50 L 47 60 L 52 45 L 40 35 L 55 35 Z"
        fill="#FFCD00"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </svg>
  );
};

// Historical Document Icon
export const DocumentIcon = ({ className = "w-24 h-24" }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document paper */}
      <motion.rect
        x="20"
        y="10"
        width="60"
        height="100"
        rx="2"
        fill="currentColor"
        className="text-yellow-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Lines on document */}
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <motion.line
          key={idx}
          x1="30"
          y1={25 + idx * 12}
          x2="70"
          y2={25 + idx * 12}
          stroke="currentColor"
          className="text-yellow-600"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
        />
      ))}
      {/* Seal/Stamp */}
      <motion.circle
        cx="50"
        cy="95"
        r="8"
        fill="none"
        stroke="currentColor"
        className="text-red-600"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </svg>
  );
};

// Hammer and Sickle Icon (simplified)
export const HammerSickle = ({ className = "w-32 h-32" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hammer handle */}
      <motion.rect
        x="20"
        y="30"
        width="4"
        height="50"
        fill="currentColor"
        className="text-yellow-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {/* Hammer head */}
      <motion.rect
        x="15"
        y="25"
        width="20"
        height="12"
        rx="2"
        fill="currentColor"
        className="text-yellow-300"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      {/* Sickle blade */}
      <motion.path
        d="M 60 20 Q 70 30 75 40 Q 80 50 75 60 Q 70 70 60 75"
        stroke="currentColor"
        className="text-yellow-300"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      {/* Sickle handle */}
      <motion.line
        x1="60"
        y1="75"
        x2="55"
        y2="85"
        stroke="currentColor"
        className="text-yellow-300"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
    </svg>
  );
};

// Book/Knowledge Icon
export const BookIcon = ({ className = "w-32 h-32" }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book cover */}
      <motion.rect
        x="20"
        y="15"
        width="60"
        height="50"
        rx="2"
        fill="currentColor"
        className="text-red-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      {/* Book pages */}
      <motion.rect
        x="25"
        y="20"
        width="50"
        height="40"
        fill="currentColor"
        className="text-yellow-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
      {/* Text lines */}
      {[0, 1, 2, 3].map((idx) => (
        <motion.line
          key={idx}
          x1="30"
          y1={28 + idx * 8}
          x2="70"
          y2={28 + idx * 8}
          stroke="currentColor"
          className="text-red-800"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
        />
      ))}
    </svg>
  );
};