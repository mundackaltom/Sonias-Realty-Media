// Project & team data for the Sonia's Realty Media site.
// Ported from the design handoff (Redesign.dc.html) data model — do not
// fabricate numbers for projects whose price/RERA are "On request".

export interface ConnectivityItem {
  place: string;
  distance: string;
}

export interface Project {
  id: string;
  title: string;
  builder: string;
  location: string;
  status: string;
  image: string;
  gallery: string[];
  price: string;
  psf: string;
  config: string;
  area: string;
  possession: string;
  units: string;
  rera: string;
  photoCount: number;
  verifiedPlans: boolean;
  description: string;
  body1: string;
  body2: string;
  advisorNote: string;
  amenities: string[];
  connectivity: ConnectivityItem[];
  trend: number[];
  change: string;
  yield: string;
  premium: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  hasPhoto: boolean;
  pos: string;
  zoom: number;
  filter: string;
  bio: string;
  fit?: "cover" | "contain";
}

const IMG = {
  valencia: "/images/hero.jpg",
  valenciaReal: "/images/valencia.webp",
  valencia2: "/images/hero.jpg",
  city: "/images/hero.jpg",
  tower: "/images/hero.jpg",
  jindal: "/images/hero.jpg",
};

const BASE_PROJECTS: Project[] = [
  {
    id: "valencia", title: "Brigade Valencia", builder: "Brigade Group", location: "Devanahalli",
    status: "New launch", image: IMG.valenciaReal, price: "₹1.80 Cr", psf: "₹8,450 / sq ft",
    config: "3 & 4 BHK", area: "1,800 – 3,000 sq ft", possession: "Mar 2026", units: "350 units, 45 floors",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004230", photoCount: 27, verifiedPlans: true,
    description: "Fifty-acre township on the airport corridor. Phase one towers face the central park; the east-facing 3 BHK units are the ones worth queueing for.",
    body1: "Brigade Valencia is the largest launch on the airport corridor this year: fifty acres, 350 units in phase one, and a central park the towers are arranged around rather than pointed at. The site sits eleven minutes from the international terminal and eight from the Devanahalli exit, which is the whole investment case — airport-corridor land bought before the metro extension is notified.",
    body2: "What the brochure will not say: phase one hands over in March 2026, phases two and three are live construction until 2029, so the first two years are noisy. East-facing 3 BHK units in towers A and B are the ones we recommend; the western row overlooks the service road.",
    advisorNote: "Handled 31 bookings in this project. Ask about the tower A price list.",
    gallery: [IMG.valenciaReal, IMG.city],
    amenities: ["Infinity pool", "Spa & wellness centre", "Business centre", "Concierge desk", "Valet parking", "Private theatre", "Rooftop garden", "Fitness centre", "Kids play area", "24/7 security", "Power backup", "EV charging"],
    connectivity: [
      { place: "Kempegowda International Airport", distance: "11 min – 8 km" },
      { place: "Devanahalli town", distance: "6 min – 4 km" },
      { place: "Aerospace SEZ", distance: "14 min – 10 km" },
      { place: "Metro (proposed, blue line)", distance: "2.4 km" },
      { place: "Canadian International School", distance: "18 min – 12 km" },
      { place: "Columbia Asia hospital", distance: "22 min – 16 km" },
      { place: "NH-44 entry", distance: "3 min – 1.8 km" },
    ],
    trend: [7000, 7350, 7600, 7900, 8150, 8450], change: "+48%", yield: "3.1 – 3.6% p.a.", premium: "+6% premium",
  },
  {
    id: "avalon", title: "Brigade Avalon", builder: "Brigade Group", location: "Electronic City",
    status: "Under construction", image: IMG.city, price: "₹1.20 Cr", psf: "₹7,900 / sq ft",
    config: "2 & 3 BHK", area: "1,400 – 2,200 sq ft", possession: "Dec 2025", units: "280 units, 38 floors",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004231", photoCount: 28, verifiedPlans: true,
    description: "Eight minutes from the Infosys gate. Compact 2 BHKs that rent well; the tower on the west edge takes road noise.",
    body1: "Brigade Avalon is the rental play on this list. Eight minutes from Infosys gate 2 and fifteen from the Wipro campus, it draws a tenant pool that does not thin out — which is why the compact 2 BHK is the unit that clears first here, not the 3.",
    body2: "Structure is topped out and handover is December 2025, so this is a short wait with construction risk mostly behind it. Avoid the west-edge tower: it faces the arterial road and the noise does not stop at night.",
    advisorNote: "We have closed 19 units here. Ask which floors are still unsold.",
    gallery: [IMG.city, IMG.tower, IMG.valencia, IMG.jindal, IMG.valencia2],
    amenities: ["Swimming pool", "Gymnasium", "Multipurpose hall", "Children's play area", "Jogging track", "Landscaped gardens", "Clubhouse", "Indoor games", "Yoga hall", "Senior citizens' court", "24/7 security", "Power backup"],
    connectivity: [
      { place: "Infosys gate 2", distance: "8 min – 3.5 km" },
      { place: "Wipro campus", distance: "15 min – 7 km" },
      { place: "Electronic City flyover", distance: "5 min – 2 km" },
      { place: "Konappana Agrahara metro (u/c)", distance: "1.9 km" },
      { place: "Treamis World School", distance: "12 min – 6 km" },
      { place: "Narayana Health City", distance: "16 min – 9 km" },
      { place: "NICE road entry", distance: "9 min – 4.5 km" },
    ],
    trend: [6300, 6600, 6900, 7250, 7600, 7900], change: "+41%", yield: "3.8 – 4.2% p.a.", premium: "at market",
  },
  {
    id: "eternia", title: "Brigade Eternia", builder: "Brigade Group", location: "Whitefield",
    status: "Ready to move", image: IMG.tower, price: "₹95 L", psf: "₹7,150 / sq ft",
    config: "2 & 3 BHK", area: "1,200 – 1,800 sq ft", possession: "Ready", units: "240 units, 20 floors",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004232", photoCount: 31, verifiedPlans: true,
    description: "Occupancy certificate in hand, forty per cent occupied. Resale stock only — negotiate on the corner units.",
    body1: "Brigade Eternia is finished, occupied and boring in the best sense: occupancy certificate issued, forty per cent of the flats lived in, and a maintenance corpus already funded. If you need to move in this quarter rather than in 2027, this is the shortlist of one.",
    body2: "Everything available now is resale, which means the price is negotiable and the seller's motivation matters more than the rate card. Corner units on floors 8 to 14 are where the discounts have been.",
    advisorNote: "Three resale units live this month. We know both sellers.",
    gallery: [IMG.tower, IMG.valencia2, IMG.city, IMG.valencia, IMG.jindal],
    amenities: ["Swimming pool", "Fitness centre", "Community hall", "Children's play area", "Basketball court", "Tennis court", "Landscaped gardens", "Jogging track", "Library", "Clubhouse", "24/7 security", "Power backup"],
    connectivity: [
      { place: "ITPL", distance: "12 min – 5 km" },
      { place: "Whitefield (Kadugodi) metro", distance: "7 min – 3 km" },
      { place: "Phoenix Marketcity", distance: "14 min – 6.5 km" },
      { place: "Vydehi hospital", distance: "10 min – 4 km" },
      { place: "Deens Academy", distance: "9 min – 3.8 km" },
      { place: "Outer Ring Road", distance: "18 min – 9 km" },
      { place: "KR Puram railway station", distance: "20 min – 11 km" },
    ],
    trend: [5400, 5750, 6100, 6500, 6850, 7150], change: "+32%", yield: "3.4 – 3.9% p.a.", premium: "–2% to market",
  },
  {
    id: "tiara", title: "Godrej Tiara", builder: "Godrej Properties", location: "Yeshwantpur",
    status: "New launch", image: IMG.jindal, price: "₹1.50 Cr", psf: "₹9,200 / sq ft",
    config: "2 & 3 BHK", area: "1,500 – 2,400 sq ft", possession: "Jun 2027", units: "310 units, 32 floors",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004233", photoCount: 14, verifiedPlans: true,
    description: "City-centre high-rise near the railway station. Priced at a premium for the address; the metro line is the reason it holds.",
    body1: "Godrej Tiara is a city address, not a suburb: Yeshwantpur station is a ten-minute walk and the green-line metro is closer than that. You are paying ₹9,200 a foot for a location that already has everything built around it, which is a different trade from the airport corridor.",
    body2: "The premium is real and so is the liquidity — central Bengaluru resale moves in weeks, not quarters. Handover is June 2027, so budget for three years of rent alongside the EMI if you are buying to occupy.",
    advisorNote: "Launch pricing holds until the third tower opens. Ask for the plan.",
    gallery: [IMG.jindal, IMG.city, IMG.tower, IMG.valencia, IMG.valencia2],
    amenities: ["Rooftop pool", "Premium fitness centre", "Sky lounge", "Co-working floor", "Party lawn", "Kids play area", "Amphitheatre", "Pet park", "Concierge desk", "24/7 security", "Power backup", "Visitor parking"],
    connectivity: [
      { place: "Yeshwantpur railway station", distance: "10 min walk – 0.8 km" },
      { place: "Yeshwantpur metro (green line)", distance: "6 min walk – 0.5 km" },
      { place: "Orion Mall, Rajajinagar", distance: "8 min – 3.2 km" },
      { place: "Manipal Northside hospital", distance: "11 min – 4.5 km" },
      { place: "IISc campus", distance: "9 min – 3.6 km" },
      { place: "Kempegowda airport", distance: "45 min – 32 km" },
      { place: "MG Road", distance: "24 min – 9 km" },
    ],
    trend: [7100, 7600, 8050, 8500, 8900, 9200], change: "+30%", yield: "2.8 – 3.2% p.a.", premium: "+11% premium",
  },
  {
    id: "raintree", title: "Prestige Raintree Park", builder: "Prestige Group", location: "Whitefield",
    status: "Ready to move", image: IMG.valencia2, price: "₹2.40 Cr", psf: "₹8,800 / sq ft",
    config: "3 & 4 BHK", area: "2,100 – 3,600 sq ft", possession: "Ready", units: "villas & apartments, 28 acres",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004234", photoCount: 22, verifiedPlans: true,
    description: "Villas and apartments on twenty-eight acres of old plantation. The quietest large community on this side of the ORR.",
    body1: "Prestige Raintree Park is the one project on this list where the landscape came first: twenty-eight acres of old plantation kept largely intact, with villas along the boundary and apartment blocks set inside the tree line. It reads and sounds quieter than anything comparable in Whitefield.",
    body2: "Ready to move, fully occupied, and priced accordingly — ₹2.4 crore is the entry, and the villas start well above that. Buy here for the address and the trees, not for a yield story.",
    advisorNote: "Two villa resales and one 4 BHK are open. Viewings on weekends.",
    gallery: [IMG.valencia2, IMG.valencia, IMG.jindal, IMG.city, IMG.tower],
    amenities: ["Lap pool", "Tennis courts", "Cricket practice net", "Clubhouse & lounge", "Spa", "Amphitheatre", "Cycling loop", "Organic garden plots", "Creche", "Pet park", "24/7 security", "Power backup"],
    connectivity: [
      { place: "Varthur junction", distance: "8 min – 3 km" },
      { place: "Whitefield metro", distance: "16 min – 7 km" },
      { place: "Greenwood High School", distance: "6 min – 2.4 km" },
      { place: "Sakra World hospital", distance: "18 min – 9 km" },
      { place: "Outer Ring Road", distance: "20 min – 11 km" },
      { place: "ITPL", distance: "17 min – 8 km" },
      { place: "Kempegowda airport", distance: "70 min – 48 km" },
    ],
    trend: [6800, 7200, 7650, 8100, 8500, 8800], change: "+29%", yield: "2.6 – 3.0% p.a.", premium: "+4% premium",
  },
  {
    id: "regalia", title: "Century Regalia", builder: "Century Real Estate", location: "Cunningham Road",
    status: "Under construction", image: IMG.city, price: "₹4.10 Cr", psf: "₹14,600 / sq ft",
    config: "4 BHK", area: "3,400 – 4,200 sq ft", possession: "Sep 2026", units: "28 units, one per floor",
    rera: "PRM/KA/RERA/1251/310/PR/200701/004235", photoCount: 12, verifiedPlans: true,
    description: "Twenty-eight units, one per floor, on the last plot of its size in the central business district.",
    body1: "Century Regalia is twenty-eight flats on twenty-eight floors — one residence per level, private lift lobby, and a Cunningham Road address that cannot be replicated because there is no other plot this size left in the district.",
    body2: "At ₹14,600 a foot this is the most expensive project we advise on, and the buyer profile is accordingly narrow: end users who want the address and are indifferent to yield. Handover September 2026; four units remain as of this month.",
    advisorNote: "Four units left. We hold the floor-by-floor availability sheet.",
    gallery: [IMG.city, IMG.tower, IMG.valencia2, IMG.valencia, IMG.jindal],
    amenities: ["Private lift lobby per floor", "Rooftop infinity pool", "Wine room", "Cigar lounge", "Chauffeur lounge", "Private dining room", "Gymnasium & spa", "Home automation", "Concierge", "Triple basement parking", "24/7 security", "Power backup"],
    connectivity: [
      { place: "Cunningham Road junction", distance: "2 min walk" },
      { place: "Cubbon Park metro", distance: "8 min – 2.1 km" },
      { place: "MG Road", distance: "9 min – 2.8 km" },
      { place: "Bowring Institute", distance: "4 min – 1.2 km" },
      { place: "Bangalore Golf Club", distance: "7 min – 2.4 km" },
      { place: "Manipal hospital, Old Airport Road", distance: "18 min – 8 km" },
      { place: "Kempegowda airport", distance: "50 min – 36 km" },
    ],
    trend: [10800, 11600, 12400, 13300, 14000, 14600], change: "+35%", yield: "2.1 – 2.4% p.a.", premium: "+9% premium",
  },
];

