import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sreedhar doesn't just take photographs — he captures souls. Working with him was transformative, and the results are nothing short of extraordinary.",
    author: "Priya Sharma",
    role: "Creative Director, Vogue India",
  },
  {
    quote: "The way he sees light, emotion, and story is unparalleled. Every frame he creates is a masterpiece that we'll treasure for generations.",
    author: "Arjun & Meera",
    role: "Wedding Clients",
  },
  {
    quote: "His artistic vision elevated our brand to new heights. The campaign images he delivered exceeded every expectation we had.",
    author: "Rohan Mehta",
    role: "CEO, Luxe Brands",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} relative`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="relative p-8 md:p-12 bg-gradient-to-br from-grey-900/50 to-transparent border border-grey-800/30">
        {/* Quote Icon */}
        <Quote className="w-10 h-10 text-grey-700 mb-8" strokeWidth={1} />

        {/* Quote Text */}
        <blockquote className="font-display text-xl md:text-2xl text-grey-200 leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Divider */}
        <div className="w-12 h-px bg-grey-700 mb-6" />

        {/* Author */}
        <div>
          <p className="text-foreground font-medium">{testimonial.author}</p>
          <p className="text-caption text-grey-500 mt-1">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.3);

  return (
    <section className="section-spacer bg-background-deep relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-grey-900/30 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-caption text-grey-500 mb-6"
          >
            Client Experiences
          </motion.p>

          <div 
            ref={titleRef}
            className={`overflow-hidden reveal ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-display-lg text-foreground">
              Words of <span className="italic">Trust</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
