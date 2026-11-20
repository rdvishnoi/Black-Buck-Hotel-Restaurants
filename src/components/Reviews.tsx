import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, MapPin } from 'lucide-react';
import { business } from '@/data/business';

const placeholders = [
  { name: 'Guest Review', text: '“Wonderful food and even better service. The staff made us feel completely at home during our visit to Jodhpur.”' },
  { name: 'Guest Review', text: '“A comfortable stay and delicious meals. Clean rooms, friendly people and great value. Will definitely return.”' },
  { name: 'Guest Review', text: '“One of the best dining experiences we have had in the city. Warm ambience and consistently tasty food.”' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-forest-900 py-24 text-ivory-50 md:py-32">
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-gold-300 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="section-label text-gold-300 lg:justify-start justify-center">
              <span className="h-px w-10 bg-gold-300/50" />
              Guest Reviews
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Rated 5.0 by our customers
            </h2>
            <div className="mt-8 inline-flex flex-col items-center rounded-3xl bg-forest-950/60 px-10 py-8 shadow-card lg:items-start">
              <div className="flex items-center gap-3">
                <span className="font-serif text-6xl font-semibold text-gold-300">5.0</span>
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-300 text-gold-300" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-ivory-100/70">{business.reviewsCount} Google Reviews</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MapPin className="h-4 w-4" />
                  Visit Us Today
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 underline-offset-4 hover:underline"
                >
                  View on Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {placeholders.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl border border-ivory-200/10 bg-forest-950/50 p-6 shadow-card backdrop-blur-sm"
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-gold-300/20" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-300 text-gold-300" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ivory-100/90">{r.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <span className="font-serif text-sm font-semibold">5★</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ivory-50">{r.name}</p>
                    <p className="text-xs text-ivory-100/60">Google Review · Placeholder</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <p className="mt-2 text-center text-xs text-ivory-100/50">
              These are editable placeholders. Real Google reviews can be added here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