const LOC: Record<string, ConnectivityItem[]> = {
  Varthur: [
    { place: "Varthur Kodi junction", distance: "4 min – 1.6 km" },
    { place: "Whitefield (Kadugodi) metro", distance: "14 min – 7 km" },
    { place: "ITPL", distance: "16 min – 8 km" },
    { place: "Greenwood High International", distance: "7 min – 3 km" },
    { place: "Sakra World hospital", distance: "15 min – 7.5 km" },
    { place: "Outer Ring Road, Silk Board", distance: "35 min – 18 km" },
  ],
  "Begur Road": [
    { place: "Bommanahalli, Hosur Road", distance: "12 min – 5 km" },
    { place: "Kalena Agrahara metro (pink line)", distance: "14 min – 6 km" },
    { place: "Electronic City flyover", distance: "18 min – 9 km" },
    { place: "Christ Academy, Begur", distance: "5 min – 2 km" },
    { place: "Fortis hospital, Bannerghatta Road", distance: "16 min – 7 km" },
    { place: "NICE road entry", distance: "9 min – 4 km" },
  ],
  "Bannerghatta Road": [
    { place: "Kalena Agrahara metro (pink line)", distance: "9 min – 4 km" },
    { place: "Fortis hospital", distance: "11 min – 5 km" },
    { place: "Meenakshi Mall", distance: "13 min – 6 km" },
    { place: "IIM Bangalore", distance: "15 min – 7 km" },
    { place: "Bannerghatta biological park", distance: "22 min – 13 km" },
    { place: "Electronic City via NICE", distance: "25 min – 15 km" },
  ],
  Jayanagar: [
    { place: "Jayanagar metro (green line)", distance: "5 min walk – 0.4 km" },
    { place: "South End Circle", distance: "6 min – 2 km" },
    { place: "National College, Basavanagudi", distance: "8 min – 3 km" },
    { place: "Jayadeva hospital", distance: "9 min – 3.5 km" },
    { place: "Lalbagh", distance: "11 min – 4 km" },
    { place: "MG Road", distance: "22 min – 8 km" },
  ],
  Budigere: [
    { place: "Budigere Cross, Old Madras Road", distance: "4 min – 1.8 km" },
    { place: "Whitefield (Kadugodi) metro", distance: "16 min – 8 km" },
    { place: "Hope Farm circle", distance: "20 min – 10 km" },
    { place: "Vydehi hospital, Whitefield", distance: "24 min – 12 km" },
    { place: "Manyata Tech Park", distance: "40 min – 22 km" },
    { place: "Kempegowda airport via STRR", distance: "55 min – 38 km" },
  ],
  Yelahanka: [
    { place: "Yelahanka New Town", distance: "6 min – 2.5 km" },
    { place: "Canadian International School", distance: "12 min – 6 km" },
    { place: "Columbia Asia, Hebbal", distance: "22 min – 12 km" },
    { place: "Manyata Embassy Business Park", distance: "25 min – 14 km" },
    { place: "Bengaluru Baptist hospital", distance: "26 min – 14 km" },
    { place: "Kempegowda airport", distance: "28 min – 20 km" },
  ],
  "Aerospace Park": [
    { place: "KIADB Aerospace SEZ", distance: "4 min – 1.5 km" },
    { place: "Bagalur cross, Bellary Road", distance: "12 min – 7 km" },
    { place: "Kempegowda airport", distance: "20 min – 14 km" },
    { place: "Canadian International School", distance: "22 min – 13 km" },
    { place: "Devanahalli town", distance: "24 min – 16 km" },
    { place: "Manyata Tech Park", distance: "30 min – 18 km" },
  ],
  Whitefield: [
    { place: "Hope Farm circle", distance: "6 min – 2.4 km" },
    { place: "Whitefield (Kadugodi) metro", distance: "8 min – 3.4 km" },
    { place: "Deens Academy", distance: "9 min – 3.8 km" },
    { place: "Vydehi hospital", distance: "10 min – 4 km" },
    { place: "ITPL", distance: "12 min – 5 km" },
    { place: "Phoenix Marketcity", distance: "14 min – 6.5 km" },
  ],
  Thanisandra: [
    { place: "Manyata Embassy Business Park", distance: "8 min – 3.5 km" },
    { place: "Ryan International School", distance: "7 min – 3 km" },
    { place: "Elements Mall, Nagawara", distance: "10 min – 4 km" },
    { place: "Nagawara metro (pink line)", distance: "12 min – 5 km" },
    { place: "Columbia Asia, Hebbal", distance: "14 min – 6 km" },
    { place: "Kempegowda airport", distance: "40 min – 28 km" },
  ],
  "HSR Layout": [
    { place: "Harlur Main Road junction", distance: "3 min – 1.2 km" },
    { place: "Narayana Multispeciality, HSR", distance: "7 min – 2.6 km" },
    { place: "Outer Ring Road, Agara", distance: "8 min – 3 km" },
    { place: "Greenwood High, Sarjapur Road", distance: "12 min – 5.5 km" },
    { place: "Silk Board junction", distance: "14 min – 6 km" },
    { place: "Electronic City via Hosur Road", distance: "28 min – 16 km" },
  ],
  Devanahalli: [
    { place: "NH-44 entry", distance: "4 min – 2 km" },
    { place: "Devanahalli town", distance: "7 min – 4 km" },
    { place: "Akash hospital, Devanahalli", distance: "10 min – 6 km" },
    { place: "Kempegowda airport", distance: "12 min – 9 km" },
    { place: "Aerospace SEZ", distance: "15 min – 11 km" },
    { place: "Stonehill International School", distance: "20 min – 14 km" },
  ],
  Panathur: [
    { place: "Panathur Road / ORR junction", distance: "6 min – 2.4 km" },
    { place: "New Horizon International School", distance: "8 min – 3 km" },
    { place: "Sakra World hospital", distance: "9 min – 3.6 km" },
    { place: "Kadubeesanahalli tech parks", distance: "10 min – 4 km" },
    { place: "Marathahalli bridge", distance: "14 min – 6 km" },
    { place: "Whitefield (Kadugodi) metro", distance: "22 min – 11 km" },
  ],
  Hoskote: [
    { place: "Hoskote town centre", distance: "5 min – 2 km" },
    { place: "Narayana hospital, Hoskote", distance: "8 min – 3.5 km" },
    { place: "Vagdevi Vilas School", distance: "10 min – 4.5 km" },
    { place: "Budigere Cross", distance: "18 min – 11 km" },
    { place: "Whitefield (Kadugodi) metro", distance: "30 min – 17 km" },
    { place: "KR Puram railway station", distance: "35 min – 22 km" },
  ],
};

