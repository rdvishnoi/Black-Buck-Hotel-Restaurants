import { motion } from 'framer-motion';
import { UtensilsCrossed, Phone, MapPin } from 'lucide-react';
import { business, images } from '@/data/business';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Elegant restaurant and hotel ambience at Black Buck Hotel & Restaurants in Jodhpur"
          className="h-full w-full object-cover animate-kenburns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/55 to-forest-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="section-label text-gold-300">
            <span className="h-px w-10 bg-gold-300/60" />
            Hotel & Restaurants · Jodhpur
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-ivory-50 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {business.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg"
          >
            Experience warm hospitality, flavourful dining and restful comfort in the heart of Shastri Nagar, Jodhpur. A welcoming retreat for travellers, families and food lovers alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.querySelector('#restaurant')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Explore Our Restaurant
            </button>
            <a href={business.telUrl} className="btn-secondary">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ivory-200/15 pt-6"
          >
            <div>
              <p className="font-serif text-2xl font-semibold text-gold-300">5.0</p>
              <p className="text-xs uppercase tracking-widest text-ivory-100/70">Rated on Google</p>
            </div>
            <div className="hidden h-10 w-px bg-ivory-200/20 sm:block" />
            <div>
              <p className="font-serif text-2xl font-semibold text-gold-300">37</p>
              <p className="text-xs uppercase tracking-widest text-ivory-100/70">Google Reviews</p>
            </div>
            <div className="hidden h-10 w-px bg-ivory-200/20 sm:block" />
            <div>
              <p className="font-serif text-2xl font-semibold text-gold-300">Shastri Nagar</p>
              <p className="text-xs uppercase tracking-widest text-ivory-100/70">Jodhpur, Rajasthan</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex h-11 w-7 items-start justify-center rounded-full border border-ivory-200/30 p-1.5"
          aria-hidden
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-gold-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
