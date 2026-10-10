// All site copy lives here. Words wrapped in {braces} render in the cyan→violet gradient.
// Source: recovered infortum.io (Apr 2026), with DJ's decisions applied (Oct 2026).

export const site = {
  name: "Infortum",
  legalName: "Infortum Inc.",
  url: "https://www.infortum.io",
  tagline: "The platform for intent-based insights to drive your business.",
  description:
    "Infortum connects offline-in-life data to predict consumer intent, drive measurable growth, and power business outcomes.",
  credit: { label: "ICM Creative", href: "https://islandcitymediagroup.com" },
};

export const nav = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Investors", href: "/investors" },
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
    "Our diverse portfolio of subsidiaries delivers unified solutions at a global scale. From real-time digital healthcare access via 247FirstCare and EarnvaRx, to the banking and custody architecture of AET Trust, we engineer secure systems that drive measurable outcomes.",
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
  // Leadership: Eddy Pham only (per DJ)
  leadership: {
    title: "Leadership",
    people: [
      {
        name: "Eddy Pham",
        role: "Founder & CEO",
        photo: "/images/eddy-pham.webp",
        bio: [
          "Eddy Pham is the Founder and CEO of Infortum Inc. A proven operator with more than 30 years of experience, he has launched over 150 consumer products and scaled brands into millions of households through product development, direct-response marketing and large-scale commercialization.",
          "His background spans FinTech, HealthTech, retail, direct-to-consumer and media, with deep expertise in consumer behavior, data-driven marketing and hardware and software integration.",
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
    { label: "Earnva Card", href: "/portfolio#earnva" },
    { label: "Earnva Savings & Rewards", href: "/portfolio#esrn" },
    { label: "EarnvaRx", href: "/portfolio#earnvarx" },
    { label: "247FirstCare", href: "/portfolio#247firstcare" },
    { label: "AET Trust", href: "/portfolio#aet-trust" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Investors", href: "/investors" },
    { label: "Contact us", href: "/contact" },
  ],
  legal: [
    { label: "Terms of use", href: "/terms-of-use" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Cookie policy", href: "/cookie-policy" },
  ],
};

// ---------------------------------------------------------------------------
// Portfolio — sourced from the 2026 Business Plan and 2024 Summarized Overview.
// Public-safe facts only.
export const portfolio = {
  title: "One parent company. A portfolio built to {work as one.}",
  body: "Infortum Inc. is a Nevada-based technology holding company. Each company solves a different part of daily life, and together they form a single HelpTech ecosystem where money, health, savings and identity reinforce each other.",
  companies: [
    {
      id: "earnva",
      name: "Earnva Card & Smart Wallet",
      appName: "Earnva App & Smart Wallet",
      category: "FinTech · Hardware",
      logo: "/images/earnva-logo.png",
      logoBg: "dark",
      summary: "A next-generation smart card and app that replace the entire wallet. One card emulates hundreds of payment, loyalty, membership, gift and access cards.",
      facts: [
        "Biometric fingerprint unlock, color e-paper touch display",
        "Dynamic EMV, NFC/RFID and key-fob emulation",
        "Tokenized data, encrypted cloud and blockchain-logged activity",
        "Earn Earnva points on top of your existing card rewards",
      ],
    },
    {
      id: "esrn",
      name: "Earnva Savings & Rewards Network",
      category: "Rewards · Commerce",
      logo: "/images/earnva-logo.png",
      logoBg: "dark",
      summary: "A closed-loop savings network with non-public member offers across dining, travel, retail and experiences, personalized by AI.",
      facts: ["3M+ merchants globally", "2M+ hotels and properties, up to 70% off travel", "Auctions, sweepstakes and VIP experiences", "Points that never expire and never black out"],
    },
    {
      id: "earnvarx",
      name: "EarnvaRx",
      category: "HealthTech · Prescriptions",
      logo: "/images/earnvarx-logo.png",
      logoBg: "light",
      summary: "Prescription savings that produce real, measurable value, accepted at pharmacies nationwide.",
      facts: ["3,150 free generic medications", "Accepted at 65,000+ US pharmacies", "HIPAA-compliant platform", "Built for employer and group-plan white labeling"],
    },
    {
      id: "247firstcare",
      name: "247FirstCare",
      category: "HealthTech · Virtual care",
      logo: "/images/247firstcare-logo.png",
      logoBg: "dark",
      summary: "24/7 virtual primary care, mental health support and wellness, connected to Rx savings and rewards for healthy behavior.",
      facts: ["24/7 telehealth and primary care", "Mental health and wellness resources", "Plans for individuals, families, gig workers and small businesses", "Integrated with EarnvaRx savings"],
    },
    {
      id: "aet-trust",
      name: "AET Trust",
      category: "Banking · Custody",
      logo: "/images/aet-trust-logo.png",
      logoBg: "light",
      summary: "American Estate & Trust, a Nevada-regulated custodian providing the banking and custody backbone for the ecosystem.",
      facts: ["API-first custody infrastructure", "Alternative assets for the IRA market", "Global banking and digital wallet services", "Multicurrency support and global spend"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Investors — the public, non-proprietary story. Financials, projections,
// raise terms and unsigned partner names stay in the gated investor brief.
export const investors = {
  hero: {
    eyebrow: "For investors",
    title: "Invest in the first {HelpTech} ecosystem.",
    body: "Infortum unifies FinTech, HealthTech and rewards into one platform, and captures the most valuable signal in consumer markets: real-world, offline behavior, owned and permissioned by the consumer.",
  },
  thesis: {
    title: "Tech giants monetize clicks. {The physical world is still dark.}",
    points: [
      { name: "Offline In-Life Data", body: "Groceries, gas, travel, dining, health choices. Infortum captures what people actually do in the physical world, not what they browse." },
      { name: "User-owned and consented", body: "Every Earner owns their data, controls permissions and sees their full engagement history. Value is created with consent, not around it." },
      { name: "One touch point", body: "One app and one network become the first thing a member opens and the last they close, generating daily engagement no single-purpose app can match." },
    ],
  },
  market: {
    title: "A market at the {intersection} of finance and health.",
    stats: [
      { value: "260M+", label: "US adults who use a credit, debit or membership card", tag: "TAM" },
      { value: "120M+", label: "Digital-native consumers using rewards, wallets and finance apps", tag: "SAM" },
      { value: "$4.5T", label: "Annual US healthcare spending", tag: "Industry" },
      { value: "$700", label: "Lost per consumer each year in unused rewards and overlooked savings", tag: "Per consumer" },
    ],
    note: "Market figures are Infortum estimates based on industry research.",
  },
  flywheel: {
    title: "How a consumer becomes an {Earner.}",
    body: "Every action earns value, every purchase generates savings, and every engagement builds a richer, user-owned profile.",
    steps: [
      { name: "Onboard", body: "One account, one app. Members load their payment, loyalty, membership and gift cards into the Earnva Smart Wallet." },
      { name: "Activate", body: "Pay, unlock memberships and redeem offers right from the app, earning Earnva points on top of the rewards they already get." },
      { name: "Earn on everything", body: "Points for using the app, daily check-ins, travel, referrals and finance challenges. Points never expire." },
      { name: "Unlock membership", body: "Premium members access the full Earnva Savings & Rewards Network across millions of merchants." },
      { name: "Personalize", body: "AI learns real-world preferences to surface hyper-relevant offers, so members save more and merchants sell more." },
    ],
  },
  scale: {
    title: "Built-in {network scale.}",
    stats: [
      { value: "3M+", label: "Merchants in the rewards network" },
      { value: "2M+", label: "Hotels and global properties" },
      { value: "65,000+", label: "US pharmacies accepting EarnvaRx" },
      { value: "3,150", label: "Free generic medications" },
    ],
  },
  model: {
    title: "Multiple ways to {compound value.}",
    streams: [
      { name: "Memberships", body: "Recurring subscription revenue from freemium-to-premium upgrades across the rewards network." },
      { name: "Premium app features", body: "Premium Smart Wallet and app features that anchor daily use." },
      { name: "Merchant partnerships", body: "Merchants pay for targeted promotions and real engagement, not coupon chasers." },
      { name: "Enterprise white label", body: "Rewards, payroll, benefits and incentive programs for corporations, insurers, credit unions and travel brands." },
      { name: "Health services", body: "Virtual care and prescription memberships that deliver measurable savings." },
      { name: "Consented data insights", body: "De-identified, permission-based insights for partners, built on a consumer-first model." },
    ],
  },
  moat: {
    title: "No other wallet {combines it all.}",
    body: "Infortum owns its core technology, including its data architecture, rewards ecosystem and the Earnva app and Smart Wallet platform.",
    capabilities: ["Digital wallet", "Rewards network", "Health benefits", "Biometrics", "Blockchain", "Merchant analytics", "Tokenized data", "One-to-one personalization"],
  },
  roadmap: {
    title: "From one app to a {global ecosystem.}",
    phases: [
      { name: "Now", items: ["Earnva Savings & Rewards Network", "Earnva app and Smart Wallet", "EarnvaRx prescription savings", "247FirstCare virtual care"] },
      { name: "Next", items: ["Enterprise and employer white label", "AI financial coaching", "Health-linked rewards"] },
      { name: "Future", items: ["Global banking via AET Trust", "Low-cost cross-border remittances", "Secure precious metals and digital asset vault", "International expansion: Canada, EU and Asia"] },
    ],
  },
  cta: {
    title: "Request the {investor brief.}",
    body: "Our full investor materials, including financials, projections and offering details, are shared privately with qualified investors. Tell us about yourself and our team will follow up.",
  },
  disclaimer:
    "This website is for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities. Any such offer will be made only through definitive offering documents provided to qualified investors. Statements about future products, markets and plans are forward-looking and involve risks and uncertainties; actual results may differ materially.",
};
