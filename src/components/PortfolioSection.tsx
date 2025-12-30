import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, src: portfolio1, title: 'Ethereal Beauty', category: 'Portrait', aspect: 'portrait' },
  { id: 2, src: portfolio2, title: 'Sacred Moments', category: 'Wedding', aspect: 'landscape' },
  { id: 3, src: portfolio3, title: 'Mountain Light', category: 'Landscape', aspect: 'landscape' },
  { id: 4, src: portfolio4, title: 'Haute Couture', category: 'Fashion', aspect: 'portrait' },
  { id: 5, src: portfolio5, title: 'Eternal Bond', category: 'Couples', aspect: 'landscape' },
  { id: 6, src: portfolio6, title: 'Executive Vision', category: 'Corporate', aspect: 'portrait' },
];

function PortfolioCard({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'visible' : ''} group cursor-pointer`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${
        item.aspect === 'portrait' ? 'aspect-[3/4]' : 
        item.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'
      }`}>
        {/* Image */}
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-700" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <p className="text-caption text-grey-400 mb-2">{item.category}</p>
          <h3 className="font-display text-2xl md:text-3xl text-foreground">{item.title}</h3>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 right-4 w-8 h-px bg-foreground/50 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
          <div className="absolute top-4 right-4 w-px h-8 bg-foreground/50 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100" />
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.3);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="section-spacer bg-background-deep">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-caption text-grey-500 mb-6"
          >
            Selected Work
          </motion.p>

          <div 
            ref={titleRef}
            className={`overflow-hidden reveal ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-display-lg text-foreground">
              Visual <span className="italic">Stories</span>
            </h2>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <PortfolioCard
                item={item}
                index={index}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <button className="group relative inline-flex items-center gap-4 text-caption text-grey-300 hover:text-foreground transition-colors duration-500">
            <span>View All Projects</span>
            <span className="w-12 h-px bg-grey-500 group-hover:w-20 group-hover:bg-foreground transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center text-grey-400 hover:text-foreground transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-grey-400 hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center text-grey-400 hover:text-foreground transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={portfolioItems[currentIndex].src}
                alt={portfolioItems[currentIndex].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-6">
                <p className="text-caption text-grey-500 mb-2">
                  {portfolioItems[currentIndex].category}
                </p>
                <h3 className="font-display text-2xl text-foreground">
                  {portfolioItems[currentIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-caption text-grey-500">
              {currentIndex + 1} / {portfolioItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
