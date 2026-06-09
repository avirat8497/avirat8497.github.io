import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const hidden =
    direction === 'left'
      ? { opacity: 0, x: -40 }
      : direction === 'right'
        ? { opacity: 0, x: 40 }
        : direction === 'scale'
          ? { opacity: 0, scale: 0.9 }
          : variants.hidden;

  const visible =
    direction === 'scale'
      ? { opacity: 1, scale: 1 }
      : direction === 'left' || direction === 'right'
        ? { opacity: 1, x: 0 }
        : variants.visible;

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
