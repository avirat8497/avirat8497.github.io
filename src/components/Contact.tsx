import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formTouched, setFormTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'avirat.belekar84@gmail.com', color: 'text-cyan-400' },
    { icon: Phone, label: 'Phone', value: '+1 (201) 830-7365', color: 'text-violet-400' },
    { icon: MapPin, label: 'Location', value: 'New York City', color: 'text-fuchsia-400' },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about data science and machine learning."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <h3 className="font-display text-xl font-semibold mb-6">Let's Connect</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-12 h-12 glass-card flex items-center justify-center ${color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[var(--text-muted)] text-xs">{label}</p>
                    <p className="text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={icon !== 'mail' ? '_blank' : undefined}
                    rel={icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 glass-card flex items-center justify-center hover:shadow-[var(--glow-cyan)] transition-all duration-300"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-cyan-400" />
                  </motion.a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <form
              className="glass-card p-6 space-y-5"
              onSubmit={(e) => {
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
                const mailto = `mailto:avirat.belekar84@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                window.location.href = mailto;
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
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                      formErrors[field] && formTouched[field]
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-[var(--glass-border)] focus:border-cyan-500/50 focus:shadow-[var(--glow-cyan)]'
                    }`}
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
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 resize-none ${
                    formErrors.message && formTouched.message
                      ? 'border-red-500/60'
                      : 'border-[var(--glass-border)] focus:border-cyan-500/50 focus:shadow-[var(--glow-cyan)]'
                  }`}
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
              <button type="submit" className="glow-btn w-full py-3.5 text-white text-sm">
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
