"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  // Auto-close drawer on route/pathname change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full py-2.5 px-4 sm:px-6 bg-base/85 backdrop-blur-md border-b border-subtle/50 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-2xl font-bold cursor-pointer transition-all duration-300 gradient-text">
            Masum Hossain
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <li
                className={`${
                  isActive(link.href)
                    ? 'bg-primary/20 rounded-full py-2.5 px-5 shadow-primary/40 border-primary text-primary'
                    : ''
                } hover:bg-primary/20 hover:rounded-full hover:py-2.5 hover:px-5 hover:shadow-primary/40 hover:border-primary hover:text-primary px-5 py-2.5 mx-1 font-bold cursor-pointer transition-all duration-300 list-none`}
              >
                {link.label}
              </li>
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-3">
            Hire Me
          </Link>
        </ul>

        {/* Mobile Nav Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-primary hover:text-accent transition-colors cursor-pointer rounded-md focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Right Slide-In Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Slide-In Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full right-0 z-50 w-64 sm:w-72 p-5 bg-base/98 backdrop-blur-md border-l border-b border-subtle shadow-2xl rounded-bl-xl md:hidden"
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="list-none">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full py-2.5 px-4 rounded-md font-medium text-sm transition-all duration-200 ${
                        isActive(link.href)
                          ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                          : 'text-secondary hover:text-primary hover:bg-surface'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-subtle mt-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full rounded-full py-3 text-sm font-semibold text-center inline-flex items-center justify-center shadow-lg shadow-accent/20"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
