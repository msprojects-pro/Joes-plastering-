import { ServiceItem, GalleryItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  name: "Joe's Pristine Plastering",
  owner: "Joe Winchurch",
  location: "Middlesbrough, United Kingdom",
  areaCoverage: "Middlesbrough, Stockton-on-Tees, Redcar, Yarm, Billingham, Guisborough & surrounding Teesside areas",
  phone: "+44 7444 395737",
  phoneDisplay: "07444 395737",
  email: "Joewinchurch19@gmail.com",
  tagline: "Professional Plastering Work • 5 Star Services • Honest and Affordable Prices",
  heroHeadline: "Flawless Walls & Ceilings. Built on Honest Craftsmanship.",
  heroSubheadline: "From full residential skimming and exterior rendering to specialist damp proofing, we deliver immaculate glass-smooth surfaces across Middlesbrough and Teesside.",
  stats: {
    recommendRate: 98,
    reviewCount: 32,
    guaranteedFinish: "100%",
    avgResponseHours: "< 2 hrs"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "plastering",
    title: "Plastering",
    shortDesc: "Complete internal plastering for renovations, new extensions, and wall repairs to a spotless flat surface.",
    fullDesc: "Complete two-coat wet plastering and bonding work that cures flat, solid, and ready for decorators. Whether replacing blown plaster or plastering newly constructed walls, we guarantee precision straight edges and flawless corners.",
    features: [
      "Full room & ceiling plastering",
      "Hardwall & bonding backing coats",
      "Artex covering & wall leveling",
      "Clean, mess-free work area"
    ],
    icon: "Layers"
  },
  {
    id: "rendering",
    title: "Rendering",
    shortDesc: "Durable and weather-resistant exterior rendering, including modern silicone and monocouche finishes.",
    fullDesc: "Protect your property from harsh coastal weather while transforming its curb appeal. We specialise in modern through-coloured silicone rendering, scratch finish monocouche, and traditional sand & cement render.",
    features: [
      "Silicone through-colour renders",
      "Monocouche scratch finishes",
      "Breathable, weatherproof coatings",
      "Crack-resistant mesh reinforcement"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "plasterboarding",
    title: "Plasterboarding",
    shortDesc: "Precision drywall installation, dot & dab direct bonding, stud partitioning, and acoustic insulation.",
    fullDesc: "Professional drylining and plasterboard installation for residential renovations, loft conversions, and partition walls. Fitted tight, square, and true to ensure seamless subsequent skimming.",
    features: [
      "Dot and dab masonry bonding",
      "Timber & metal stud boarding",
      "Acoustic & moisture resistant boards",
      "Fireline & thermal insulated boards"
    ],
    icon: "LayoutGrid"
  },
  {
    id: "damp-proofing",
    title: "Damp Proofing",
    shortDesc: "Targeted damp diagnosis, chemical injection barriers, and specialist salt-retardant replastering.",
    fullDesc: "Effective eradication of rising damp, penetrating damp, and salt contamination. We remove affected plaster, apply certified damp-proof courses, and re-plaster using waterproof additives to keep your home dry permanently.",
    features: [
      "Rising damp diagnosis & remedial work",
      "Salt-retardant replastering systems",
      "Cavity drain damp membranes",
      "Long-lasting moisture protection"
    ],
    icon: "Droplets"
  },
  {
    id: "skimming",
    title: "Skimming",
    shortDesc: "Ultra-fine multi-finish skimming for silky, glass-smooth walls and ceilings ready for instant painting.",
    fullDesc: "Our hallmark service: transforming dated, pitted, or Artexed walls into mirror-smooth planes. We apply professional British Gypsum multi-finish with precision hand-trowel technique for razor-sharp angles.",
    features: [
      "Artex ceiling smoothing",
      "Ultra-smooth two-coat finish",
      "Seamless feathering & patching",
      "Zero sanding required"
    ],
    icon: "Sparkles"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "work-1",
    title: "Open-Plan Living Space Renovation",
    category: "skimming",
    categoryLabel: "Skimming & Plastering",
    description: "Full two-coat multi-finish skim over newly boarded open-plan living room with vaulted ceiling detailing in Middlesbrough.",
    image: "/images/hero.jpg",
    location: "Middlesbrough"
  },
  {
    id: "work-2",
    title: "Architectural Ceiling & Downlight Prep",
    category: "skimming",
    categoryLabel: "Ceiling Skim",
    description: "Seamless ceiling skim with zero trowel marks, perimeter shadow lines, and precision cutouts for flush LED downlights.",
    image: "/images/ceiling-downlights.jpg",
    location: "Yarm"
  },
  {
    id: "work-3",
    title: "Modern Detached Silicone Rendering",
    category: "rendering",
    categoryLabel: "Exterior Render",
    description: "High-spec through-colour weatherproof silicone monocouche render, providing crisp clean lines and protection against rain.",
    image: "/images/exterior-rendering.jpg",
    location: "Stockton-on-Tees"
  },
  {
    id: "work-4",
    title: "Period Fireplace & Alcoves Boarding",
    category: "plasterboarding",
    categoryLabel: "Plasterboarding",
    description: "Re-framing and board installation on a period chimney breast and bespoke alcoves, skimmed to laser-straight perfection.",
    image: "/images/fireplace-boarding.jpg",
    location: "Guisborough"
  },
  {
    id: "work-5",
    title: "Precision Artisan Corner & Trowel Finishing",
    category: "skimming",
    categoryLabel: "Artisan Finishing",
    description: "Close-up handcraft detailing using Marshalltown stainless steel trowels to achieve a mirror-like flat finish on fresh plaster.",
    image: "/images/artisan-detail.jpg",
    location: "Marton, Middlesbrough"
  },
  {
    id: "work-6",
    title: "Complete Hallway & Stairwell Skim",
    category: "skimming",
    categoryLabel: "Full House Refurb",
    description: "Transformed dark, tired textured walls into bright, ultra-smooth gallery-quality surfaces with clean woodwork junction lines.",
    image: "/images/living-room.jpg",
    location: "Redcar"
  }
];

export const TRUST_POINTS = [
  {
    title: "5-Star Rated Service",
    description: "Consistently rated 5 stars for punctuality, transparent communication, and unparalleled trowel standards.",
    badge: "5.0 Rating"
  },
  {
    title: "Honest & Affordable Pricing",
    description: "No hidden charges, no sudden extras. Free detailed written quotations provided upfront with transparent costs.",
    badge: "Transparent"
  },
  {
    title: "High-Quality Finish Guaranteed",
    description: "We take immense pride in glass-smooth surfaces, laser-straight edges, and leaving every home spotless.",
    badge: "Guaranteed"
  },
  {
    title: "Proud Local Middlesbrough Specialist",
    description: "Reliable, family-values local tradesman serving Middlesbrough and the entire Teesside community.",
    badge: "Local Teesside"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "David K.",
    location: "Marton, Middlesbrough",
    rating: 5,
    service: "Full Room Skimming",
    date: "2 weeks ago",
    review: "Joe skimmed our entire ground floor living room and knocked-through dining room. The finish is literally like glass—our decorator said it's one of the best plastering jobs he has seen in years. Turned up on time every morning and left the place spotless."
  },
  {
    id: "rev-2",
    name: "Sarah T.",
    location: "Yarm",
    rating: 5,
    service: "Artex Ceiling Over-Skim",
    date: "1 month ago",
    review: "We had heavy 1980s artex across three bedroom ceilings. Joe gave us a very honest quote, came when promised, and transformed them completely flat and modern. Affordable, polite, and great work ethic."
  },
  {
    id: "rev-3",
    name: "Mark & Claire H.",
    location: "Stockton-on-Tees",
    rating: 5,
    service: "External Silicone Rendering",
    date: "2 months ago",
    review: "Incredible exterior rendering job on our front elevation. Really transformed the house. Joe was communicative throughout and delivered high quality work at the exact price agreed."
  }
];
