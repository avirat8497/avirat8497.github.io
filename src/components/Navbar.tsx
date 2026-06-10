import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ activeSection, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[rgba(0,217,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button
            onClick={() => handleNav('home')}
            className="font-display text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AB
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg glass-card hover:scale-110 transition-transform duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={18} className="text-[var(--accent-cyan)]" />
              ) : (
                <Moon size={18} className="text-[var(--accent-purple)]" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button onClick={onToggleTheme} className="p-2" aria-label="Toggle theme">
              {isDark ? (
                <Sun size={20} className="text-[var(--accent-cyan)]" />
              ) : (
                <Moon size={20} className="text-[var(--accent-purple)]" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden border-t border-[rgba(0,217,255,0.1)] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-[var(--accent-cyan)] bg-[rgba(0,217,255,0.08)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
