// All site copy lives here. Edit this file to update the show.

export const contact = {
  email: 'nick@nickmay.ca',
  linkedin: 'https://www.linkedin.com/in/nickwmay',
  topikos: 'https://theatretopikos.com',
};

export type Scene = {
  years: string;
  role: string;
  where: string;
  note?: string;
};

export const prologue: Scene[] = [
  { years: 'Pre-2007', role: 'Theatre school', where: 'New York City', note: 'Trained for the stage. Learned that every great show runs on a great crew.' },
  { years: '2007', role: 'Home to Toronto', where: 'Stage & screen', note: 'New city, new scene. Stopped waiting for the call and started making the work.' },
  { years: '2014', role: 'Co-founds Theatre Topikós', where: 'With Jess Bryson', note: 'A queer theatre collective, still running in repertory.' },
];

export const hospitality: Scene[] = [
  { years: '2011–14', role: 'Front of House Manager', where: 'Cardinal Rule, Roncesvalles', note: 'Weekly cocktail specials and a lot of keys.' },
  { years: '2014–16', role: 'General Manager', where: 'Hawthorne Food & Drink' },
  { years: '2016–17', role: 'Toronto Community Lead', where: 'Mealshare', note: 'Buy a meal, give a meal.' },
  { years: '2016–17', role: 'General Manager', where: 'Glad Day Bookshop', note: 'The oldest surviving LGBTQ bookstore in North America. Added a café and a bar.' },
  { years: '2016–20', role: 'International Tour Director', where: 'Evolve Tours', note: 'Running the show, just with a passport.' },
];

export const tech: Scene[] = [
  { years: '2017–19', role: 'Merchant Success', where: 'Shopify' },
  { years: '2019–20', role: 'Product Expansion', where: 'Shopify' },
  { years: '2020–22', role: 'Senior Product Ops Manager → Product Ops Lead', where: 'Shopify', note: 'Product Management Certificate, Product School, 2021.' },
  { years: '2022–23', role: 'Staff Product Operations Manager', where: 'Tonal' },
  { years: '2023–24', role: 'Senior Product Operations Lead', where: 'Shopify' },
  { years: '2024–25', role: 'Director, Technical Operations & Chief of Staff to the CTO', where: 'Shopify' },
  { years: '2026–', role: 'Senior Director, Talent Operations & Technology', where: 'Wealthsimple', note: 'Building People Systems & Ops. Agentic workflows, human welcomes.' },
];

// Backstage passes for the big companies. Colours are each brand's own.
export const companies = [
  { name: 'Wealthsimple', role: 'Senior Director', years: '2026–', color: '#f4f1ea', ink: '#111' },
  { name: 'Shopify', role: 'Merchant Success → Chief of Staff to the CTO', years: '2017–2025', color: '#5e8e3e', ink: '#fff' },
  { name: 'Tonal', role: 'Staff Product Ops', years: '2022–23', color: '#141414', ink: '#fff' },
];

// The throughline: what each act taught, merging into one idea.
export const throughline = {
  strands: [
    { act: 'Theatre', lesson: 'The show is only as good as the crew behind it.', skill: 'Run-of-show thinking' },
    { act: 'Hospitality', lesson: 'Read the room. Anticipate the need. Own the mistake.', skill: 'Human-first service' },
    { act: 'Tech', lesson: 'Map it, delete what doesn’t need to exist, then automate.', skill: 'Systems at scale' },
  ],
  thesis: 'Systems that scale and still feel human.',
};

export type Engagement = {
  date: string;
  event: string;
  title: string;
  where: string;
  url?: string;
  img?: string;
  upcoming?: boolean;
};

export const speaking: Engagement[] = [
  { date: 'Nov 11, 2026 · 2:55pm', event: 'HRFest Canada', title: 'AI Ate the Training Department: What L&D Becomes Next', where: 'Rebel, Toronto', url: 'https://hrfest.ca', upcoming: true },
  { date: 'Nov 18, 2026', event: 'QT Qonference 2026', title: 'Who Gets to Lead the Future of Work?', where: 'Evergreen Brick Works, Toronto', url: 'https://queertech.org', img: '/images/qt-qonference-2026.jpg', upcoming: true },
  // TODO: confirm year
  { date: '2026', event: 'HR in Tech Crawl', title: 'Remote, Hybrid, or Bust: Recruiting for the Future of Work', where: 'Toronto' },
];

export const speakingTopics = ['AI & the future of work', 'People systems & ops', 'Product operations', 'Queer leadership', 'Career pivots'];

export const board = { role: 'Board of Directors', org: 'SummerWorks Performance Festival', url: 'https://summerworks.ca' };

export type Production = {
  title: string;
  year: string;
  credit: string;
  blurb: string;
  img: string;
  where: string;
  laurel?: string;
};

export const repertory: Production[] = [
  // TODO: confirm POZ's Toronto Fringe year
  { title: 'POZ', year: '2024–25', credit: 'Director', where: 'Toronto · Montreal', img: '/images/TT_POZ.jpg', laurel: 'Toronto Fringe Best New Play · Patron’s Pick', blurb: 'Mark Keller’s play. Toronto Star Critic’s Pick: “This is storytelling at its best.”' },
  { title: 'Wordplay', year: '2014–17', credit: 'Co-writer · Producer', where: 'Toronto · Dublin · Edinburgh', img: '/images/TT_Wordplay_600.jpg', laurel: 'Best New Writing nominee, Dublin', blurb: 'A dark comedy about a fag and his hag, written with Jess Bryson.' },
  { title: '5 Guys Chillin’', year: '2017', credit: 'Director · Producer', where: 'Toronto · Guelph', img: '/images/TT_5Guys_600.jpg', blurb: 'The Canadian premiere of Peter Darney’s verbatim drama.' },
  { title: 'Missed Connections', year: '2018', credit: 'Director', where: 'Toronto', img: '/images/TT_MissedConnections_600.jpg', blurb: 'Mark Keller’s short play about when longing tips into obsession.' },
  { title: 'Shit Show', year: '2017', credit: 'Producer · Co-host', where: 'Toronto', img: '/images/TT_ShitShow_600.jpg', blurb: 'A queer comedy night at Glad Day. Chaos to an absurd degree, by design.' },
];

export const theatreStats = [
  { value: 12, suffix: '+', label: 'years producing' },
  { value: 5, label: 'cities' },
  { value: 3, label: 'countries' },
  { value: 3, label: 'awards for POZ' },
];

export const potatoPuns = [
  'Tuber or not tuber, that is the question.',
  'Mash-terpiece in progress.',
  'Spud-tacular things take time.',
  'Hash it out in rehearsal.',
  'Couch potato mode: off.',
  'Every great app starts as a small fry.',
  'Peeling back the layers. Slowly.',
];

export const beliefs = [
  'Build systems that scale. Make sure they still feel human.',
  'Delete before you automate.',
  'The tool is not the variable. Attention is.',
  'Do the thing.',
  'Your weird is your superpower.',
  'Everyone should work in hospitality once.',
  'Heterarchy over hierarchy.',
  'Keep the welcome human.',
];

export const inDevelopment = [
  { title: 'Coaching', status: 'In workshop', blurb: 'Certification in progress. Mentors shaped every step of this career, so this is the next one.' },
  { title: 'Tuber or Not Tuber', status: 'In rehearsal · working title', potato: true, blurb: 'An app about one of Nick’s favourite things: potatoes. Mashed, roasted, hashed, scalloped. Further details are under wraps (in foil).' },
];
