import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

const icons = [Briefcase, GraduationCap, User];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-[var(--bg-tertiary)]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="relative" ref={containerRef}>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 rounded-full bg-white/[0.05] overflow-hidden">
            <motion.div
              className="w-full h-full rounded-full origin-top"
              style={{ background: 'var(--gradient-accent)' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: lineInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {experiences.map((exp, index) => {
            const Icon = icons[index] ?? Briefcase;
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative flex items-start mb-8 group"
                initial={{ opacity: 0, x: fromLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center rounded-full border-4 border-[var(--bg-tertiary)] shadow-lg z-10"
                  style={{ background: 'var(--gradient-accent)' }}
                  initial={{ boxShadow: '0 0 0 rgba(0,217,255,0)' }}
                  whileInView={{ boxShadow: 'var(--glow-cyan)' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  <Icon className="text-white" size={16} />
                </motion.div>

                <div className="ml-20 glass-card p-5 w-full card-hover-lift group-hover:border-[rgba(0,217,255,0.25)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <div>
                      <h3 className="card-title group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-[var(--accent-cyan)] font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-[var(--text-muted)] text-sm">{exp.period}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
