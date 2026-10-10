// All site copy lives here. Words wrapped in {braces} render in the cyan→violet gradient.
// Source: recovered infortum.io (Apr 2026), with DJ's decisions applied (Oct 2026).

export const site = {
  name: "Infortum",
  legalName: "Infortum Inc.",
  url: "https://www.infortum.io",
  tagline: "The platform for intent-based insights to drive your business.",
  description:
    "Infortum connects offline-in-life data to predict consumer intent, drive measurable growth, and power business outcomes.",
  address: "2620 South Maryland Pkwy, Ste 14 #888, Las Vegas, NV 89109",
  credit: { label: "ICM Creative", href: "https://islandcitymediagroup.com" },
};

export const nav = [
  { label: "Infortum", href: "/#infortum" },
  { label: "Our companies", href: "/#companies" },
  { label: "About us", href: "/about" },
];

export const hero = {
  title: "Transform offline {behavior} into actionable {insights.}",
  body: "Connect offline-in-life data to predict consumer intent, drive measurable growth, and power business outcomes.",
  pillars: ["Engage", "Empower", "Entrust"],
  cta: { label: "Partner with us", href: "/contact" },
};

export const ecosystem = {
  title: "One single integrated ecosystem. {Infinite advantage.}",
  body: "The Infortum ecosystem connects and accelerates every layer of consumer behavior, using predictive data layers to deliver unique insights and empower smarter business decisions.",
  items: [
    {
      name: "Earnva Smart Wallet",
      short: "Smart Wallet",
      icon: "wallet",
      image: "/images/earnva-card.webp",
      body: "Replace fragmented physical wallets with an immutable hardware gateway. Consolidating 1,000 cards into one ledger-secured device eliminates daily friction while ensuring unbreachable control over your unified financial identity.",
    },
    {
      name: "Earnva Savings & Rewards (ESRN)",
      short: "Savings & Rewards",
      icon: "coins",
      image: "/images/bg-money.webp",
      body: "Converts offline intent into instant, closed-loop purchasing power across millions of premium global destinations, including 2M+ hotels, 300,000+ US restaurants, and more.",
    },
    {
      name: "Global Banking & Custody",
      short: "Banking & Custody",
      icon: "bank",
      image: "/images/aet-trust-logo.png",
      body: "Unifies global banking and digital asset custody into one seamless interface for absolute, frictionless control over your wealth.",
    },
    {
      name: "247FirstCare & EarnvaRx",
      short: "Health & Rx",
      icon: "health",
      image: "/images/bg-health.webp",
      body: "Integrates 24/7 virtual primary care and deep pharmaceutical utility natively into your financial ecosystem to proactively protect your health — with savings on 93% of US prescriptions and over 26,000 commercially discounted medications at 65,000+ US pharmacies.",
    },
  ],
};

export const dataLayers = {
  title: "Connect offline-in-life data with {AI insights} to grow your business.",
  body: "The Infortum ecosystem connects and accelerates every layer of consumer behavior, using predictive data layers to deliver unique insights and empower smarter business decisions.",
  layers: [
    { name: "Total Share of Wallet (TSW)", short: "TSW", icon: "fingerprint", body: "Capturing 360° of consumer spending across all legacy and digital payment rails." },
    { name: "Predictive Consumer Intent", short: "Intent", icon: "brain", body: "Analyzes closed-loop engagement to identify purchase intent, automating proactive revenue generation." },
    { name: "Real-Time Mobility Data", short: "Mobility", icon: "mapPin", body: "Tracks physical movement across global destinations to deliver hyper-contextual engagement triggers." },
    { name: "Predictive Health Intelligence", short: "Health", icon: "heart", body: "Extracts diagnostic trends from virtual primary care to accelerate proactive clinical strategies." },
    { name: "Rx Fulfillment Data", short: "Rx", icon: "pill", body: "Real-time prescription adherence and SKU-level medication fulfillment via 65,000+ pharmacies." },
    { name: "Global Asset Liquidity", short: "Assets", icon: "globe", body: "Integrates legacy banking and digital assets to drive high-conviction, strategic institutional outcomes." },
  ],
};

