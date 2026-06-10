import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { GlowButton } from './GlowButton';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formTouched, setFormTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'avirat.belekar84@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (201) 830-7365' },
    { icon: MapPin, label: 'Location', value: 'New York City' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about data science and machine learning."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <h3 className="subsection-title mb-5">Let's Connect</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-12 h-12 glass-card flex items-center justify-center text-[var(--accent-cyan)]"
                    whileHover={{ scale: 1.1, boxShadow: 'var(--glow-cyan)' }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <div>
                    <p className="text-[var(--text-muted)] text-xs">{label}</p>
                    <p className="text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ label, href, icon }, i) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={icon !== 'mail' ? '_blank' : undefined}
                    rel={icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 glass-card flex items-center justify-center"
                    aria-label={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.1, y: -2, boxShadow: 'var(--glow-cyan)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-[var(--accent-cyan)]" />
                  </motion.a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <form
              className="glass-card p-5 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;
                const errors: typeof formErrors = {};
                if (!name.trim()) errors.name = 'Name is required.';
                if (!email.trim()) errors.email = 'Email is required.';
                else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email address.';
                if (!message.trim()) errors.message = 'Message is required.';
                setFormTouched({ name: true, email: true, message: true });
                setFormErrors(errors);
                if (Object.keys(errors).length > 0) return;

                setIsSubmitting(true);
                await new Promise((r) => setTimeout(r, 800));
                const mailto = `mailto:avirat.belekar84@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                window.location.href = mailto;
                setIsSubmitting(false);
              }}
            >
              {(['name', 'email'] as const).map((field) => (
                <div key={field}>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1.5 capitalize">
                    {field}
                  </label>
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    className={`input-glow ${formErrors[field] && formTouched[field] ? 'error' : ''}`}
                    placeholder={field === 'email' ? 'your.email@example.com' : 'Your name'}
                    onBlur={() => setFormTouched((t) => ({ ...t, [field]: true }))}
                  />
                  {formErrors[field] && formTouched[field] && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {formErrors[field]}
                    </motion.p>
                  )}
                </div>
              ))}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className={`input-glow resize-none ${formErrors.message && formTouched.message ? 'error' : ''}`}
                  placeholder="Tell me about your project..."
                  onBlur={() => setFormTouched((t) => ({ ...t, message: true }))}
                />
                {formErrors.message && formTouched.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {formErrors.message}
                  </motion.p>
                )}
              </div>
              <GlowButton type="submit" className="w-full" loading={isSubmitting}>
                Send Message
              </GlowButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
