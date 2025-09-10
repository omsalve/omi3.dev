import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
// Corrected the import path to use the standard `@` alias
import SmoothScroller from './components/SmoothScroller';
// import Navbar from '@/components/Navbar'; // Placeholder for Navbar component
// import Footer from '@/components/Footer'; // Placeholder for Footer component

// --- METADATA ---
// Updated with a placeholder name. Remember to fill in your own details.
export const metadata: Metadata = {
  title: 'Om Salve | Creative Developer & Designer',
  description: 'A portfolio showcasing projects in Next.js, 3D, and modern web technologies.',
};

// --- FONTS ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Loading the local display font, Base Neue
// The font file name 'BaseNeue-SuperExpExtBdObliq.ttf' suggests it is an Extra Bold Italic font.
// The configuration below has been adjusted to reflect that.
const baseNeue = localFont({
  src: [
    {
      // CORRECTED: The path must be relative to this file (layout.tsx).
      // Since layout.tsx is in 'src/app', we go up two levels to the root, then into 'public/fonts'.
      path: '../../public/fonts/BaseNeue-SuperExpExtBdObliq.ttf',
      // 'ExtBd' (Extra Bold) usually corresponds to a weight of 800.
      weight: '800',
      // 'Obliq' (Oblique) corresponds to an italic style.
      style: 'italic',
    },
  ],
  variable: '--font-base-neue',
  display: 'swap',
});

// --- ROOT LAYOUT COMPONENT ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${baseNeue.variable}`} suppressHydrationWarning>
      <body className="bg-background text-neutral-light font-sans antialiased">
        {/* The SmoothScroller wraps your page content to enable smooth scrolling */}
        <SmoothScroller>
          {/* <Navbar /> // A Navbar component would typically go here, outside the main content */}
          <main>{children}</main>
          {/* <Footer /> // A Footer component would typically go here */}
        </SmoothScroller>
      </body>
    </html>
  );
}

