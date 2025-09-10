'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, ShoppingBag, Percent, Mail } from 'lucide-react';

const navItems = [
  { href: '#home', icon: <Home size={20} />, label: 'Home' },
  { href: '#work', icon: <Briefcase size={20} />, label: 'Work' },
  { href: '#shop', icon: <ShoppingBag size={20} />, label: 'Shop' },
  { href: '#offers', icon: <Percent size={20} />, label: 'Offers' },
  { href: '#contact', icon: <Mail size={20} />, label: 'Contact' },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-1/2 top-8 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-neutral-warm/10 bg-surface/80 p-2 shadow-lg backdrop-blur-md">
        {navItems.map((item, index) => (
          <NavItem
            key={item.label}
            item={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </motion.nav>
  );
}

function NavItem({ item, isActive, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={itemVariants}
      className={`relative rounded-full p-3 transition-colors hover:text-neutral-lightest ${
        isActive ? 'text-neutral-lightest' : 'text-neutral-medium'
      }`}
      aria-label={item.label}
    >
      {/* The icon, positioned above the animated circle */}
      <span className="relative z-10">{item.icon}</span>

      {/* The moving BORDER indicator */}
      {isActive && (
        <motion.div
          layoutId="active-circle-indicator"
          className="absolute inset-0 z-0 rounded-full border-2 border-neutral-light bg-neutral-light/10"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      {/* Animated Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs text-neutral-lightest shadow-md"
        >
          {item.label}
        </motion.div>
      )}
    </motion.a>
  );
}

