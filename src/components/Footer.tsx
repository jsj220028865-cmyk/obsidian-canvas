import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

const footerLinks = [
  { name: 'Work', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background-deep border-t border-grey-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Footer */}
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-3xl text-foreground mb-2">
                  Sreedhar Chavan
                </h3>
                <p className="text-caption text-grey-500 mb-6">Photography</p>
                <p className="text-grey-400 max-w-sm leading-relaxed">
                  Capturing the extraordinary in every moment. Based in Mumbai, 
                  available worldwide for exceptional projects.
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h4 className="text-caption text-grey-500 mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-grey-300 hover:text-foreground transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h4 className="text-caption text-grey-500 mb-6">Contact</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a 
                      href="mailto:hello@sreedharchavan.com" 
                      className="text-grey-300 hover:text-foreground transition-colors duration-300"
                    >
                      hello@sreedharchavan.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+919876543210" 
                      className="text-grey-300 hover:text-foreground transition-colors duration-300"
                    >
                      +91 98765 43210
                    </a>
                  </li>
                  <li className="text-grey-400">
                    Mumbai, India
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-grey-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs text-grey-500"
          >
            © {new Date().getFullYear()} Sreedhar Chavan Photography. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-500 hover:text-foreground transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-grey-800 hover:bg-grey-700 flex items-center justify-center transition-colors duration-300 z-40"
        aria-label="Back to top"
      >
        <svg 
          className="w-5 h-5 text-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}
