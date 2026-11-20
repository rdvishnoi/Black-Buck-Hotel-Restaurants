import { motion } from 'framer-motion';
import { UtensilsCrossed, ChefHat, Wine, Cookie } from 'lucide-react';

const cards = [
  { icon: ChefHat, title: 'Freshly Prepared', text: 'Dishes made to order using quality ingredients and careful preparation.' },
  { icon: UtensilsCrossed, title: 'Varied Flavours', text: 'A selection of Indian favourites and everyday meals to suit every palate.' },
  { icon: Wine, title: 'Dining Ambience', text: 'A warm, relaxed setting perfect for family meals and gatherings with friends.' },
  { icon: Cookie, title: 'Made With Care', text: 'Every plate is served with attention to detail and a focus on taste.' },
];

export default function Highlights() {
  return (
    <section className="bg-ivory-100 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label justify-center">
            <span className="h-px w-10 bg-gold-500/50" />
            Why Guests Choose Us
            <span className="h-px w-10 bg-gold-500/50" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            A little of everything you need
          </h2>
          <p className="mt-4 text-charcoal-600">
            Hospitality that is simple, genuine and consistently good — whether you are here to dine or to stay.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-forest-900/5 bg-ivory-50 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-200/30 transition-transform duration-500 group-hover:scale-150" aria-hidden />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-forest-900">{c.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-charcoal-600">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
