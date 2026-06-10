import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Workflow,
  Rocket,
  Brain,
  Shield,
  BarChart3,
  Cloud,
  Target,
  Gauge,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { useCounter } from '../hooks/useCounter';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const tabs = [
  { id: 'patterns', label: "Patterns I've Learned" },
  { id: 'how', label: 'How I Work' },
  { id: 'bring', label: 'What I Bring' },
] as const;

type TabId = (typeof tabs)[number]['id'];

const patterns = [
  'The biggest wins come from solving unglamorous, high-ROI problems',
  'LLM success depends more on data pipelines, evaluation frameworks, and guardrails than the model itself',
  'Automation breaks without reliable monitoring, versioning, and ground truth',
  'Organizations need systems that reduce noise, not dashboards that create more questions',
];

const principles = [
  { icon: Gauge, label: 'Clear metrics', desc: 'Decisions over dashboards' },
  { icon: Layers, label: 'Reliable systems', desc: 'Production-first mindset' },
  { icon: TrendingUp, label: 'Measurable impact', desc: 'ROI-driven delivery' },
];

const capabilities = [
  { icon: Workflow, label: 'ML/LLM pipelines', detail: 'Ingestion → deployment' },
  { icon: Brain, label: 'Classification systems', detail: 'Supervised + LLM hybrids' },
  { icon: BarChart3, label: 'Evaluation frameworks', detail: '20+ prompt benchmarks' },
  { icon: Cloud, label: 'Data infrastructure', detail: 'GCP, BigQuery, CI/CD' },
];

const ownership = {
  icon: Target,
  label: '0→1 Ownership',
  detail: 'Full project delivery',
};

function PatternsTab() {
  return (
    <div>
      <p className="text-sm text-[var(--text-secondary)] leading-normal mb-6">
        Lessons from financial services, enterprise operations, and AI/ML infrastructure:
      </p>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {patterns.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-[var(--glass-border)] text-[15px] text-[var(--text-secondary)] leading-normal card-hover-subtle transition-all duration-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3, ease: EASE }}
          >
            <span className="text-[var(--accent-cyan)] font-mono font-bold shrink-0 text-sm">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center font-display font-bold text-lg text-[var(--accent-cyan)] text-glow-highlight">
        I build those systems.
      </p>
    </div>
  );
}

function HowIWorkTab() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900 to-cyan-900">
          <Shield size={20} className="text-[var(--accent-cyan)]" />
        </div>
        <h3 className="subsection-title">How I Work</h3>
      </div>
      <p className="text-base text-[var(--text-secondary)] leading-normal mb-6 max-w-2xl">
        I bridge <span className="text-[var(--accent-cyan)] font-medium">engineering depth</span> with{' '}
        <span className="text-[var(--accent-cyan)] font-medium">business pragmatism</span> — translating
        messy operational problems into{' '}
        <span className="text-[var(--accent-cyan)] font-medium">clear datasets, metrics, and solutions</span>{' '}
        teams can act on.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {principles.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            className="p-4 rounded-xl bg-white/[0.02] border border-[var(--glass-border)] card-hover-subtle transition-all duration-300 group"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3, ease: EASE }}
          >
            <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Icon size={28} className="text-[var(--accent-cyan)] mb-3" />
            </motion.div>
            <p className="text-base font-semibold leading-snug">{label}</p>
            <p className="text-sm text-[var(--text-muted)] mt-1 leading-normal">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WhatIBringTab() {
  const callsCount = useCounter(10, 1200, true);
  const casesCount = useCounter(400, 1200, true);
  const costCount = useCounter(15, 1200, true);

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900 to-violet-900">
          <Rocket size={20} className="text-[var(--accent-purple)]" />
        </div>
        <h3 className="subsection-title">What I Bring</h3>
      </div>
      <p className="text-base text-[var(--text-secondary)] leading-normal mb-6 max-w-2xl">
        Production-grade{' '}
        <span className="text-[var(--accent-purple)] font-medium">ML and LLM pipelines</span> supporting
        thousands of users and millions of data points.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { value: `${callsCount}K+`, label: 'Calls/month' },
          { value: `${casesCount}+`, label: 'Cases resolved' },
          { value: `${costCount}%`, label: 'Cost reduction' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center p-5 rounded-xl bg-purple-900/20 border border-purple-800/30 card-hover-subtle transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div className="font-display font-bold text-xl text-[var(--accent-purple)] leading-none">
              {stat.value}
            </div>
            <div className="text-[13px] text-[var(--text-muted)] mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Capabilities
        </span>
        <div className="flex-1 h-px bg-[var(--glass-border)]" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {capabilities.map(({ icon: Icon, label, detail }, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-[var(--glass-border)] card-hover-subtle transition-all duration-300 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            <motion.div
              className="p-2 rounded-lg bg-purple-900/30 shrink-0"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={22} className="text-[var(--accent-purple)]" />
            </motion.div>
            <div>
              <p className="text-base font-semibold leading-snug">{label}</p>
              <p className="text-[13px] text-[var(--text-muted)] leading-normal">{detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-center gap-4 p-5 rounded-xl bg-purple-900/15 border border-purple-700/30 card-hover-subtle transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
          <ownership.icon size={32} className="text-[var(--accent-purple)] shrink-0" />
        </motion.div>
        <div>
          <p className="text-lg font-semibold text-[var(--accent-purple)]">{ownership.label}</p>
          <p className="text-sm text-[var(--text-muted)]">{ownership.detail}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Playbook() {
  const [activeTab, setActiveTab] = useState<TabId>('patterns');
  return (
    <section id="playbook" className="section-padding relative">
      <div className="max-w-5xl mx-auto relative">
        <SectionHeading title="My Playbook" />

        <ScrollReveal>
          {/* Tab navigation */}
          <div
            className="relative flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8 mb-6 border-b border-[var(--glass-border)] pb-0 overflow-x-auto"
            role="tablist"
            aria-label="Playbook sections"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`playbook-panel-${tab.id}`}
                id={`playbook-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`playbook-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="playbook-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: 'var(--accent-cyan)',
                      boxShadow: '0 0 12px rgba(0, 217, 255, 0.6)',
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="playbook-content"
            role="tabpanel"
            id={`playbook-panel-${activeTab}`}
            aria-labelledby={`playbook-tab-${activeTab}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {activeTab === 'patterns' && <PatternsTab />}
                {activeTab === 'how' && <HowIWorkTab />}
                {activeTab === 'bring' && <WhatIBringTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
