import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function CTASection() {
  const { ref: containerRef, isVisible } = useScrollReveal(0.2);

  return (
    <section 
      id="contact"
      className="section-spacer bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-grey-800/30 rounded-full blur-[200px]" />
      </div>

      <div 
        ref={containerRef}
        className={`container mx-auto px-6 md:px-12 lg:px-24 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-caption text-grey-500 mb-8"
          >
            Let's Create Together
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-display-lg md:text-display-xl text-foreground mb-8"
          >
            Ready to tell <br />
            your <span className="italic">story</span>?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-body-lg text-grey-400 max-w-xl mx-auto mb-12"
          >
            Every great photograph begins with a conversation. Let's discuss your vision 
            and create something extraordinary together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary CTA */}
            <a
              href="mailto:hello@sreedharchavan.com"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-body text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:gap-5"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:rotate-45" />
              <div className="absolute inset-0 bg-grey-200 scale-x-0 origin-left transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
            </a>

            {/* Secondary CTA */}
            <a
              href="tel:+919876543210"
              className="group relative inline-flex items-center gap-3 text-caption text-grey-300 hover:text-foreground transition-colors duration-500"
            >
              <span>Or call directly</span>
              <span className="w-8 h-px bg-grey-500 group-hover:w-12 group-hover:bg-foreground transition-all duration-500" />
            </a>
          </motion.div>

          {/* Email Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a 
              href="mailto:hello@sreedharchavan.com"
              className="font-display text-2xl md:text-3xl text-grey-500 hover:text-foreground transition-colors duration-500 line-animated"
            >
              hello@sreedharchavan.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
