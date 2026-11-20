export const business = {
  name: 'Black Buck Hotel & Restaurants',
  shortName: 'Black Buck',
  tagline: 'A Place to Relax, Dine & Feel at Home',
  phone: '+91 74250 40363',
  phoneRaw: '917425040363',
  address: '6253+7PC, Sector-H, Shastri Nagar, Jodhpur, Rajasthan 342003, India',
  addressShort: 'Sector-H, Shastri Nagar, Jodhpur, Rajasthan 342003',
  city: 'Jodhpur',
  state: 'Rajasthan',
  reviewsCount: 37,
  rating: 5.0,
  whatsappUrl: 'https://wa.me/917425040363',
  telUrl: 'tel:+917425040363',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Black+Buck+Hotel+%26+Restaurants+Shastri+Nagar+Jodhpur',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=6253%2B7PC+Sector-H+Shastri+Nagar+Jodhpur+Rajasthan+342003',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Our Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const ux = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  hero: ux('1777502286570-2725dff09ce5', 2400),
  about: ux('1660557989695-14fac79c086d', 1600),
  aboutAlt: ux('1790774882513-bee2fba81a2c', 1200),
  hotel1: ux('1631049307305-1ceea96fb0e1', 1200),
  hotel2: ux('1618773928121-c32242e63f39', 1200),
  hotel3: ux('1631048730670-ff5cd0d08f15', 1200),
  restaurant1: ux('1774989423979-6a7bf5add3f0', 1600),
  restaurant2: ux('1772479036537-2f24be392ab0', 1200),
  food1: ux('1585937421612-70a008356fbe', 1000),
  food2: ux('1565299624946-b28f40a0ae38', 1000),
  food3: ux('1559339352-11d035aa65de', 1000),
  food4: ux('1758900393800-4e5d9d20c4d7', 1000),
  food5: ux('1759264244764-2cb80f1a67bd', 1000),
  food6: ux('1782983595187-43623a1980aa', 1000),
  careers: ux('1759462692380-08be88ad26f1', 1400),
};

export const careerOpenings = [
  { role: 'Restaurant Service Staff', type: 'Full-time', desc: 'Welcoming guests, taking orders and ensuring a smooth dining experience.' },
  { role: 'Hotel Receptionist', type: 'Full-time', desc: 'Managing check-ins, guest enquiries and front desk operations.' },
  { role: 'Kitchen Team', type: 'Full-time', desc: 'Preparing and plating dishes with attention to quality and consistency.' },
  { role: 'Housekeeping Staff', type: 'Full-time', desc: 'Maintaining clean, comfortable rooms and common areas for our guests.' },
];

export const galleryImages = [
  { src: ux('1777502286570-2725dff09ce5', 1200), alt: 'Elegant restaurant dining area with warm lighting', span: 'lg:col-span-2 lg:row-span-2' },
  { src: ux('1565299624946-b28f40a0ae38', 900), alt: 'Plated gourmet dish at the restaurant', span: '' },
  { src: ux('1631049307305-1ceea96fb0e1', 900), alt: 'Comfortable hotel room with neatly made bed', span: '' },
  { src: ux('1772479036537-2f24be392ab0', 900), alt: 'Restaurant interior with ambient lighting', span: 'lg:col-span-2' },
  { src: ux('1585937421612-70a008356fbe', 900), alt: 'Traditional Indian thali with assorted dishes', span: '' },
  { src: ux('1660557989695-14fac79c086d', 1200), alt: 'Welcoming hotel lobby and reception area', span: '' },
  { src: ux('1758900393800-4e5d9d20c4d7', 900), alt: 'Dining table set for an elegant meal', span: 'lg:col-span-2' },
  { src: ux('1759264244764-2cb80f1a67bd', 900), alt: 'Close-up of freshly prepared Indian cuisine', span: '' },
  { src: ux('1618773928121-c32242e63f39', 900), alt: 'Boutique hotel room with modern amenities', span: '' },
];
