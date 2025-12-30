import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Cinematic portrait photography"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
      >
        <div className="text-center max-w-5xl">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-caption text-grey-400 mb-6 md:mb-8"
          >
            Cinematic Visual Storytelling
          </motion.p>

          {/* Main Title */}
          <div className="overflow-hidden mb-4 md:mb-6">
            <motion.h1
              initial={{ y: 150, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl text-foreground"
            >
              Sreedhar
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1
              initial={{ y: 150, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl text-foreground italic"
            >
              Chavan
            </motion.h1>
          </div>

          {/* Line Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-grey-500 mx-auto mb-8 md:mb-12 origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-grey-300 max-w-xl mx-auto"
          >
            Capturing emotions, crafting timeless moments through the art of light and shadow
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-3 group cursor-pointer"
        >
          <span className="text-caption text-grey-500 group-hover:text-grey-300 transition-colors duration-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-grey-500 group-hover:text-grey-300 transition-colors duration-500" />
          </motion.div>
        </button>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="text-caption text-grey-600 writing-mode-vertical transform -rotate-180" 
           style={{ writingMode: 'vertical-rl' }}>
          Award-Winning Photography
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="text-caption text-grey-600"
           style={{ writingMode: 'vertical-rl' }}>
          Est. 2015
        </p>
      </motion.div>
    </section>
  );
}
