'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Animation variants for the main text content
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

// Data for the scrolling pills
const skills = [
  'Web Developer',
  'UX & UI Design',
  'Unreal Dev',
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center">
      {/* Scrolling Marquee Container */}
      <div
        className="relative w-full max-w-lg overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <motion.div
          className="flex gap-4"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {/* Render the skills twice for a seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-full border border-neutral-warm/20 bg-surface px-4 py-1 text-sm text-neutral-medium"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Heading */}
      <motion.h1
        custom={0} // Adjusted delay index
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
        custom={1} // Adjusted delay index
        initial="initial"
        animate="animate"
        variants={fadeInAnimation}
        className="mt-6 max-w-xl text-lg text-neutral-medium"
      >
        Mumbai-based digital storyteller for worldwide brands.
      </motion.p>

      {/* Bouncing Scroll Indicator */}
      <motion.a
        href="#projects"
        aria-label="Scroll to next section"
        custom={3} // Stagger its appearance after the button
        initial="initial"
        animate="animate"
        variants={fadeInAnimation}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-neutral-medium"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

