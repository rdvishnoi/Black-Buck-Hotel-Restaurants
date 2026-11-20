import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, MapPin } from 'lucide-react';
import { images } from '@/data/business';

const points = [
  { icon: HeartHandshake, title: 'Warm Hospitality', text: 'A welcoming atmosphere where every guest is treated like family — comfortable, relaxed and genuinely cared for.' },
  { icon: Sparkles, title: 'Memorable Dining', text: 'Flavourful dishes prepared with care and served in a setting designed for good company and great conversations.' },
  { icon: MapPin, title: 'Convenient Location', text: 'Set in Shastri Nagar, Jodhpur — easy to reach whether you are a local, a traveller or visiting the city.' },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2rem] shadow-card"
            >
              <img
                src={images.about}
                alt="Welcoming hotel lobby and reception at Black Buck Hotel & Restaurants"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-ivory-50 shadow-card sm:block"
            >
              <img
                src={images.aboutAlt}
                alt="Cosy restaurant interior at Black Buck"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -left-6 -top-6 -z-0 h-32 w-32 rounded-full bg-gold-200/40 blur-2xl" aria-hidden />
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              <span className="h-px w-10 bg-gold-500/50" />
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl md:text-5xl"
            >
              A welcoming retreat in the heart of Jodhpur
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-charcoal-600 sm:text-lg"
            >
              Black Buck Hotel & Restaurants is built on a simple idea — that good food, restful comfort and genuine hospitality make any stay memorable. Whether you are stopping by for a meal, spending the night, or exploring Jodhpur, we want you to feel at home.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-base leading-relaxed text-charcoal-600"
            >
              From families and friends to travellers and professionals, our doors are open to everyone who appreciates warm service, a relaxed atmosphere and food made with care.
            </motion.p>

            <div className="mt-10 space-y-5">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-gold-300 shadow-soft">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-600">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