export const companies = {
  title: "Designed to solve. {Built to scale.}",
  body: "Every Infortum brand is architected to eliminate systemic friction, reclaim lost value, and provide the essential platform required to navigate a fragmented global economy.",
  items: [
    {
      id: "earnva",
      art: "/images/earnva-card.webp",
      brand: "Earnva",
      logo: "/images/earnva-logo.png",
      logoBg: "dark",
      title: "Your all-in-one digital wallet.",
      body: "Consolidate your entire wallet — credit, debit, and loyalty cards — onto one secure smart card to experience true financial freedom.",
      points: [
        "Emulate up to 1,000 cards on a single hardware device.",
        "Keep your financial identity unbreachable and completely secure.",
        "Eliminate the physical friction of carrying legacy wallets.",
      ],
    },
    {
      id: "earnva-savings-rewards",
      art: "/images/bg-money.webp",
      brand: "Earnva Savings & Rewards",
      logo: "/images/earnva-logo.png",
      logoBg: "dark",
      title: "Exclusive savings & rewards.",
      body: "Unlock exclusive cash back and instant rewards at millions of hotels, restaurants, and retail stores worldwide.",
      points: [
        "Earn instant rewards at 2M+ hotels and 300,000+ US restaurants.",
        "Convert offline intent into real, closed-loop purchasing power.",
        "Receive hyper-personalized deals triggered by your location.",
      ],
    },
    {
      id: "247firstcare",
      art: "/images/bg-health.webp",
      brand: "247FirstCare",
      logo: "/images/247firstcare-logo.png",
      logoBg: "dark",
      title: "Simplifying healthcare access.",
      body: "247FirstCare provides in-the-moment access to primary care physicians, urgent care doctors, and licensed mental health and trauma therapists — when you need it most, wherever you may be.",
      points: [
        "24/7 virtual care with no added copays or consult fees.",
        "HealthConnect plans covering major medical starting under $11.50/day.",
        "Get thousands of prescription medications absolutely free.",
      ],
    },
    {
      id: "earnvarx",
      art: "/images/bg-rx.webp",
      brand: "EarnvaRx",
      logo: "/images/earnvarx-logo.png",
      logoBg: "light",
      title: "Subscription-based prescription benefits.",
      body: "Bypass mark-ups and dispensing fees with a tiered membership that delivers vital medications for one low monthly rate.",
      points: [
        "Free generic medications on us — up to 3,150 medications covered.",
        "Unlimited use with no maximum benefit dollar caps.",
        "Immediate activation and pick-up at over 65,000 local pharmacies.",
      ],
    },
    {
      id: "aet-trust",
      art: "/images/aet-trust-logo.png",
      brand: "AET Trust",
      logo: "/images/aet-trust-logo.png",
      logoBg: "light",
      title: "Institutional trust for modern finance.",
      body: "A Nevada-regulated custodian providing the operational backbone for innovative firms to consolidate their entire investment operations.",
      points: [
        "API-first infrastructure for seamless custody and ERISA compliance.",
        "Tap into the $14 trillion IRA market with alternative assets.",
        "Replace a patchwork of legacy tools with one unified system.",
      ],
    },
  ],
};

export const earnvaFeature = {
  title: "Your {all-in-one} digital wallet.",
  body: "Unify your complete financial footprint. Consolidate up to 1,000 cards into a single, ledger-secured interface to unlock instant rewards and seamless spending power across our global network.",
  features: [
    {
      name: "Consolidate all your cards in one",
      body: "Emulate up to 1,000 cards with the built-in digital wallet — credit, debit, loyalty, membership, gift cards and more — all on one card.",
    },
    {
      name: "Exclusive savings & rewards",
      body: "Earn exclusive offers from 2M+ hotels worldwide, 300,000+ local dining and shopping destinations, sweepstakes and more.",
    },
    {
      name: "Hyper-personalization",
      body: "Whether you're stepping into an airport or your local mall, Earnva instantly presents the most personalized deal savers just for you.",
    },
  ],
};

