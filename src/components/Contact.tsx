import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, User } from 'lucide-react';
import { business } from '@/data/business';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[+\d\s-]{8,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.message.trim()) e.message = 'Please enter your message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const text = `New enquiry for Black Buck Hotel & Restaurants%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`${business.whatsappUrl}?text=${text}`, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const field = (key: keyof typeof form, label: string, type = 'text') => (
    <div>
      <label htmlFor={key} className="mb-1.5 block text-sm font-medium text-charcoal-700">{label}</label>
      <input
        id={key}
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal-800 placeholder-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
          errors[key] ? 'border-red-400' : 'border-charcoal-200'
        }`}
        placeholder={key === 'phone' ? '+91 ...' : key === 'name' ? 'Your name' : ''}
        aria-invalid={!!errors[key]}
      />
      {errors[key] && <p className="mt-1 text-xs text-red-500">{errors[key]}</p>}
    </div>
  );

  return (
    <section id="contact" className="bg-ivory-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label justify-center">
            <span className="h-px w-10 bg-gold-500/50" />
            Contact & Location
            <span className="h-px w-10 bg-gold-500/50" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Get in touch or visit us
          </h2>
          <p className="mt-4 text-charcoal-600">
            Call, message or drop by — we are happy to help with bookings, dining enquiries or directions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-forest-900/5 bg-ivory-50 p-7 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-forest-900">{business.name}</h3>
              <div className="mt-5 space-y-4">
                <a href={business.telUrl} className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-charcoal-500">Phone</p>
                    <p className="font-medium text-forest-900 group-hover:text-gold-700">{business.phone}</p>
                  </div>
                </a>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-charcoal-500">Address</p>
                    <p className="font-medium text-forest-900 group-hover:text-gold-700">{business.address}</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-forest-900/5 shadow-soft">
              <iframe
                title="Map showing Black Buck Hotel & Restaurants in Shastri Nagar, Jodhpur"
                src="https://www.google.com/maps?q=Shastri+Nagar+Jodhpur+Rajasthan+342003&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-forest-900/5 bg-ivory-50 p-7 shadow-card sm:p-8"
          >
            <h3 className="font-serif text-xl font-semibold text-forest-900">Send an enquiry</h3>
            <p className="mt-2 text-sm text-charcoal-600">
              Fill in the form and we will receive your message on WhatsApp. We usually respond quickly.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              {field('name', 'Name')}
              {field('phone', 'Phone Number', 'tel')}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal-800 placeholder-charcoal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                    errors.message ? 'border-red-400' : 'border-charcoal-200'
                  }`}
                  placeholder="Your enquiry about a stay or dining..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-dark w-full">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Opening WhatsApp with your message...
                </motion.div>
              )}
            </form>
            <p className="mt-4 flex items-center gap-2 text-xs text-charcoal-500">
              <User className="h-4 w-4 text-gold-600" />
              Your details are only used to respond to your enquiry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
