import { Phone, MessageCircle, MapPin, Facebook, Instagram, Mail } from 'lucide-react';
import { business, navLinks } from '@/data/business';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:info@blackbuckjodhpur.com' },
  ];

  return (
    <footer className="bg-forest-950 text-ivory-100/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/60 bg-gold-400/10 text-gold-300">
                <span className="font-serif text-lg font-bold">B</span>
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-ivory-50">Black Buck</p>
                <p className="text-[10px] uppercase tracking-widest text-gold-300/80">Hotel & Restaurants</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-100/70">
              A welcoming hotel and restaurant in Shastri Nagar, Jodhpur — offering warm hospitality, flavourful dining and comfortable stays.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-200/15 text-ivory-100/80 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-forest-950"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-ivory-100/50">Social links are placeholders — add real profiles when available.</p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-ivory-50">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-ivory-100/70 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-ivory-50">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={business.telUrl} className="flex items-start gap-3 text-ivory-100/70 transition-colors hover:text-gold-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-ivory-100/70 transition-colors hover:text-gold-300">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-ivory-100/70 transition-colors hover:text-gold-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  {business.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-ivory-50">Plan Your Visit</h4>
            <p className="mt-5 text-sm text-ivory-100/70">
              Located in Shastri Nagar, Jodhpur — easy to reach for dining and stays.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-400 hover:text-forest-950">
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory-200/10 pt-7 text-xs text-ivory-100/60 sm:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Hotel & Restaurant in Jodhpur, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
