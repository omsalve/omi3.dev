'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroller({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroller;
