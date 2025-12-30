import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutPortrait from '@/assets/about-portrait.jpg';

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.3);
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal(0.2);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative section-spacer bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative reveal-scale ${imageVisible ? 'visible' : ''}`}
          >
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={aboutPortrait}
                alt="Sreedhar Chavan - Professional Photographer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-grey-700 -z-10" />
            </motion.div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute -right-6 md:right-0 bottom-12 bg-background-elevated/95 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <span className="text-display-md text-foreground block">10+</span>
                  <span className="text-caption text-grey-400">Years</span>
                </div>
                <div className="text-center">
                  <span className="text-display-md text-foreground block">500+</span>
                  <span className="text-caption text-grey-400">Projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            {/* Section Label */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-caption text-grey-500 mb-6"
            >
              About Me
            </motion.p>

            {/* Title */}
            <div 
              ref={titleRef}
              className={`overflow-hidden mb-8 reveal ${titleVisible ? 'visible' : ''}`}
            >
              <h2 className="text-display-lg text-foreground">
                The Art of <br />
                <span className="italic">Visual Poetry</span>
              </h2>
            </div>

            {/* Description */}
            <div 
              ref={textRef}
              className={`space-y-6 reveal ${textVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="text-body-lg text-grey-300 leading-relaxed">
                With over a decade behind the lens, I've dedicated my life to capturing the 
                extraordinary within the ordinary. My work transcends traditional photography — 
                it's about freezing emotions, telling untold stories, and creating visual 
                legacies that stand the test of time.
              </p>

              <p className="text-body-lg text-grey-400 leading-relaxed">
                Every frame I capture is a deliberate dance between light and shadow, 
                a meditation on the beauty that exists in fleeting moments. From intimate 
                portraits to grand celebrations, I bring a cinematic vision that transforms 
                photographs into timeless art.
              </p>

              {/* Line Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="w-16 h-px bg-grey-600 origin-left"
              />

              {/* Signature */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-display text-2xl text-foreground italic pt-4"
              >
                Sreedhar Chavan
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
