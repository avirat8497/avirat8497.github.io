import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

const icons = [Briefcase, GraduationCap, User];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'var(--gradient-accent)' }}
          />

          {experiences.map((exp, index) => {
            const Icon = icons[index] ?? Briefcase;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="relative flex items-start mb-12 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center rounded-full border-4 border-[var(--bg-primary)] shadow-lg z-10 bg-gradient-to-br from-violet-500 to-cyan-500 group-hover:shadow-[var(--glow-cyan)] transition-shadow duration-300">
                    <Icon className="text-white" size={16} />
                  </div>

                  <div className="ml-20 glass-card p-6 w-full group-hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-[var(--glow-purple)]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1">
                      <div>
                        <h3 className="font-display text-lg font-semibold">{exp.position}</h3>
                        <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[var(--text-muted)] text-sm">{exp.period}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
