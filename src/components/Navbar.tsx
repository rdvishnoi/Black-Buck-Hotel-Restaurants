import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { business, navLinks } from '@/data/business';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-md py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
          aria-label="Black Buck Hotel and Restaurants home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/60 bg-gold-400/10 text-gold-300 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-forest-950">
            <span className="font-serif text-lg font-bold">B</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-semibold text-ivory-50">Black Buck</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-300/80">Hotel & Restaurants</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-ivory-100/90 transition-colors hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-md"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-200/20 text-ivory-50 transition-colors hover:bg-white/10 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ivory-50 px-7 py-6 shadow-2xl"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-forest-900">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/15 text-forest-900 hover:bg-ivory-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    onClick={() => handleNav(link.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-4 text-left text-lg font-medium text-forest-900 transition-colors hover:bg-ivory-100 hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    {link.label}
                    <span className="text-gold-400/60">›</span>
                  </motion.button>
                ))}
              </nav>
              <a
                href={business.telUrl}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-forest-950 shadow-gold"
              >
                <Phone className="h-5 w-5" />
                {business.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
