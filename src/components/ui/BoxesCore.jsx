import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/utils";

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(30).fill(1); // Reduced for better performance in section
  const cols = new Array(30).fill(1);

  const colors = [
    "#93c5fd", // light blue
    "#f9a8d4", // pink
    "#86efac", // green
    "#fde047", // yellow
    "#fca5a5", // red
    "#d8b4fe", // purple
    "#a5b4fc", // lavender
    "#c4b5fd", // light violet
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform: `skewX(-24deg) skewY(12deg) scale(0.75)`,
      }}
      className={cn(
        "relative z-0 flex h-full w-full p-4 overflow-hidden pointer-events-none",
        className
      )}
      {...rest}>
      {rows.map((_, i) => (
        <motion.div key={`row-${i}`} className="relative h-8 w-16 border-l border-slate-300">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              key={`col-${j}`}
              className="relative h-8 w-16 border-t border-r border-slate-200"
            >
              {j % 2 === 0 && i % 2 === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
