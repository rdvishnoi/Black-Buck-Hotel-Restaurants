import { Phone, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-forest-900/10 bg-forest-950/95 backdrop-blur-md md:hidden">
      <a
        href={business.telUrl}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-ivory-50 active:bg-forest-800"
        aria-label="Call Black Buck Hotel and Restaurants"
      >
        <Phone className="h-5 w-5 text-gold-300" />
        Call Now
      </a>
      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white active:bg-[#1da851]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
