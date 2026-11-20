import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { business } from '@/data/business';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }}
      className="group fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden />
      <MessageCircle className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-forest-900 px-3 py-2 text-xs font-medium text-ivory-50 opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
