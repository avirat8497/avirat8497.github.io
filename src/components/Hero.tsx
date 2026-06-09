import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { heroStats } from '../data/portfolio';
import { ParticlesBackground } from './ParticlesBackground';
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), var(--bg-primary)',
        }}
      />
      <ParticlesBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile photo with glassmorphic card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block"
        >
          <div className="relative p-1.5 rounded-full glass-card">
            <div
              className="absolute inset-0 rounded-full opacity-60 animate-pulse-glow"
              style={{
                background: 'var(--gradient-primary)',
                filter: 'blur(8px)',
              }}
            />
            <img
              src={myImage}
              alt="Avirat Belekar"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover object-center border-2 border-white/10"
            />
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="gradient-text">Avirat Belekar</span>
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 h-10 sm:h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[var(--text-secondary)]">{typedText}</span>
          <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Passionate Data Scientist who develops Machine Learning-driven solutions for customer
          support, anomaly detection, and predictive analytics to enhance operational efficiency
          and improve customer experience.
        </motion.p>

        {/* Stat badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card px-5 py-3 flex flex-col items-center min-w-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: 'var(--glow-cyan)' }}
            >
              <span className="font-display text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button
            onClick={() => onScrollTo('contact')}
            className="glow-btn px-8 py-3.5 text-white text-sm sm:text-base"
          >
            Get In Touch
          </button>
          <button
            onClick={onDownloadCV}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-[var(--glass-border)] glass-card hover:border-cyan-500/50 hover:shadow-[var(--glow-cyan)] transition-all duration-300 hover:scale-[1.03]"
          >
            <Download size={18} />
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => onScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
