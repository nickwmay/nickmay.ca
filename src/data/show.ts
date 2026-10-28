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
  tag?: string;
};

export const prologue: Scene[] = [
  { years: 'Pre-2007', role: 'Theatre school', where: 'New York City', note: 'Trained for the stage. Learned that every great show runs on a great crew.' },
  { years: '2007', role: 'Home to Toronto', where: 'Stage & screen', note: 'New city, new scene. Stopped waiting for the call and started making the work.' },
  { years: '2014', role: 'Co-founds Theatre Topikós', where: 'With Jess Bryson', note: 'A queer theatre collective, still running in repertory.' },
];

export const hospitality: Scene[] = [
  { years: '2011–14', role: 'Front of House Manager', where: 'Cardinal Rule, Roncesvalles', note: 'Weekly cocktail specials and a lot of keys.' },
  { years: '2014–16', role: 'General Manager', where: 'Hawthorne Food & Drink', tag: 'Social enterprise', note: 'A downtown restaurant backed by United Way Toronto that trained people coming out of homelessness or off social assistance for full-time careers in hospitality.' },
  { years: '2016–17', role: 'Toronto Community Lead', where: 'Mealshare', tag: 'Non-profit social enterprise', note: 'Partner restaurants donate a meal to someone in need every time a Mealshare item is ordered. Buy a meal, give a meal.' },
  { years: '2016–17', role: 'General Manager', where: 'Glad Day Bookshop', note: 'The oldest surviving LGBTQ bookstore in North America. Added a café and a bar.' },
];

// Not hospitality, not tech: its own touring company.
export const onTour = { years: '2016–2020', role: 'International Tour Director', where: 'Evolve Tours', note: 'Not quite hospitality, not quite tech: pure operations. Running the show, just with a passport.' };

export const tech: Scene[] = [
  { years: '2017–19', role: 'Merchant Success', where: 'Shopify' },
  { years: '2019–20', role: 'Product Expansion', where: 'Shopify' },
  { years: '2020–22', role: 'Senior Product Ops Manager → Product Ops Lead', where: 'Shopify', note: 'Product Management Certificate, Product School, 2021.' },
  { years: '2022–23', role: 'Staff Product Operations Manager', where: 'Tonal' },
  { years: '2023–24', role: 'Senior Product Operations Lead', where: 'Shopify' },
  { years: '2024–25', role: 'Director, Technical Operations & Chief of Staff to the CTO', where: 'Shopify' },
  { years: '2026–', role: 'Senior Director, Talent Operations & Technology', where: 'Wealthsimple', note: 'Building People Systems & Ops. Agentic workflows, human welcomes.' },
];

// Backstage passes for the big companies, newest first. Colours are each brand's own.
export const shopifyBag = 'M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z';

export const companies = [
  { name: 'Wealthsimple', logo: '/images/logos/wealthsimple.svg', role: 'Senior Director, Talent Ops & Technology', years: '2026–', color: '#f4f1ea', ink: '#111' },
  { name: 'Shopify', bag: true, act: 'Encore', role: 'Senior Product Ops Lead → Director, Tech Ops & Chief of Staff to the CTO', years: '2023–2025', color: '#5e8e3e', ink: '#fff' },
  { name: 'Tonal', logo: '/images/logos/tonal.png', invert: true, role: 'Staff Product Operations Manager', years: '2022–23', color: '#141414', ink: '#fff' },
  { name: 'Shopify', bag: true, act: 'Debut', role: 'Merchant Success → Product Expansion → Product Ops Lead', years: '2017–2022', color: '#95bf47', ink: '#0f2a0f' },
];

// The throughline: what each act taught, merging into one idea.
export const throughline = {
  strands: [
    { act: 'Theatre', lesson: 'The show is only as good as the cast and crew behind it.', skill: 'Run-of-show thinking' },
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
  { title: 'Tuber or Not Tuber', status: 'In rehearsal', potato: true, blurb: 'An app about one of Nick’s favourite things: potatoes. Mashed, roasted, hashed, scalloped. Further details are under wraps (in foil).' },
];
