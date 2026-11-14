"use client";
import { motion } from "framer-motion";
import { rightColumn, leftColumn } from "./variants/columns";
import fadeIn from "./variants/fadeIn";
import { upDownPalse } from "./variants/upDownPalse";
import { leftRightPalse } from "./variants/leftRightPalse";
import { infinityCarousel } from "./variants/infinityCarousel";
import { bottomVariant } from "./variants/bottom";
import { rotateClockwise, rotateAntiClockwise } from "./variants/roundMotion";
import { projectPreviewVariant } from "./variants/projectPreview";

const animations = {
  left: leftColumn,
  right: rightColumn,
  fadeIn: fadeIn,
  upDownPalse,
  leftRightPalse,
  infinityCarousel,
  bottom: bottomVariant,
  projectPreview: projectPreviewVariant,
  rotateClockwise,
  rotateAntiClockwise,
};

export const MotionWrapper = ({
  type = "fadeIn",
  delay = 0,
  children,
  className = "",
  once = true,
}) => {
  const variant = animations[type] || fadeIn;
  const variantTransition = variant?.visible?.transition || {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
      custom={delay}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        ...variantTransition,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
