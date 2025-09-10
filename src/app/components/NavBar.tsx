'use client';

import { Home, Briefcase, ShoppingBag, Percent, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: <Home size={20} />, label: 'Home' },
  { icon: <Briefcase size={20} />, label: 'Work' },
  { icon: <ShoppingBag size={20} />, label: 'Shop' },
  { icon: <Percent size={20} />, label: 'Discounts' },
  { icon: <Mail size={20} />, label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed left-1/2 top-8 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full bg-surface/80 p-2 shadow-lg backdrop-blur-md">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            aria-label={item.label}
            className="rounded-full p-3 text-neutral-medium transition-colors hover:bg-background hover:text-neutral-lightest"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
