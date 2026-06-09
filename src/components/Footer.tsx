import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { navItems, socialLinks } from '../data/portfolio';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface FooterProps {
  onNavigate: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative border-t border-[var(--glass-border)] py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(to top, rgba(99, 102, 241, 0.05), transparent)',
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-lg font-bold gradient-text mb-2">Avirat Belekar</p>
            <p className="text-sm text-[var(--text-muted)]">
              Senior Data Scientist building production ML & LLM systems.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Quick Links</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navItems.slice(1, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-sm text-[var(--text-muted)] hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={icon !== 'mail' ? '_blank' : undefined}
                    rel={icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 glass-card flex items-center justify-center hover:shadow-[var(--glow-cyan)] transition-all"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon size={16} className="text-cyan-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--glass-border)] pt-6 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Avirat Belekar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onNavigate('home')}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:shadow-[var(--glow-cyan)] transition-all z-40"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} className="text-cyan-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
