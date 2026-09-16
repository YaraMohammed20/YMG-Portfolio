import { motion } from "motion/react";

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}