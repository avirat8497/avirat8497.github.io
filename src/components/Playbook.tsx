import { motion } from 'framer-motion';
import {
  Lightbulb,
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

const brings = [
  {
    icon: Workflow,
    label: 'ML/LLM pipelines',
    detail: 'Ingestion → deployment',
  },
  {
    icon: Brain,
    label: 'Classification systems',
    detail: 'Supervised + LLM hybrids',
  },
  {
    icon: BarChart3,
    label: 'Evaluation frameworks',
    detail: '20+ prompt benchmarks',
  },
  {
    icon: Cloud,
    label: 'Data infrastructure',
    detail: 'GCP, BigQuery, CI/CD',
  },
  {
    icon: Target,
    label: '0→1 ownership',
    detail: 'Full project delivery',
  },
];

const highlights = [
  { value: '10K+', label: 'Calls / month' },
  { value: '400+', label: 'Cases resolved' },
  { value: '15%', label: 'Cost reduction' },
];

export function Playbook() {
  return (
    <section id="playbook" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading title="My Playbook" />

        <div className="space-y-5">
          {/* Patterns */}
          <ScrollReveal>
            <div className="glass-card overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-[var(--glass-border)]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
                    <Lightbulb size={18} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Patterns I've Learned</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed">
                  Lessons from financial services, enterprise operations, and AI/ML infrastructure:
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {patterns.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.03] border border-[var(--glass-border)] text-sm text-[var(--text-secondary)] leading-snug"
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="text-cyan-400 font-bold shrink-0 text-xs mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-5 text-center font-display font-semibold gradient-text text-base">
                  I build those systems.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* How I Work + What I Bring — single unified card */}
          <ScrollReveal delay={0.08}>
            <div className="glass-card overflow-hidden">
              <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[var(--glass-border)]">
                {/* Left: How I Work */}
                <div className="lg:col-span-2 p-5 sm:p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
                      <Shield size={18} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">How I Work</h3>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                    I bridge <span className="text-emerald-400 font-medium">engineering depth</span>{' '}
                    with <span className="text-emerald-400 font-medium">business pragmatism</span> —
                    translating messy operational problems into{' '}
                    <span className="text-emerald-400 font-medium">
                      clear datasets, metrics, and solutions
                    </span>{' '}
                    teams can act on.
                  </p>

                  <div className="mt-5 space-y-2">
                    {principles.map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15"
                      >
                        <Icon size={16} className="text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-sm font-medium leading-none">{label}</p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: What I Bring */}
                <div className="lg:col-span-3 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500">
                      <Rocket size={18} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">What I Bring</h3>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Production-grade{' '}
                    <span className="text-fuchsia-400 font-medium">ML and LLM pipelines</span>{' '}
                    supporting thousands of users and millions of data points.
                  </p>

                  {/* Stats strip */}
                  <div className="flex gap-2 mb-5">
                    {highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex-1 text-center py-2.5 px-2 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20"
                      >
                        <div className="font-display font-bold text-fuchsia-300 text-base leading-none">
                          {h.value}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] mt-1 leading-tight">
                          {h.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities — 2-col grid */}
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                    Capabilities
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {brings.map(({ icon: Icon, label, detail }, i) => (
                      <motion.div
                        key={label}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-[var(--glass-border)] ${
                          i === brings.length - 1 ? 'sm:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <div className="p-1.5 rounded-md bg-fuchsia-500/15 shrink-0">
                          <Icon size={14} className="text-fuchsia-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-tight">{label}</p>
                          <p className="text-[11px] text-[var(--text-muted)]">{detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
