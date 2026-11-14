"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { use } from "react";

const IMAGE_RADIUS = 80;       
const CIRCLE_GAP = 1;          
const COLORS = ["var(--accent-primary)", "var(--accent-primary)", "var(--accent-primary)"]; 

export default function MultiFullCircleFocus() {
  const circleRadii = [
    IMAGE_RADIUS + CIRCLE_GAP,       
    IMAGE_RADIUS + CIRCLE_GAP + 3,   
    IMAGE_RADIUS + CIRCLE_GAP + 6,  
  ];

  const rotations = [
    [0, 30, 0, 30],   
    [0, -30, 0, -30],
    [0, 20, 0, 20],  
  ];

  const dashArrays = ["40 32", "24 40", "16 32"];

  const vanishDelay = 1.0; 

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute w-full h-full z-10">
        {circleRadii.map((r, i) => (
          <motion.circle
            key={i}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke={COLORS[i]}
            strokeWidth={i === 2 ? 1.5 : 2}
            strokeDasharray={dashArrays[i]}
            strokeLinecap="round"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{
              rotate: rotations[i],
              opacity: [0, 1, 1, 1, 0],
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        ))}
      </svg>

      {/* IMAGE */}
      <motion.div
        className="relative z-20 rounded-full overflow-hidden"
        style={{ width: IMAGE_RADIUS * 3, height: IMAGE_RADIUS * 3 }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          height={400}
          width={400}
          src="/masum.png"
          alt="Masum Hossain portrait"
          className="w-full h-full object-cover"
        />
      </motion.div>

    </div>
  );
}
