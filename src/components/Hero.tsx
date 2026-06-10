import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { heroStats } from '../data/portfolio';
import { ParticlesBackground } from './ParticlesBackground';
import { GlowButton } from './GlowButton';
import myImage from '../assets/cropped-IMG_5897_1.jpg';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onDownloadCV: () => void;
}

const typingTexts = [
  'Senior Data Scientist',
  'ML Engineer',
  'LLM Specialist',
  'Data-Driven Problem Solver',
];

export function Hero({ onScrollTo, onDownloadCV }: HeroProps) {
  const typedText = useTypingEffect(typingTexts, 70, 1800);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const photoY = useTransform(scrollY, [0, 600], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(76, 29, 149, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(14, 116, 144, 0.08) 0%, transparent 50%), #000000',
          }}
        />
        <ParticlesBackground />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 inline-block"
        >
          <div className="relative p-1.5 rounded-full glass-card">
            <div
              className="absolute inset-0 rounded-full photo-pulse"
              style={{
                background: 'var(--gradient-accent)',
                filter: 'blur(10px)',
              }}
            />
            <img
              src={myImage}
              alt="Avirat Belekar"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-center border border-[rgba(0,217,255,0.15)]"
            />
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight mb-3 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="gradient-text">Avirat Belekar</span>
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl font-medium mb-5 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[var(--text-secondary)]">{typedText}</span>
          <span className="text-[var(--accent-cyan)] cursor-blink ml-0.5">|</span>
        </motion.div>

        <motion.p
          className="text-base text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Passionate Data Scientist who develops Machine Learning-driven solutions for customer
          support, anomaly detection, and predictive analytics to enhance operational efficiency
          and improve customer experience.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card px-4 py-2.5 flex flex-col items-center min-w-[100px] card-hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="font-display text-xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          <GlowButton onClick={() => onScrollTo('contact')}>Get In Touch</GlowButton>
          <GlowButton variant="secondary" onClick={onDownloadCV}>
            <Download size={18} />
            Download CV
          </GlowButton>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => onScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
