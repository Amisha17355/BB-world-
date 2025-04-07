import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../utils/utils";

// MAIN CARD COMPONENT
export const TextRevealCard = ({
  text,
  revealText,
  title,
  desc,
  className
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function handleMouse(event) {
    const clientX = event.clientX || event.touches[0].clientX;
    const relativeX = clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#d7f5fa] to-[#ffffff] relative overflow-hidden">
      <MemoizedStars />
      <motion.div
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => {
          setIsMouseOver(false);
          setWidthPercentage(0);
        }}
        onMouseMove={handleMouse}
        onTouchStart={() => setIsMouseOver(true)}
        onTouchEnd={() => {
          setIsMouseOver(false);
          setWidthPercentage(0);
        }}
        onTouchMove={handleMouse}
        ref={cardRef}
        className={cn(
          "bg-white backdrop-blur-md bg-opacity-90 shadow-2xl rounded-3xl px-10 py-14 sm:px-14 sm:py-20 max-w-5xl w-full relative transition-all duration-500 hover:scale-[1.015]",
          className
        )}
      >
        <TextRevealCardTitle title={title} />
        <TextRevealCardDescription desc={desc} />

        <div className="min-h-[160px] sm:min-h-[200px] relative flex items-center overflow-hidden">
          {/* Reveal Text */}
          <motion.div
            style={{ width: "100%" }}
            animate={{
              clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
            }}
            transition={{ duration: isMouseOver ? 0.1 : 0.4 }}
            className="absolute bg-white z-20"
          >
            <p className="text-3xl sm:text-5xl font-extrabold text-black leading-snug">
              {revealText}
            </p>
          </motion.div>

          {/* Line */}
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="absolute h-full w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent z-30"
          />

          {/* Base Text */}
          <div className="overflow-hidden z-10">
            <p className="text-3xl sm:text-5xl font-extrabold text-black leading-snug">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// TITLE COMPONENT
export const TextRevealCardTitle = ({ title, className }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={twMerge("text-cyan-600 text-xl sm:text-2xl font-bold mb-2", className)}
    >
      {title}
    </motion.h2>
  );
};

// DESCRIPTION COMPONENT
export const TextRevealCardDescription = ({ desc, className }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={twMerge("text-gray-700 text-base sm:text-lg leading-relaxed mb-6", className)}
    >
      {desc}
    </motion.p>
  );
};

// STARS BACKGROUND ANIMATION
const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0 z-0">
      {[...Array(70)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0.8]
          }}
          transition={{
            duration: random() * 6 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `3px`,
            height: `3px`,
            backgroundColor: "#00bcd4",
            borderRadius: "50%"
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