export const closing = {
  title: "Connect offline-in-life data to predict consumer intent, drive {measurable growth}, and power business outcomes.",
  cta: { label: "Partner with us", href: "/contact" },
};

export const about = {
  title: "Revolutionizing {market intelligence} across industries for the future.",
  whoTitle: "Understanding the {Infortum ecosystem.}",
  who: [
    "Welcome to Infortum Inc., a Nevada-based technology holding company engineering the future of digital infrastructure. We consolidate complex financial and health data into seamless, user-centric ecosystems powered by advanced machine learning.",
    "Our diverse portfolio of subsidiaries delivers unified solutions at a global scale. From real-time digital healthcare access via 247FirstCare and EarnvaRx, to the frictionless payment and custody architectures of UpswingPay and AET Trust, we engineer secure systems that drive measurable outcomes.",
    "At the core of our consumer ecosystem is the Earnva™ Savings and Rewards Network (ESRN). Supported by the proprietary Earnva™ Card, we leverage localized intent data and AI to deliver hyper-personalized value to users while providing merchants with unparalleled predictive insights.",
    "Join us in architecting a seamlessly connected future where secure data and intelligent systems empower boundless human potential.",
  ],
  valueTitle: "Architecting the {platform of tomorrow.}",
  valueBody: "We are driving innovation in finance and healthcare through our diverse portfolio of companies.",
  // Vision and Mission rewritten as two distinct statements (Oct 2026 redesign) — DRAFT for DJ/Eddy review
  vision: {
    label: "Our vision",
    text: "A future where technology and personalized care lead to better {financial and health outcomes} for everyone.",
  },
  mission: {
    label: "Our mission",
    text: "We integrate advanced data management and machine learning with personalized service to build FinTech and HealthTech products that help people save, manage their money and stay healthy, and that give businesses the insight to serve them better.",
  },
  values: [
    { name: "Engage", body: "We meet people where they already are, turning everyday moments into value they can feel." },
    { name: "Empower", body: "We give individuals and businesses the tools and insight to make smarter financial and health decisions." },
    { name: "Entrust", body: "We treat every piece of data as a responsibility, building security and privacy into everything we make." },
  ],
  leadership: {
    title: "Leadership",
    people: [
      {
        name: "Eddy Pham",
        role: "Founder & CEO",
        photo: "/images/eddy-pham.webp",
        // DRAFT bio — confirm with Eddy
        bio: [
          "Eddy Pham is the Founder and CEO of Infortum Inc., where he leads a portfolio spanning financial technology and digital health, including Earnva, 247FirstCare, EarnvaRx and AET Trust.",
          "He also runs EPCO International, a product development and direct response marketing firm.",
        ],
        quote: "I never wanted to create another discount app. I wanted to build an intelligent ecosystem that helps people save, earn and make better decisions.",
      },
    ],
  },
};

export const contact = {
  title: "Let's {collaborate.}",
  body: "Connect with Infortum to unlock innovation. Let's transform ideas into reality.",
  aboutFormTitle: "Want to know more?",
  aboutFormBody: "We talk a lot about innovative solutions. Fill out the form to stay in the know with Infortum.",
};

export const footer = {
  services: [
    { label: "Earnva Card", href: "/#earnva" },
    { label: "Earnva Savings & Rewards", href: "/#earnva-savings-rewards" },
    { label: "EarnvaRx", href: "/#earnvarx" },
    { label: "247FirstCare", href: "/#247firstcare" },
    { label: "AET Trust", href: "/#aet-trust" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ],
  legal: [
    { label: "Terms of use", href: "/terms-of-use" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Cookie policy", href: "/cookie-policy" },
  ],
};