const AMEN: Record<string, string[]> = {
  apartment: ["Clubhouse", "Swimming pool", "Gymnasium", "Multipurpose hall", "Children's play area", "Jogging track", "Landscaped gardens", "Indoor games room", "Yoga deck", "Senior citizens' court", "24/7 security", "Power backup"],
  township: ["Central park", "Swimming pool", "Fitness centre", "Amphitheatre", "Cricket practice net", "Basketball court", "Retail high street", "Creche", "Cycling loop", "Pet park", "24/7 security", "Power backup"],
  villa: ["Private garden per unit", "Lap pool", "Clubhouse & lounge", "Walking trail", "Fountain court", "Barbecue deck", "Kids play lawn", "Gymnasium", "Visitor parking", "Gated entry", "24/7 security", "Power backup"],
  luxury: ["Rooftop pool", "Sky lounge", "Concierge desk", "Private theatre", "Spa & steam", "Co-working floor", "Private dining room", "Chauffeur lounge", "Valet parking", "Home automation", "24/7 security", "Power backup"],
  green: ["Forest trail", "Reflexology walk", "Organic garden plots", "Swimming pool", "Clubhouse", "Reading room", "Cycling track", "Cricket pitch", "Kids play area", "Rainwater harvesting", "24/7 security", "Power backup"],
};

