"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent py-2"
        }`}
      >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center space-x-2 z-50 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src="/logo.svg" alt="AppVenture Logo" className="w-8 h-8 object-contain" />
            </motion.div>
            <span className="text-gradient font-bold text-2xl tracking-tight hidden sm:block">APPVENTURE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-gray-300 hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                Start Project
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0a]/95 backdrop-blur-3xl border-l border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col justify-center px-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Glows for Depth */}
              <div className="absolute top-1/4 -right-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-1/4 -left-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

              <nav className="flex flex-col space-y-6 relative z-10">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center space-x-4"
                      >
                        <span className={`text-4xl sm:text-5xl font-bold tracking-tighter transition-all duration-300 ${
                          isActive ? "text-white" : "text-gray-500 group-hover:text-gray-200"
                        }`}>
                          {link.name}
                        </span>
                        {isActive && (
                          <motion.div 
                            layoutId="mobileActiveIndicator"
                            className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05 + 0.1 }}
                  className="pt-8 mt-4 border-t border-white/10"
                >
                  <p className="text-gray-400 text-xs mb-5 uppercase tracking-widest font-semibold">Ready to build?</p>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 text-lg"
                  >
                    Start Project
                  </Link>
                  <div className="mt-8 space-y-1 text-sm text-gray-500 tracking-wide font-medium">
                    <p className="hover:text-white transition-colors cursor-pointer">contact@appventure.in</p>
                    <p className="hover:text-white transition-colors cursor-pointer">+91 77950 31638</p>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
