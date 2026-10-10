// All site copy lives here. Source: recovered infortum.io (Apr 2026), with DJ's decisions applied (Oct 2026).

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
  title: "Transform offline behavior into actionable insights.",
  body: "Connect offline-in-life data to predict consumer intent, drive measurable growth, and power business outcomes.",
  pillars: ["Engage", "Empower", "Entrust"],
  cta: { label: "Partner with us", href: "/contact" },
};

export const ecosystem = {
  title: "One single integrated ecosystem. Infinite advantage.",
  body: "The Infortum ecosystem connects and accelerates every layer of consumer behavior, using predictive data layers to deliver unique insights and empower smarter business decisions.",
  items: [
    {
      name: "Earnva Smart Wallet",
      image: "/images/earnva-card.webp",
      body: "Replace fragmented physical wallets with an immutable hardware gateway. Consolidating 1,000 cards into one ledger-secured device eliminates daily friction while ensuring unbreachable control over your unified financial identity.",
    },
    {
      name: "Earnva Savings & Rewards (ESRN)",
      image: "/images/bg-money.webp",
      body: "Converts offline intent into instant, closed-loop purchasing power across millions of premium global destinations, including 2M+ hotels, 300,000+ US restaurants, and more.",
    },
    {
      name: "Global Banking & Custody",
      image: null,
      body: "Unifies global banking and digital asset custody into one seamless interface for absolute, frictionless control over your wealth.",
    },
    {
      name: "247FirstCare & EarnvaRx",
      image: "/images/bg-health.webp",
      body: "Integrates 24/7 virtual primary care and deep pharmaceutical utility natively into your financial ecosystem to proactively protect your health — with savings on 93% of US prescriptions and over 26,000 commercially discounted medications at 65,000+ US pharmacies.",
    },
  ],
};

export const dataLayers = {
  title: "Connect offline-in-life data with AI insights to grow your business.",
  body: "Six predictive data layers, stacked into one view of the consumer.",
  layers: [
    { name: "Total Share of Wallet", short: "TSW", body: "Capturing 360° of consumer spending across all legacy and digital payment rails." },
    { name: "Predictive Consumer Intent", short: "Intent", body: "Analyzes closed-loop engagement to identify purchase intent, automating proactive revenue generation." },
    { name: "Real-Time Mobility Data", short: "Mobility", body: "Tracks physical movement across global destinations to deliver hyper-contextual engagement triggers." },
    { name: "Predictive Health Intelligence", short: "Health", body: "Extracts diagnostic trends from virtual primary care to accelerate proactive clinical strategies." },
    { name: "Rx Fulfillment Data", short: "Rx", body: "Real-time prescription adherence and SKU-level medication fulfillment via 65,000+ pharmacies." },
    { name: "Global Asset Liquidity", short: "Assets", body: "Integrates legacy banking and digital assets to drive high-conviction, strategic institutional outcomes." },
  ],
};

export const companies = {
  title: "Designed to solve. Built to scale.",
  body: "Every Infortum brand is architected to eliminate systemic friction, reclaim lost value, and provide the essential platform required to navigate a fragmented global economy.",
  items: [
    {
      id: "earnva",
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
  title: "Your all-in-one digital wallet.",
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
  title: "Connect offline-in-life data to predict consumer intent, drive measurable growth, and power business outcomes.",
  cta: { label: "Partner with us", href: "/contact" },
};

export const about = {
  title: "Revolutionizing market intelligence across industries for the future.",
  whoTitle: "Understanding the Infortum ecosystem.",
  who: [
    "Welcome to Infortum Inc., a Nevada-based technology holding company engineering the future of digital infrastructure. We consolidate complex financial and health data into seamless, user-centric ecosystems powered by advanced machine learning.",
    "Our diverse portfolio of subsidiaries delivers unified solutions at a global scale. From real-time digital healthcare access via 247FirstCare and EarnvaRx, to the frictionless payment and custody architectures of UpswingPay and AET Trust, we engineer secure systems that drive measurable outcomes.",
    "At the core of our consumer ecosystem is the Earnva™ Savings and Rewards Network (ESRN). Supported by the proprietary Earnva™ Card, we leverage localized intent data and AI to deliver hyper-personalized value to users while providing merchants with unparalleled predictive insights.",
    "Join us in architecting a seamlessly connected future where secure data and intelligent systems empower boundless human potential.",
  ],
  valueTitle: "Architecting the platform of tomorrow.",
  valueBody: "We are driving innovation in finance and healthcare through our diverse portfolio of companies.",
  // Vision + Mission merged into one block (decision, Oct 2026)
  missionTitle: "Our vision and mission",
  mission: [
    "Infortum exists to revolutionize the FinTech and HealthTech industries by seamlessly integrating advanced technology with personalized service. We empower individuals and businesses with innovative solutions that enhance financial management, promote savings, and improve overall well-being.",
    "By leveraging cutting-edge data management and machine learning, and through our commitment to excellence, security, and user-centric design, we deliver comprehensive products that drive real value — building a future where technology and personalized care lead to better financial and health outcomes for all.",
  ],
};

export const contact = {
  title: "Let's collaborate.",
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
