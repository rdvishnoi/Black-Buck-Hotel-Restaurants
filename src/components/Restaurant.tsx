import { motion } from 'framer-motion';
import { Phone, UtensilsCrossed, MessageCircle } from 'lucide-react';
import { business, images } from '@/data/business';

const foodCards = [
  { src: images.food1, alt: 'Traditional Indian thali platter', label: 'Indian Classics' },
  { src: images.food2, alt: 'Flavourful curry dish', label: 'Curries & Mains' },
  { src: images.food4, alt: 'Tandoori and grilled specialities', label: 'Tandoori Favourites' },
  { src: images.food6, alt: 'Freshly baked bread and sides', label: 'Breads & Sides' },
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="relative overflow-hidden bg-ivory-50 py-24 md:py-32">
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
                src={images.restaurant1}
                alt="Restaurant interior at Black Buck Hotel & Restaurants, Jodhpur"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-ivory-50 shadow-card sm:block lg:-right-8 lg:w-56"
            >
              <img src={images.food3} alt="Plated dish at the restaurant" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="section-label">
              <span className="h-px w-10 bg-gold-500/50" />
              Our Restaurant
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl md:text-5xl"
            >
              A dining experience worth returning to
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-base leading-relaxed text-charcoal-600 sm:text-lg"
            >
              Our restaurant brings together flavourful cooking, generous portions and a warm ambience. Whether it is a quick meal, a family dinner or a relaxed evening with friends, we serve food that keeps our guests coming back.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {foodCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-xl shadow-soft"
                >
                  <img src={c.src} alt={c.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-ivory-50">{c.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={business.telUrl} className="btn-dark">
                <Phone className="h-4 w-4" />
                Call to Enquire
              </a>
              <a
                href={`${business.whatsappUrl}?text=${encodeURIComponent('Hello, I would like to know more about dining at Black Buck Restaurant.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-charcoal-500">
              <UtensilsCrossed className="h-4 w-4 text-gold-600" />
              Menu items and availability can be confirmed when you call or visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
