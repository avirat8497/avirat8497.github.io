import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
    <div className="h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
      <motion.div
        className={`skill-bar-fill ${inView ? 'animating' : ''}`}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Skills & Expertise" />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, index) => {
                const Icon = iconMap[skill.icon] ?? Code2;
                const catConfig = skillCategories.find((c) => c.name === skill.category);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="glass-card p-5 flex flex-col group cursor-default card-hover-lift"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${catConfig?.color ?? 'from-violet-900 to-cyan-900'} opacity-80`}
                      >
                        <Icon
                          size={22}
                          className="text-white group-hover:scale-110 transition-transform duration-200"
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
                      <span className="text-xs font-mono text-[var(--accent-cyan)] w-8">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
