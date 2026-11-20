import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/business';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () => setActive((i) => (i === null ? i : (i + 1) % galleryImages.length));

  return (
    <section id="gallery" className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label justify-center">
            <span className="h-px w-10 bg-gold-500/50" />
            Our Gallery
            <span className="h-px w-10 bg-gold-500/50" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            A look around Black Buck
          </h2>
          <p className="mt-4 text-charcoal-600">
            Explore the ambience of our restaurant, the comfort of our hotel rooms and a glimpse of the food we serve.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${img.span}`}
              aria-label={`View image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-ivory-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory-200/20 text-ivory-50 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory-200/20 text-ivory-50 transition-colors hover:bg-white/10 sm:left-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory-200/20 text-ivory-50 transition-colors hover:bg-white/10 sm:right-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="max-h-[82vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
