import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

const techColors: Record<string, string> = {
  Python: 'bg-blue-900/30 text-blue-300 border-blue-800/40',
  TensorFlow: 'bg-orange-900/30 text-orange-300 border-orange-800/40',
  NLP: 'bg-violet-900/30 text-violet-300 border-violet-800/40',
  Flask: 'bg-emerald-900/30 text-emerald-300 border-emerald-800/40',
  'Scikit-learn': 'bg-amber-900/30 text-amber-300 border-amber-800/40',
  'Apache Kafka': 'bg-red-900/30 text-red-300 border-red-800/40',
  Docker: 'bg-cyan-900/30 text-cyan-300 border-cyan-800/40',
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative bg-[var(--bg-tertiary)]">
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Featured Projects" />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                style={
                  activeFilter === cat
                    ? { borderColor: 'rgba(168,85,247,0.4)', color: 'var(--accent-purple)', boxShadow: 'var(--glow-purple)' }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group glass-card overflow-hidden card-hover-lift"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass-card hover:scale-110 transition-transform duration-200"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 rounded-full glass-card hover:scale-110 transition-transform duration-200"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-purple-900/40 text-purple-300 border border-purple-800/40">
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="card-title mb-2 group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-badge border ${techColors[tech] ?? 'bg-slate-800/40 text-slate-300 border-slate-700/40'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
