import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

const techColors: Record<string, string> = {
  Python: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  TensorFlow: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  NLP: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  Flask: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Scikit-learn': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Apache Kafka': 'bg-red-500/20 text-red-300 border-red-500/30',
  Docker: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Featured Projects" />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'border-violet-500/50 bg-violet-500/10 text-violet-300 shadow-[var(--glow-purple)]'
                    : 'border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-violet-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div className="grid md:grid-cols-2 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card overflow-hidden"
                whileHover={{ boxShadow: 'var(--glow-cyan)' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--bg-primary)]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/30 text-violet-300 border border-violet-500/40">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-badge border ${techColors[tech] ?? 'bg-slate-500/20 text-slate-300 border-slate-500/30'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