const GAL: string[][] = [
  [IMG.valencia2, IMG.tower, IMG.city, IMG.jindal, IMG.valencia],
  [IMG.city, IMG.jindal, IMG.valencia, IMG.tower, IMG.valencia2],
  [IMG.tower, IMG.valencia, IMG.jindal, IMG.valencia2, IMG.city],
  [IMG.jindal, IMG.valencia2, IMG.tower, IMG.city, IMG.valencia],
  [IMG.valencia, IMG.city, IMG.valencia2, IMG.jindal, IMG.tower],
];

const ADVISOR = [
  "Newly added to our list. We can pull the current tower-wise price sheet and arrange a site visit.",
  "Not yet a closed project for us. We will walk the site with you and report back before you commit.",
  "We hold the developer's latest availability sheet. Ask for the floors and facings still open.",
  "On our watch list. We can compare this against two alternatives in the same micro-market.",
];

interface RawProject {
  id: string;
  title: string;
  builder: string;
  location: string;
  status: string;
  kind?: string;
  config: string;
  area?: string;
  possession?: string;
  units: string;
  description: string;
  body1: string;
  body2: string;
}

function withDefaults(o: RawProject, i: number): Project {
  const g = GAL[i % GAL.length];
  return {
    price: "On request",
    psf: "On request",
    rera: "On request",
    change: "On request",
    yield: "On request",
    premium: "On request",
    trend: [],
    photoCount: 0,
    area: o.area ?? "On request",
    possession: o.possession ?? "On request",
    verifiedPlans: false,
    image: g[0],
    gallery: g,
    connectivity: LOC[o.location] || [],
    amenities: AMEN[o.kind || "apartment"],
    advisorNote: ADVISOR[i % ADVISOR.length],
    id: o.id,
    title: o.title,
    builder: o.builder,
    location: o.location,
    status: o.status,
    config: o.config,
    units: o.units,
    description: o.description,
    body1: o.body1,
    body2: o.body2,
  };
}

