import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale' | 'rotate';
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: ScrollRevealProps) {
  const hidden =
    direction === 'left'
      ? { opacity: 0, x: -40 }
      : direction === 'right'
        ? { opacity: 0, x: 40 }
        : direction === 'scale'
          ? { opacity: 0, scale: 0.9 }
          : direction === 'rotate'
            ? { opacity: 0, y: 30, rotate: 1.5 }
            : { opacity: 0, y: 40 };

  const visible =
    direction === 'scale'
      ? { opacity: 1, scale: 1 }
      : direction === 'rotate'
        ? { opacity: 1, y: 0, rotate: 0 }
        : direction === 'left' || direction === 'right'
          ? { opacity: 1, x: 0 }
          : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};
