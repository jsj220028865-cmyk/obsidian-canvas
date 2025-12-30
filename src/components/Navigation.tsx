import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
                Sreedhar Chavan
              </span>
              <span className="block text-caption text-grey-400 text-[10px] tracking-[0.4em]">
                Photography
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/50 transition-all duration-500 group-hover:w-full" />
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="relative text-caption text-grey-300 hover:text-foreground transition-colors duration-500 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-foreground transition-all duration-500 ease-out-expo group-hover:w-full" />
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center h-full"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-display text-4xl font-light text-foreground hover:text-grey-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