const MORE_RAW: RawProject[] = [
  { id: "evergreen", title: "Prestige Evergreen", builder: "Prestige Group", location: "Varthur", status: "New launch", kind: "township",
    config: "1, 2, 3 & 4 BHK", area: "650 – 2,500 sq ft", possession: "Jan 2029", units: "10 towers, 2B+G+19 floors",
    description: "Phase two of the Raintree Park township at Varthur. The widest unit spread of any project on this list.",
    body1: "Prestige Evergreen is the second phase of the Raintree Park township on Varthur Main Road, launched in December 2024 across roughly twenty-one acres. Ten towers of 2B+G+19 carry 1, 2, 3 and 4 BHK plans from about 650 to 2,500 square feet, which is an unusually wide spread for a single address.",
    body2: "Completion is scheduled for January 2029, so this is a four-year wait at launch pricing. Phase one is occupied next door, which is the closest thing to a preview you will get of how Evergreen will actually live." },
  { id: "southernstar", title: "Prestige Southern Star", builder: "Prestige Group", location: "Begur Road", status: "Under construction", kind: "township",
    config: "2, 3 & 4 BHK", area: "975 – 2,450 sq ft", possession: "Dec 2028", units: "42 acres, about 4,300 apartments",
    description: "Forty-two acres off Begur Road next to DLF New Town. Large enough that phase choice matters more than unit choice.",
    body1: "Prestige Southern Star sits on Begur Road beside DLF New Town in Akshayanagar, south Bengaluru: forty-two acres and roughly 4,300 apartments in 2, 3 and 4 BHK plans from 975 to 2,450 square feet. It launched in November 2024 with possession from December 2028.",
    body2: "At this scale the question is which phase and which block, not which project. The pink-line metro at Kalena Agrahara and the Hosur Road corridor are what the location rests on." },
  { id: "parkridge", title: "Prestige Park Ridge", builder: "Prestige Group", location: "Bannerghatta Road", status: "Under construction", kind: "apartment",
    config: "1, 2 & 3 BHK", units: "25+ acres, high-rise blocks",
    description: "Twenty-five acres on Bannerghatta Road, weighted to compact 1 and 2 BHK plans. The smallest entry ticket among the Prestige projects here.",
    body1: "Prestige Park Ridge runs across more than twenty-five acres on Bannerghatta Road in south Bengaluru, offering 1, 2 and 3 BHK residences. It is the most compact-format Prestige project we are currently tracking in the south.",
    body2: "Bannerghatta Road has benefited from the pink-line metro and ongoing road widening, which is the main reason the corridor re-rated. Confirm the phase and tower before you book — the compact plans sell through first here." },
  { id: "greenmoor", title: "Prestige Greenmoor", builder: "Prestige Group", location: "Jayanagar", status: "New launch", kind: "luxury",
    config: "2, 3 & 4 BHK", area: "2,556 – 3,007 sq ft", units: "160 residences, 2 towers of 20 floors",
    description: "Three acres in Jayanagar, 160 residences, nothing under 2,500 square feet. A central address with no comparable new supply.",
    body1: "Prestige Greenmoor is a 3.03-acre site in Jayanagar with 160 Vaastu-planned residences in two twenty-floor towers, sized from 2,556 to 3,007 square feet. There is very little new construction of this size left in the locality.",
    body2: "Jayanagar's green-line metro, schools and hospitals are already built out, so you are buying an established neighbourhood rather than a projection. Expect a central-Bengaluru premium and central-Bengaluru resale liquidity to match." },
  { id: "goldenheights", title: "Brigade Golden Heights", builder: "Brigade Group", location: "Budigere", status: "New launch", kind: "township",
    config: "1, 2, 3 & 3.5 BHK", area: "705 – 2,010 sq ft", possession: "Mar 2031", units: "5 towers of 43 floors, about 1,750 apartments",
    description: "Five forty-three-floor towers on Budigere Main Road, with eighty per cent of the ten-acre site left open.",
    body1: "Brigade Golden Heights is a 10.75-acre high-rise township on Budigere Main Road off the Old Madras Road corridor, launched in April 2026. Five towers of forty-three floors hold roughly 1,750 apartments in 1, 2, 3 and 3.5 BHK plans from 705 to 2,010 square feet, with about eighty per cent of the site kept open.",
    body2: "Possession is scheduled for March 2031 and RERA registration was still in process at launch — both worth verifying in writing before any payment. This is the longest wait of any project on this list." },
  { id: "insignia", title: "Brigade Insignia", builder: "Brigade Group", location: "Yelahanka", status: "New launch", kind: "luxury",
    config: "3 & 4 BHK", units: "low-density enclave on the airport highway",
    description: "A low-density luxury enclave on the airport highway at Yelahanka. Few units, large formats.",
    body1: "Brigade Insignia is an ultra-luxury, low-density enclave on the airport highway in Yelahanka, north Bengaluru — the top of Brigade's current Bengaluru range rather than a volume launch.",
    body2: "The appeal is unit count: fewer neighbours, larger formats and a straight run to the airport. Unit sizes, pricing and the sanction set are still with the developer; we will share them once released." },
  { id: "eldorado", title: "Brigade El Dorado", builder: "Brigade Group", location: "Aerospace Park", status: "Under construction", kind: "apartment",
    config: "1, 2, 2.5 & 3 BHK", units: "604 apartments across the Cobalt and Dioro Beryl blocks",
    description: "Bagaluru, beside the Aerospace SEZ. Compact plans aimed squarely at the airport-corridor tenant pool.",
    body1: "Brigade El Dorado sits at Bagaluru near the Aerospace SEZ park, with the Cobalt and Dioro Beryl blocks together carrying 604 apartments in 1, 2, 2.5 and 3 BHK plans. Bellary Road and the airport road are the two access points.",
    body2: "The compact formats and the SEZ employment next door make this a rental-led case rather than an appreciation-led one. Ask us which block hands over first — the phases are not on the same schedule." },
  { id: "utopia", title: "Brigade Cornerstone Utopia", builder: "Brigade Group", location: "Varthur", status: "Ready to move", kind: "township",
    config: "1, 2 & 3 BHK", units: "integrated township, Varthur",
    description: "An integrated township at Varthur with phases already handed over. Ready stock, so what you see is what you buy.",
    body1: "Brigade Cornerstone Utopia is an integrated township at Varthur in east Bengaluru with apartments, retail and workspace on one campus. Earlier phases are handed over and occupied.",
    body2: "Because the community is running, you can judge the maintenance, the water supply and the traffic at the gate yourself before buying — which is worth more than any brochure. Availability here is largely resale; the price is negotiable and the seller's motivation matters." },
  { id: "northernlights", title: "Purva Northern Lights", builder: "Puravankara", location: "Aerospace Park", status: "New launch", kind: "township",
    config: "2, 3 & 4 BHK", area: "1,010 – 2,400 sq ft", units: "25 acres, 8 towers, 2,600+ apartments",
    description: "Puravankara's biggest north-Bengaluru launch: twenty-five acres inside the KIADB Aerospace Park.",
    body1: "Purva Northern Lights occupies twenty-five acres in the KIADB Aerospace Park off Bagalur Road, with eight high-rise towers and more than 2,600 apartments in 2, 3 and 4 BHK plans from 1,010 to 2,400 square feet.",
    body2: "The investment case is the SEZ employment on the doorstep and the airport twenty minutes away. The risk is supply: several thousand units are launching within a few kilometres of each other in this pocket." },
  { id: "esplanade", title: "Purva Esplanade", builder: "Puravankara", location: "Aerospace Park", status: "New launch", kind: "township",
    config: "1, 2, 3 & 4 BHK", possession: "2030", units: "24 acres, 8 towers of 30 floors",
    description: "Twenty-four acres at Hardware Park, Gummanahalli. Sixty per cent of the site is held as open space.",
    body1: "Purva Esplanade is planned across twenty-four acres at Hardware Park, Gummanahalli, with eight thirty-floor towers carrying 1, 2, 3 and 4 BHK apartments. About sixty per cent of the site is held as open space.",
    body2: "Launched in early 2026 with completion targeted for 2030. This is the entry point into the north-Bengaluru hardware and aerospace belt, and the unit mix goes lower than most of its neighbours." },
  { id: "atmosphere", title: "Purva Atmosphere", builder: "Puravankara", location: "Thanisandra", status: "Under construction", kind: "apartment",
    config: "3 BHK", possession: "Feb 2026", units: "13 acres, 939 apartments, 3 towers of G+34",
    description: "Three G+34 towers on Thanisandra Road, all 3 BHK. Manyata Tech Park is eight minutes away.",
    body1: "Purva Atmosphere is thirteen acres on Thanisandra Road in north Bengaluru: three towers of G+34 holding 939 apartments, all of them 3 BHK. Possession is from February 2026.",
    body2: "Manyata Embassy Business Park is eight minutes away and the pink-line metro at Nagawara is close behind it, which is why this corridor rents as reliably as it does. Single-configuration projects like this tend to hold a tighter resale band." },
  { id: "meraki", title: "Purva Meraki", builder: "Puravankara", location: "HSR Layout", status: "New launch", kind: "luxury",
    config: "3 & 4 BHK", area: "2,523 – 3,696 sq ft", possession: "Oct 2026", units: "44 residences on 1.02 acres",
    description: "Forty-four residences on one acre off Harlur Main Road. Currently the only new-build option of its kind in HSR.",
    body1: "Purva Meraki is a single-acre site on Harlur Main Road, HSR Layout, with just forty-four residences in 3 and 4 BHK formats from 2,523 to 3,696 square feet across three wings. Possession is from October 2026.",
    body2: "HSR has almost no new construction at this size, which is the whole argument for the price. Buy it as an end-use address; the yield on a unit this large will not justify it as an investment." },
  { id: "vanantara", title: "Godrej Vanantara", builder: "Godrej Properties", location: "Bannerghatta Road", status: "New launch", kind: "township",
    config: "2, 3 & 4.5 BHK", possession: "Oct 2031", units: "36 acres, 16 towers, 2,008 apartments",
    description: "Thirty-six acres off Bannerghatta Road, with a four-acre private forest and a clubhouse over a lakh square feet.",
    body1: "Godrej Vanantara is a resort-format township on thirty-six acres just off Dinnepalya Road, Bannerghatta Road, with sixteen towers and 2,008 apartments in 2, 3 and 4.5 BHK plans. It carries a 1,02,600 square foot clubhouse and a four-acre private forest.",
    body2: "It was RERA-registered in May 2026 with possession set for October 2031 — a five-year horizon, and the longest-dated Godrej project in the city. Pre-launch entry is where the per-square-foot advantage sits, if you can carry the wait." },
  { id: "msrcity", title: "Godrej MSR City", builder: "Godrej Properties", location: "Devanahalli", status: "Under construction", kind: "township",
    config: "1, 2 & 3 BHK", units: "62-acre township; phase one is 1,675 apartments on 13 acres",
    description: "A sixty-two-acre township at Shettigere, Devanahalli. Phase one is open; the full plan runs to about four thousand homes.",
    body1: "Godrej MSR City covers sixty-two acres at Shettigere in Devanahalli. Phase one — Barca — puts 1,675 apartments on thirteen acres, and the completed township is planned at roughly four thousand homes across three phases, with about twenty acres held as green space.",
    body2: "Construction on phase one is reported on track. Buying phase one means living beside phases two and three for several years, which is the standard trade on any township this size." },
  { id: "ananda", title: "Godrej Ananda", builder: "Godrej Properties", location: "Aerospace Park", status: "Under construction", kind: "apartment",
    config: "2 & 3 BHK", area: "998 – 1,630 sq ft", units: "20-acre master plan; phase three (Soul) now selling",
    description: "A twenty-acre township at Bagalur with earlier phases already delivered. Phase three, Soul, is the current release.",
    body1: "Godrej Ananda is a twenty-acre township in the Aerospace Park belt at Bagalur, north Bengaluru. Phase three, Soul, offers 2 and 3 BHK plans from 998 to 1,630 square feet and is aimed at the business parks nearby.",
    body2: "Earlier phases are further along, so you can inspect finished Godrej product on the same campus before committing to a later one — rare, and worth doing. The project carries multiple RERA registrations; check the one that covers your tower." },
  { id: "neopolis", title: "Sobha Neopolis", builder: "Sobha", location: "Panathur", status: "Under construction", kind: "township",
    config: "1, 3, 3.5 & 4 BHK", units: "25.8 acres, 19 towers, 1,875 apartments",
    description: "A Greek-themed township on Panathur Road: nineteen towers, 1,875 homes, in advanced construction.",
    body1: "Sobha Neopolis is a 25.8-acre township on Panathur Road in east Bengaluru, with nineteen towers of 2B+G+18 carrying 1,875 apartments in 1, 3, 3.5 and 4 BHK plans.",
    body2: "It is one of Sobha's most advanced Bengaluru sites, with completion expected between 2026 and 2027. Sobha builds in-house rather than sub-contracting, which is the practical reason its finish quality is consistent across phases." },
  { id: "sentosa", title: "Sobha Sentosa", builder: "Sobha", location: "Panathur", status: "Under construction", kind: "apartment",
    config: "3 BHK", area: "1,507 – 1,804 sq ft", units: "7.5 acres, 7 towers, 533 apartments",
    description: "A Singapore-themed 3 BHK project on Panathur Main Road, in its final construction stage.",
    body1: "Sobha Sentosa is 7.5 acres on Panathur Main Road with seven towers and 533 apartments, almost entirely 3 BHK plans between 1,507 and 1,804 square feet.",
    body2: "The project is in its final stage of construction, so the delivery risk is largely behind it. Resale here has been trading at a marked premium to the original launch rate — we will show you the actual transactions rather than the asking prices." },
  { id: "galera", title: "Sobha Galera", builder: "Sobha", location: "Whitefield", status: "Under construction", kind: "villa",
    config: "4 BHK row houses", area: "3,009 – 4,340 sq ft", possession: "Dec 2026", units: "40 row houses on 4.08 acres",
    description: "Forty Spanish-style row houses near Hope Farm Circle. Four acres, no towers, no shared corridors.",
    body1: "Sobha Galera is forty Spanish-style row houses on 4.08 acres near Hope Farm Circle, Whitefield, in 4 BHK duplex and triplex formats from 3,009 to 4,340 square feet. Completion is expected by December 2026.",
    body2: "Forty units on four acres is the entire proposition: no shared corridors, no lift lobbies, a private clubhouse and a walking trail. It suits buyers who want a villa without leaving the Whitefield tech belt." },
  { id: "worldcity", title: "Sobha World City", builder: "Sobha", location: "Hoskote", status: "New launch", kind: "township",
    config: "1, 2, 3 & 4 BHK", area: "650 – 2,495 sq ft", possession: "2030", units: "48 acres, about 5,400 homes",
    description: "Forty-eight acres at Hoskote, about 5,400 homes. The largest and lowest-entry Sobha project in the city.",
    body1: "Sobha World City is a forty-eight-acre integrated township at Hoskote, east of Whitefield, planned for roughly 5,400 homes in 1, 2, 3 and 4 BHK plans from 650 to 2,495 square feet. It launched in December 2025 with possession by the end of 2030.",
    body2: "This is Sobha's volume play rather than its luxury one, and the entry ticket is the lowest in their Bengaluru range. Hoskote is genuinely peripheral today; the case depends on the eastern corridor infrastructure arriving as planned." },
  { id: "ecopolitan", title: "Provident Ecopolitan", builder: "Provident Housing", location: "Aerospace Park", status: "Under construction", kind: "green",
    config: "1, 2 & 3 BHK", area: "616 – 1,390 sq ft", possession: "Dec 2027", units: "11.25 acres, 1,262 apartments in 4 phases",
    description: "Nature-first design on 11.25 acres in the Aerospace Park. Over sixty per cent open space and forty-five native species planted.",
    body1: "Provident Ecopolitan is 11.25 acres at KIADB Aerospace Park, Bagalur Road, with 1,262 apartments across four phases in 1, 2 and 3 BHK plans from 616 to 1,390 square feet. It launched in August 2023 with possession from December 2027.",
    body2: "The green programme is real rather than decorative: IGBC-certified design, more than sixty per cent open space, forty-five native flora species and a tree planted per family. The airport is about eleven kilometres away, and the SEZ is next door." },
  { id: "deansgate", title: "Provident Deansgate", builder: "Provident Housing", location: "Devanahalli", status: "Under construction", kind: "villa",
    config: "3 BHK villaments", area: "1,927 – 2,200 sq ft", possession: "Dec 2027", units: "288 townhouses on 15 acres",
    description: "Two hundred and eighty-eight townhouses on fifteen acres of IVC Road. A villament format at an apartment's footprint.",
    body1: "Provident Deansgate is a Manchester-themed township on IVC Road, Devanahalli, spread over fifteen acres with 288 townhouses in 3 BHK formats from 1,927 to 2,200 square feet. It launched in November 2023 for possession in December 2027.",
    body2: "The villament format gives you your own entrance and no shared corridor without villa pricing, alongside a 12,000 square foot clubhouse and four acres of landscape. Phase two is the newer release — ask which phase your unit sits in." },
  { id: "botanico", title: "Provident Botanico", builder: "Provident Housing", location: "Whitefield", status: "Under construction", kind: "green",
    config: "2 & 3 BHK", possession: "Dec 2028", units: "Soukya Road, Whitefield",
    description: "A green-themed 2 and 3 BHK project on Soukya Road. The most affordable Whitefield entry we track.",
    body1: "Provident Botanico sits on Soukya Road in Whitefield, offering 2 and 3 BHK apartments on a green-themed campus, with possession targeted for December 2028.",
    body2: "Soukya Road is the quieter side of Whitefield — slower to build out, correspondingly cheaper per foot, and dependent on the road widening finishing. Confirm the current RERA status in writing; earlier phases were registered and later ones may not be." },
  { id: "liva", title: "Century Liva", builder: "Century Real Estate", location: "Yelahanka", status: "Under construction", kind: "apartment",
    config: "2 to 5 BHK", possession: "2028", units: "245 apartments, over 70% open space",
    description: "Two hundred and forty-five apartments at Muddanahalli, Yelahanka, with more than seventy per cent of the site left open.",
    body1: "Century Liva is a 245-apartment project at Muddanahalli, Yelahanka, with layouts running from 2 to 5 BHK and more than seventy per cent of the site kept as open space. Completion is expected in 2028.",
    body2: "The unit count is low for the range of configurations offered, so the plan mix per floor varies — the floor plate matters more here than the project average. It sits within Century's north Bengaluru land holding around the OneWorld township." },
  { id: "tisora", title: "Century Tisora", builder: "Century Real Estate", location: "Yelahanka", status: "New launch", kind: "apartment",
    config: "2, 3 & 4 BHK", area: "1,100 – 2,315 sq ft", units: "14 acres, 6 towers, about 1,200 apartments",
    description: "Fourteen acres at Attur, Yelahanka New Town: six towers, about 1,200 apartments, mid-format plans throughout.",
    body1: "Century Tisora is fourteen acres at Attur in Yelahanka New Town, north Bengaluru, with six towers carrying roughly 1,200 apartments in 2, 3 and 4 BHK plans from 1,100 to 2,315 square feet.",
    body2: "Yelahanka New Town is already built out around it — schools, hospitals and the airport road are in place rather than promised. Century has been the dominant landowner in this belt for decades, which shows in the site's road frontage." },
];

