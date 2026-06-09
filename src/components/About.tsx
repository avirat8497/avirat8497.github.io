import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, GraduationCap, MapPin, Briefcase, Brain, Sparkles, Database } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { useCounter } from '../hooks/useCounter';

const specializations = [
  { icon: Brain, label: 'Machine Learning', color: 'text-violet-400' },
  { icon: Sparkles, label: 'LLMs & GenAI', color: 'text-fuchsia-400' },
  { icon: Database, label: 'Data Engineering', color: 'text-cyan-400' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const modelsCount = useCounter(25, 1200, inView);
  const yearsCount = useCounter(5, 1000, inView);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" />

        <ScrollReveal>
          <div className="glass-card p-8 mb-12 border border-cyan-500/20">
            <p className="text-lg sm:text-xl leading-relaxed text-center text-[var(--text-primary)]">
              Most data and AI projects fail not because of model performance, but because they
              never make it to{' '}
              <span className="text-cyan-400 font-semibold">reliable, scalable production</span>.
              I focus on closing that gap.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Transforming Data into Insights
            </h3>
            <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">
              With over 4 years of experience in data science and machine learning, I specialize in
              developing intelligent solutions that drive business value. My expertise spans from
              customer support automation to predictive analytics, helping organizations make
              data-driven decisions.
            </p>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              I'm passionate about leveraging cutting-edge ML techniques to solve complex problems
              and optimize operational efficiency. When I'm not building models, you can find me
              exploring new algorithms, contributing to open-source projects, or sharing knowledge
              with the data science community.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {specializations.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  className="glass-card px-4 py-3 flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: 'var(--glow-cyan)' }}
                >
                  <Icon size={18} className={color} />
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="font-display text-4xl font-bold gradient-text mb-1">
                  {modelsCount}+
                </div>
                <div className="text-sm text-[var(--text-muted)]">ML Models Deployed</div>
              </motion.div>
              <motion.div
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="font-display text-4xl font-bold gradient-text mb-1">
                  {yearsCount}+
                </div>
                <div className="text-sm text-[var(--text-muted)]">Years Experience</div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="glass-card p-8 space-y-5">
              {[
                { icon: User, label: 'Data Scientist', color: 'text-cyan-400' },
                { icon: GraduationCap, label: 'Computer Science Graduate', color: 'text-violet-400' },
                { icon: MapPin, label: 'New York City, NY', color: 'text-fuchsia-400' },
                { icon: Briefcase, label: 'Available for new opportunities', color: 'text-emerald-400' },
              ].map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`p-2.5 rounded-lg bg-white/5 ${color}`}>
                    <Icon size={20} />
                  </div>
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
