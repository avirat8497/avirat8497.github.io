import { motion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <motion.h2
        className="section-heading gradient-text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-20 h-0.5 mx-auto mt-3 rounded-full"
        style={{ background: 'var(--gradient-accent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
      />
      {subtitle && (
        <motion.p
          className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-[var(--text-secondary)] leading-normal"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