const TOP_RAW: RawProject[] = [
  { id: "sanctuary", title: "Prestige Sanctuary", builder: "Prestige Group", location: "Devanahalli", status: "Under construction", kind: "villa",
    config: "4 BHK villas", area: "4,085 – 6,680 sq ft", units: "85 villas on 23 acres",
    description: "Eighty-five 4 BHK villas on Nandi Hills Road, opposite Prestige Golfshire. The largest-format Prestige address in this list.",
    body1: "Prestige Sanctuary is a low-density villa enclave on Nandi Hills Road in Devanahalli — twenty-three acres carrying eighty-five 4 BHK triplex villas from roughly 4,085 to 6,680 square feet, next to Prestige Golfshire's golf course.",
    body2: "This is the largest unit format Prestige is building on this corridor: no shared corridors, no lift lobbies, and a site that reads more resort than residential block. Price, RERA and the current possession timeline are being confirmed with the developer before we quote them here." },
  { id: "parklane", title: "Prestige Parklane", builder: "Prestige Group", location: "Aerospace Park", status: "New launch", kind: "township",
    config: "1, 2 & 3 BHK", units: "9 towers around a landscaped park, KIADB Aerospace Park Phase 2",
    description: "Prestige's newest launch inside the KIADB Aerospace Park, Phase 2 — nine towers around a central park, about fifteen minutes from the airport.",
    body1: "Prestige Parklane sits inside Phase 2 of the KIADB Hi-Tech, Defence and Aerospace Park at Devanahalli, alongside the Boeing and Safran facilities — nine residential towers in 1, 2 and 3 BHK plans ringed around a landscaped central park, about fifteen minutes from Kempegowda International Airport.",
    body2: "This is a very recent launch and the numbers are still moving — acreage, unit count and RERA registration are being reported differently across sources at this stage. We are tracking the developer's official cost sheet and will update this page the moment it is confirmed; treat anything you see elsewhere as provisional." },
];

