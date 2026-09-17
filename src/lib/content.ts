// Static site copy ported from the design handoff. Kept separate from
// project/team data since none of this is per-record.

export const WHATSAPP_NUMBER = "919036747821";
export const PHONE_DISPLAY = "+91 90367 47821";
export const PHONE_TEL = "+919036747821";
export const EMAIL = "soniasrealtymedia@gmail.com";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const NAV_ITEMS = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "services", label: "Services", href: "/services" },
  { key: "team", label: "Team", href: "/team" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const MARQUEE_ITEMS = [
  "RERA-Registered Projects",
  "Independent Advisory",
  "Bengaluru · Est. 2020",
  "Site Visits Arranged",
  "Verified Pricing",
  "Locality Guides",
];

export interface LogoItem {
  src: string;
  alt: string;
  height: number;
}

export const DEVELOPER_LOGOS: LogoItem[] = [
  { src: "/images/puravankara.png", alt: "Puravankara", height: 44 },
  { src: "/images/century-new.png", alt: "Century Real Estate", height: 58 },
  { src: "/images/sobha.png", alt: "Sobha", height: 54 },
  { src: "/images/total-environment.png", alt: "Total Environment", height: 62 },
  { src: "/images/brigade.png", alt: "Brigade Group", height: 58 },
  { src: "/images/prestige.png", alt: "Prestige Group", height: 56 },
  { src: "/images/godrej.png", alt: "Godrej Properties", height: 30 },
];

export const LENDER_LOGOS: LogoItem[] = [
  { src: "/images/icici.png", alt: "ICICI Bank", height: 52 },
  { src: "/images/hdfc.png", alt: "HDFC Bank", height: 52 },
  { src: "/images/axis.png", alt: "Axis Bank", height: 34 },
  { src: "/images/sbi.png", alt: "State Bank of India", height: 52 },
  { src: "/images/canara.png", alt: "Canara Bank", height: 52 },
  { src: "/images/union-bank.png", alt: "Union Bank of India", height: 40 },
];

export const CREDENTIALS = [
  { k: "RERA agent registration", v: "PRM/KA/RERA/1251/446/AG" },
  { k: "Channel partner since", v: "2020" },
  { k: "Languages", v: "English, Malayalam, Hindi" },
  { k: "NRI clients served", v: "180+" },
];

export const QUOTES = [
  { text: "They talked us out of the first project we liked, and were right. The second one we bought in a week.", who: "Placeholder — 3 BHK, Whitefield" },
  { text: "I was in Dubai the whole time. Video walkthroughs, a loan sanction and registration by power of attorney.", who: "Placeholder — NRI buyer, Devanahalli" },
  { text: "Fourth purchase through Sonia. She knows which floors hold value on resale.", who: "Placeholder — investor, four properties" },
];

export const LEGAL_NOTE =
  "Every file that reaches you has already been checked by our own legal and chartered-accountant team — encumbrance certificate, sale deed, RERA compliance and tax structuring are reviewed in-house, before booking, not outsourced per transaction.";

export const SERVICES = [
  { num: "01", title: "Property search", cta: "Browse projects", href: "/projects", body: "We start with what you can borrow, not what you like the look of. Then a shortlist of four — never forty — built from projects we have walked ourselves, with the rate history and the resale record for each.", includes: ["Borrowing assessment", "Four-project shortlist", "Rate history per project", "Two accompanied site visits"] },
  { num: "02", title: "Home loans", cta: "Loan help", href: "/contact", body: "Six bank desks on call. We arrange the sanction letter before you pay a booking amount, so the negotiation happens with financing already in hand and no forfeiture risk if the loan falls through.", includes: ["Eligibility across six banks", "Sanction before booking", "Rate and processing-fee comparison", "Disbursement scheduling"] },
  { num: "03", title: "Investment advisory", cta: "Talk yields", href: "/contact", body: "Rental yield, exit liquidity and the honest holding period. Some projects on this site are good homes and poor investments; we say which is which before you sign.", includes: ["Yield and exit modelling", "Micro-market comparison", "Holding-period guidance", "Portfolio review"] },
  { num: "04", title: "Asset management", cta: "For NRI owners", href: "/contact", body: "For owners who are not in the city: tenanting, rent collection, maintenance follow-up, tax paperwork and an annual condition report with photographs.", includes: ["Tenant sourcing and screening", "Rent collection and escalation", "Maintenance supervision", "Annual condition report"] },
  { num: "05", title: "Registration & handover", cta: "See the process", href: "/contact", body: "Sale deed drafting review, stamp duty computation, registration appointment, and the snag list walk on handover day — with the builder present.", includes: ["Sale deed review", "Stamp duty and registration", "Snag list at handover", "Khata transfer follow-up"] },
];

export const TIMELINE = [
  { year: "2020", text: "Practice opens with a single listing in Yeshwantpur." },
  { year: "2021", text: "First channel-partner agreement with Brigade Group." },
  { year: "2022", text: "Video walkthroughs begin — the NRI desk grows out of them." },
  { year: "2023", text: "Fiftieth home handed over." },
  { year: "2025", text: "One hundredth home handed over." },
  { year: "2026", text: "Thirty-four live projects across seventeen micro-markets." },
];

export const CONTACT_ROWS = [
  { k: "Office", v: "Prestige Jindal City, Bengaluru, Karnataka 560073" },
  { k: "Nearest metro", v: "Nagasandra (Green Line), ~2 km" },
  { k: "Visits", v: "By appointment — message before you come" },
];

export const CONTACT_STEPS = [
  { n: "01", title: "We read your enquiry", text: "Sonia, Tom or Jimmy goes through it the same day and checks it against live inventory." },
  { n: "02", title: "You get a reply", text: "A shortlist and a WhatsApp or call, within one working day — sooner if you message directly." },
  { n: "03", title: "Site visit, on your time", text: "We arrange the visit around your schedule and walk the site with you." },
];

export const SOCIALS = [
  { platform: "Instagram", handle: "@soniasrealtymedia", url: "https://instagram.com/soniasrealtymedia" },
  { platform: "YouTube", handle: "@SoniasRealtyMedia", url: "https://www.youtube.com/@SoniasRealtyMedia" },
  { platform: "Facebook", handle: "Sonia's Realty Media", url: "https://facebook.com/soniasrealtymedia" },
  { platform: "LinkedIn", handle: "Sonia's Realty Media", url: "https://linkedin.com/company/soniasrealtymedia" },
];

export const ABOUT_FAQS = [
  { q: "Are you brokers or advisors?", a: "We are RERA-registered channel partners, paid a fee by the developer on closing. We call ourselves advisors because our job is to talk you out of the wrong project as often as into the right one." },
  { q: "Do you only show projects you are paid to sell?", a: "Yes — that is how the fee works for every advisor in this business. What we control is which developers we take on: seven, chosen for clean title and a record of handing over on time." },
  { q: "Can you help if I am not in Bengaluru?", a: "Most of our NRI clients buy this way — video walkthroughs, loan sanction, and registration by power of attorney, without a trip back." },
  { q: "How many projects do you actually cover?", a: "Thirty, across sixteen micro-markets. We decline far more launches than we take on." },
];

export const SERVICES_FAQS = [
  { q: "What does this cost me?", a: "Nothing. The shortlist, site visits, negotiation and loan help are free to you — our fee is paid by the developer at closing." },
  { q: "How long does the process usually take?", a: "Four to eight weeks from first call to booking, depending on how quickly your loan is sanctioned and how decisive the shortlist is." },
  { q: "Do you help with resale, or only new launches?", a: "Both. Several projects on our list are resale-only at this point, and we handle the same title and encumbrance checks either way." },
  { q: "I already have a project in mind. Can you still help?", a: "Yes — we will review the RERA file and price for you even on a project we do not list, and tell you if something looks wrong." },
  { q: "What if I do not have a loan pre-approved?", a: "We take your file to six lenders in parallel and get a sanction letter before you pay a booking amount, so the negotiation happens with financing already confirmed." },
];

export const VISIT_DAYS = [
  { dow: "Sat", date: "06" },
  { dow: "Sun", date: "07" },
  { dow: "Mon", date: "08" },
  { dow: "Tue", date: "09" },
];

export const VISIT_SLOTS = ["10:00", "12:30", "16:00"];

export const BUYER_TYPES = ["First home", "NRI buyer", "Upgrading", "Investing"];
