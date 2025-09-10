'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Animation variants for Framer Motion.
// This creates a staggered fade-in effect.
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      {/* Top Pills/Tags */}
      <div className="flex gap-2">
        <motion.div
          custom={0}
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
          className="rounded-full border border-neutral-warm/20 bg-surface px-3 py-1 text-xs text-neutral-medium"
        >
          Web Design
        </motion.div>
        <motion.div
          custom={1}
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
          className="rounded-full border border-neutral-warm/20 bg-surface px-3 py-1 text-xs text-neutral-medium"
        >
          UX & UI design
        </motion.div>
        <motion.div
          custom={2}
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
          className="hidden rounded-full border border-neutral-warm/20 bg-surface px-3 py-1 text-xs text-neutral-medium sm:block"
        >
          Next.js
        </motion.div>
      </div>

      {/* Main Heading */}
      <motion.h1
        custom={3}
        initial="initial"
        animate="animate"
        variants={fadeInAnimation}
        className="mt-8 font-display text-6xl font-normal tracking-tight text-neutral-lightest md:text-8xl"
      >
        I'm Om,
        <br />
        <span className="text-neutral-light">Digital creator.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        custom={4}
        initial="initial"
        animate="animate"
        variants={fadeInAnimation}
        className="mt-6 max-w-xl text-lg text-neutral-medium"
      >
        Mumbai-based digital storyteller for worldwide brands.
      </motion.p>

    
    </section>
  );
}