const CENTURY_MORE_RAW: RawProject[] = [
  { id: "marathahalli", title: "Century Marathahalli", builder: "Century Real Estate", location: "Marathahalli", status: "Upcoming", kind: "apartment",
    config: "Configuration on request",
    description: "A new Century launch in Marathahalli, on the IT corridor. Configuration and cost sheet are still with the developer.",
    body1: "Century Marathahalli is a residential project on the Marathahalli stretch of the ORR-adjacent IT corridor, close to the tech parks the neighbourhood is built around.",
    body2: "This one is early enough that unit mix and pricing have not been finalised for release. We will confirm the configuration, RERA status and cost sheet as soon as the developer publishes them.", units: "" },
  { id: "serraya", title: "Century Serraya", builder: "Century Real Estate", location: "Marathahalli", status: "Upcoming", kind: "apartment",
    config: "Configuration on request",
    description: "A second, newer Century launch in Marathahalli, alongside Century Marathahalli. Configuration and cost sheet are still with the developer.",
    body1: "Century Serraya is a residential tower project in Marathahalli, positioned alongside Century Marathahalli in the same IT-corridor micro-market.",
    body2: "As with its sibling launch, the unit mix and pricing have not been finalised for release. We will confirm the configuration, RERA status and cost sheet as soon as the developer publishes them.", units: "" },
];

