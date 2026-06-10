import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, GraduationCap, MapPin, Briefcase, Brain, Sparkles, Database } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal, StaggerContainer, staggerItem } from './ScrollReveal';
import { useCounter } from '../hooks/useCounter';

const specializations = [
  { icon: Brain, label: 'Machine Learning' },
  { icon: Sparkles, label: 'LLMs & GenAI' },
  { icon: Database, label: 'Data Engineering' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const modelsCount = useCounter(25, 1200, inView);
  const yearsCount = useCounter(5, 1000, inView);

  return (
    <section id="about" className="section-padding bg-[var(--bg-tertiary)]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" />

        <ScrollReveal direction="left">
          <div className="glass-card p-5 sm:p-6 mb-8 border border-[rgba(0,217,255,0.15)]">
            <p className="text-base sm:text-lg leading-normal text-center text-[var(--text-primary)]">
              Most data and AI projects fail not because of model performance, but because they
              never make it to{' '}
              <span className="text-[var(--accent-cyan)] font-semibold">
                reliable, scalable production
              </span>
              . I focus on closing that gap.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <h3 className="subsection-title mb-5">
              Transforming Data into Insights
            </h3>
            <p className="text-base text-[var(--text-secondary)] mb-4 leading-normal">
              With over 4 years of experience in data science and machine learning, I specialize in
              developing intelligent solutions that drive business value. My expertise spans from
              customer support automation to predictive analytics, helping organizations make
              data-driven decisions.
            </p>
            <p className="text-base text-[var(--text-secondary)] mb-6 leading-normal">
              I'm passionate about leveraging cutting-edge ML techniques to solve complex problems
              and optimize operational efficiency. When I'm not building models, you can find me
              exploring new algorithms, contributing to open-source projects, or sharing knowledge
              with the data science community.
            </p>

            <StaggerContainer className="flex flex-wrap gap-4 mb-8" stagger={0.08}>
              {specializations.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="glass-card px-4 py-3 flex items-center gap-2 card-hover-lift"
                >
                  <Icon size={18} className="text-[var(--accent-cyan)]" />
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </StaggerContainer>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${modelsCount}+`, label: 'ML Models Deployed' },
                { value: `${yearsCount}+`, label: 'Years Experience' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-5 text-center card-hover-lift"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="font-display text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="glass-card p-5 sm:p-6 space-y-4">
              {[
                { icon: User, label: 'Data Scientist' },
                { icon: GraduationCap, label: 'Computer Science Graduate' },
                { icon: MapPin, label: 'New York City, NY' },
                { icon: Briefcase, label: 'Available for new opportunities' },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-300"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="p-2.5 rounded-lg bg-white/[0.04] text-[var(--accent-cyan)]"
                    whileHover={{ scale: 1.1, boxShadow: 'var(--glow-cyan)' }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <span className="text-[var(--text-secondary)]">{label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
