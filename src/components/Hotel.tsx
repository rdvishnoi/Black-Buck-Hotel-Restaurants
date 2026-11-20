import { motion } from 'framer-motion';
import { BedDouble, Phone, MessageCircle, Check } from 'lucide-react';
import { business, images } from '@/data/business';

const stayHighlights = [
  'Comfortable, well-maintained rooms',
  'Peaceful location in Shastri Nagar',
  'Friendly, attentive service',
  'Convenient for travellers and families',
];

export default function Hotel() {
  return (
    <section id="hotel" className="relative overflow-hidden bg-forest-950 py-24 text-ivory-50 md:py-32">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-gold-300 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label text-gold-300"
            >
              <span className="h-px w-10 bg-gold-300/50" />
              Stay With Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
            >
              Comfortable stays, restful nights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-ivory-100/80 sm:text-lg"
            >
              Our hotel offers a quiet, comfortable retreat after a day of exploring Jodhpur. Clean, welcoming rooms and attentive service come together to make your stay relaxed and hassle-free.
            </motion.p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {stayHighlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-ivory-100/90"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={business.telUrl} className="btn-primary">
                <Phone className="h-4 w-4" />
                Call for Booking
              </a>
              <a
                href={`${business.whatsappUrl}?text=${encodeURIComponent('Hello, I would like to enquire about a stay at Black Buck Hotel & Restaurants.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-ivory-100/60">
              Room details and availability can be shared directly when you call or message us.
            </p>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl shadow-card"
            >
              <img src={images.hotel1} alt="Hotel room interior" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="overflow-hidden rounded-2xl shadow-card"
              >
                <img src={images.hotel2} alt="Comfortable hotel bed" className="aspect-square w-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-forest-900 p-6 text-center shadow-card"
              >
                <BedDouble className="h-8 w-8 text-gold-300" />
                <p className="mt-3 font-serif text-lg">A restful base in Jodhpur</p>
                <p className="mt-1 text-xs text-ivory-100/70">Designed for comfort and convenience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