const MORE = MORE_RAW.map(withDefaults);
const TOP = TOP_RAW.map(withDefaults);
const CENTURY_MORE = CENTURY_MORE_RAW.map(withDefaults);

export const PROJECTS: Project[] = [...TOP, ...BASE_PROJECTS, ...MORE, ...CENTURY_MORE];

export const PLANS: Record<string, { k: string; v: string }[]> = {
  "2 BHK": [
    { k: "Carpet area", v: "820 – 960 sq ft" }, { k: "Built-up area", v: "1,200 – 1,400 sq ft" },
    { k: "Balconies", v: "2" }, { k: "Bathrooms", v: "2" },
    { k: "Typical floor", v: "4 units per core" }, { k: "Indicative price", v: "from ₹95 L" },
  ],
  "3 BHK": [
    { k: "Carpet area", v: "1,180 – 1,420 sq ft" }, { k: "Built-up area", v: "1,800 – 2,200 sq ft" },
    { k: "Balconies", v: "3" }, { k: "Bathrooms", v: "3" },
    { k: "Typical floor", v: "2 units per core" }, { k: "Indicative price", v: "from ₹1.42 Cr" },
  ],
  "4 BHK": [
    { k: "Carpet area", v: "1,960 – 2,480 sq ft" }, { k: "Built-up area", v: "2,900 – 3,600 sq ft" },
    { k: "Balconies", v: "4" }, { k: "Bathrooms", v: "4 + powder" },
    { k: "Typical floor", v: "1 unit per core" }, { k: "Indicative price", v: "from ₹2.60 Cr" },
  ],
};

export const TEAM: TeamMember[] = [
  { name: "Sonia", role: "Founder & Principal Advisor", photo: "/images/sonia.jpeg", hasPhoto: true, pos: "50% 27%", zoom: 2.1, filter: "sepia(.04) saturate(.96) contrast(1.01)", bio: "Started the practice in 2020 with one listing in Yeshwantpur. Runs shortlisting, site visits and negotiation on every file personally." },
  { name: "Tom", role: "Advisor", photo: "/images/tom.jpeg", hasPhoto: true, pos: "50% 37%", zoom: 1.75, filter: "saturate(1.02) contrast(1.01)", bio: "Bio to be supplied." },
  { name: "Jimmy", role: "Advisor", photo: "/images/jimmy.jpg", hasPhoto: true, pos: "50% 22%", zoom: 1, filter: "none", bio: "Bio to be supplied." },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.id === slug);
}

export function isVerified(project: Project): boolean {
  return project.rera !== "On request" && project.price !== "On request";
}

export function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}

export interface ProjectFilters {
  status?: string | null;
  locality?: string | null;
  config?: string | null;
  builder?: string | null;
}

export function matchProjects(list: Project[], f: ProjectFilters): Project[] {
  return list.filter(
    (p) =>
      (!f.status || p.status === f.status) &&
      (!f.locality || p.location === f.locality) &&
      (!f.config || p.config.indexOf(f.config.charAt(0)) >= 0) &&
      (!f.builder || p.builder === f.builder)
  );
}

export function planKeysFor(config: string): string[] {
  const planNoun = /row house/i.test(config) ? "row house" : /villament/i.test(config) ? "villament" : /villa/i.test(config) ? "villa" : "BHK";
  const range = config.match(/(\d+)\s*to\s*(\d+)/i);
  let nums: string[];
  if (range) {
    nums = [];
    for (let v = +range[1]; v <= +range[2]; v++) nums.push(String(v));
  } else {
    const found = config.match(/\d+(?:\.\d+)?/g) || ["3"];
    nums = found.filter((v, i) => found.indexOf(v) === i);
  }
  return nums.map((v) => `${v} ${planNoun}`);
}
