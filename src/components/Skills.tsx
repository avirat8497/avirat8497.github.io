import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Brain,
  Sparkles,
  MessageSquare,
  Wand2,
  Layers,
  Database,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { skills, skillCategories } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  sparkles: Sparkles,
  message: MessageSquare,
  wand: Wand2,
  layers: Layers,
  database: Database,
  rocket: Rocket,
  pipeline: Database,
};

function SkillBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Skills & Expertise" />

        {/* Category filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const catConfig = skillCategories.find((c) => c.name === cat);
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[var(--glow-cyan)]'
                      : 'border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-cyan-500/30 hover:text-[var(--text-primary)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Floating category badges */}
        <div className="hidden lg:block absolute -left-4 top-1/3 space-y-3 pointer-events-none" aria-hidden="true">
          {skillCategories.slice(0, 3).map((cat, i) => (
            <motion.div
              key={cat.name}
              className={`glass-card px-3 py-1.5 text-xs font-medium opacity-40 shadow-lg ${cat.glow}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              {cat.name}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            const catConfig = skillCategories.find((c) => c.name === skill.category);

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`glass-card p-6 flex flex-col group cursor-default ${
                  hoveredSkill === index ? 'shadow-[var(--glow-cyan)] border-cyan-500/30' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${catConfig?.color ?? 'from-violet-500 to-cyan-500'} bg-opacity-20`}
                  >
                    <Icon
                      size={22}
                      className={`${hoveredSkill === index ? 'animate-bounce' : ''} text-white transition-transform`}
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm">{skill.name}</h3>
                    <span className="text-xs text-[var(--text-muted)]">{skill.category}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-xs mb-4 leading-relaxed flex-grow">
                  {skill.description}
                </p>

                <div className="flex items-center gap-3">
                  <SkillBar level={skill.level} inView={inView} />
                  <span className="text-xs font-mono text-cyan-400 w-8">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
