import { motion } from 'framer-motion';
import { Camera, Heart, Building2, Film, Users, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Camera,
    title: 'Portrait Sessions',
    description: 'Intimate, editorial-style portraits that capture your authentic essence with cinematic precision.',
  },
  {
    icon: Heart,
    title: 'Wedding Stories',
    description: 'Documenting your love story with an artistic eye, preserving every emotional moment forever.',
  },
  {
    icon: Building2,
    title: 'Commercial Work',
    description: 'High-end brand photography that elevates your visual identity and captivates your audience.',
  },
  {
    icon: Film,
    title: 'Fashion Editorial',
    description: 'Bold, dramatic fashion photography that pushes creative boundaries and sets trends.',
  },
  {
    icon: Users,
    title: 'Family Legacy',
    description: 'Generational portraits that become treasured heirlooms, connecting past, present, and future.',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    description: 'Full-service creative consulting to bring your vision to life with uncompromising quality.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} group relative`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative p-8 md:p-10 bg-background-elevated/50 border border-grey-800/50 hover:border-grey-700 transition-all duration-700 h-full">
        {/* Icon */}
        <div className="mb-6 relative">
          <Icon className="w-8 h-8 text-grey-400 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />
          <div className="absolute -inset-4 bg-grey-700/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-grey-400 leading-relaxed text-sm md:text-base">
          {service.description}
        </p>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-0 h-px bg-grey-500 group-hover:w-full transition-all duration-700 ease-out-expo" />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.3);

  return (
    <section id="services" className="section-spacer bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-grey-900/50 rounded-full blur-[200px] pointer-events-none" />

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
            What I Offer
          </motion.p>

          <div 
            ref={titleRef}
            className={`overflow-hidden reveal ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-display-lg text-foreground mb-6">
              Services & <span className="italic">Expertise</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-body-lg text-grey-400 max-w-2xl mx-auto"
          >
            Every project receives my complete dedication, ensuring results that exceed expectations and stand the test of time.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
