import React from "react";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
// Animation components
export const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const RotateIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -20, opacity: 0 }}
      animate={inView ? { rotate: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, rotate: -5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      whileHover={{
        y: -10,
        rotate: [0, 2, -2, 0],
        transition: { duration: 0.8 },
      }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const GlowingIcon = ({ icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
        transition: { duration: 0.3 },
      }}
      transition={{
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      }}
      className="bg-cyan-100 p-4 rounded-full"
    >
      <Icon className="text-cyan-600 text-2xl" />
    </motion.div>
  );
};

export const TextWave = ({ children, delay = 0 }) => {
  const letters = String(children).split("");

  return (
    <span className="flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.05,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};
