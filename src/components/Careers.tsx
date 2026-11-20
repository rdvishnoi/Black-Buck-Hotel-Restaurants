import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, CheckCircle2, Clock, MapPin, Users, HeartHandshake } from 'lucide-react';
import { business, careerOpenings, images } from '@/data/business';

const perks = [
  { icon: HeartHandshake, title: 'Welcoming Team', text: 'Work in a friendly, supportive environment where every role matters.' },
  { icon: Users, title: 'Grow With Us', text: 'Opportunities to learn and build a career in hospitality.' },
  { icon: MapPin, title: 'Local & Accessible', text: 'Located in Shastri Nagar, Jodhpur — easy to reach every day.' },
];

export default function Careers() {
  const [form, setForm] = useState({ name: '', phone: '', role: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; role?: string }>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[+\d\s-]{8,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.role.trim()) e.role = 'Please select a role';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const text = `Career application for Black Buck Hotel & Restaurants%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ARole: ${encodeURIComponent(form.role)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`${business.whatsappUrl}?text=${text}`, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', role: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="careers" className="relative overflow-hidden bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={images.careers}
                alt="Hospitality team working together at Black Buck Hotel & Restaurants"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -left-6 -top-6 -z-0 h-32 w-32 rounded-full bg-gold-200/40 blur-2xl" aria-hidden />
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="section-label">
              <span className="h-px w-10 bg-gold-500/50" />
              Careers
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl md:text-5xl"
            >
              Join the Black Buck family
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-base leading-relaxed text-charcoal-600 sm:text-lg"
            >
              We are always happy to meet people who share our passion for hospitality. If you enjoy working with people, take pride in good service and want to grow with a welcoming local business, we would love to hear from you.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-forest-900/5 bg-ivory-100 p-4"
                >
                  <p.icon className="h-6 w-6 text-gold-600" />
                  <h3 className="mt-3 text-sm font-semibold text-forest-900">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-600">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-gold-600" />
              <h3 className="font-serif text-2xl font-semibold text-forest-900">Open Positions</h3>
            </div>
            <p className="mt-2 text-sm text-charcoal-600">
              We welcome applications for the roles below. Even if you do not see a match, feel free to reach out.
            </p>
            <div className="mt-6 space-y-4">
              {careerOpenings.map((job, i) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-forest-900/5 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <h4 className="text-base font-semibold text-forest-900">{job.role}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-600">{job.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-charcoal-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-gold-600" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" /> {business.addressShort}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setForm((f) => ({ ...f, role: job.role }));
                      document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="shrink-0 rounded-full border border-forest-700/30 px-4 py-2 text-xs font-semibold text-forest-800 transition-all hover:bg-forest-800 hover:text-ivory-50"
                  >
                    Apply
                  </button>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs text-charcoal-500">
              These are indicative roles. Please contact us for current openings and details.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            id="career-form"
            className="rounded-2xl border border-forest-900/5 bg-white p-7 shadow-card sm:p-8"
          >
            <h3 className="font-serif text-xl font-semibold text-forest-900">Quick Application</h3>
            <p className="mt-2 text-sm text-charcoal-600">
              Share a few details and we will continue the conversation on WhatsApp.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="career-name" className="mb-1.5 block text-sm font-medium text-charcoal-700">Name</label>
                <input
                  id="career-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 placeholder-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                    errors.name ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="career-phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">Phone Number</label>
                <input
                  id="career-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 placeholder-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                    errors.phone ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                  placeholder="+91 ..."
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="career-role" className="mb-1.5 block text-sm font-medium text-charcoal-700">Role you are applying for</label>
                <select
                  id="career-role"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                    errors.role ? 'border-red-400' : 'border-charcoal-200'
                  } ${form.role ? '' : 'text-charcoal-400'}`}
                  aria-invalid={!!errors.role}
                >
                  <option value="">Select a role</option>
                  {careerOpenings.map((j) => (
                    <option key={j.role} value={j.role} className="text-charcoal-800">{j.role}</option>
                  ))}
                  <option value="Other" className="text-charcoal-800">Other / General enquiry</option>
                </select>
                {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
              </div>
              <div>
                <label htmlFor="career-message" className="mb-1.5 block text-sm font-medium text-charcoal-700">Message <span className="font-normal text-charcoal-400">(optional)</span></label>
                <textarea
                  id="career-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-charcoal-200 bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 placeholder-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600"
                  placeholder="Tell us briefly about yourself..."
                />
              </div>
              <button type="submit" className="btn-dark w-full">
                <Send className="h-4 w-4" />
                Apply via WhatsApp
              </button>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Opening WhatsApp with your application...
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
