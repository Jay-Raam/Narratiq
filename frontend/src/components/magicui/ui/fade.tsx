"use client";

import { useMemo, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type FadeTextVariants = {
  hidden?: { [key: string]: number; opacity: number };
  show?: { [key: string]: number; opacity: number };
} & Variants;

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: FadeTextVariants;
  text: ReactNode;
};

export function FadeText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  text,
}: FadeTextProps) {
  // Determine the offset based on the direction
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  // Determine the axis of movement based on the direction
  const axis = direction === "up" || direction === "down" ? "y" : "x";

  // Create animation variants
  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps;

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.span className={className}>{text}</motion.span>
    </motion.div>
  );
}
