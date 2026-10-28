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
  set?: string;
  logo?: string;
  logoClass?: string;
};

export const prologue: Scene[] = [
  { set: 'toronto', years: 'Scene 1', role: 'Born and raised in Toronto', where: 'Enter: one theatre nerd', note: '(Nobody is surprised by what happens next.)' },
  { set: 'stage', years: 'Scene 2', role: 'Finds the stage', where: 'Grease · West Side Story · Community theatre', note: '(Plus a few blink-and-you’ll-miss-him gigs as a movie extra.)' },
  { set: 'nyc', years: 'Scene 3', role: 'Moves to New York City', where: 'AMDA, New York · 2003', note: '(Packs light. Dreams big. Learns that every great show runs on a great crew.)' },
  { set: 'home', years: 'Scene 4', role: 'Home to Toronto', where: '2007 · Stage, then hospitality, then tech', note: '(Stops waiting for the call, starts making the work, and quietly falls for spreadsheets.)' },
  { set: 'topikos', years: 'Scene 5', role: 'Co-founds Theatre Topikós', where: 'Fast forward to 2014 · with Jess Bryson', tag: 'Spoiler alert', note: 'A queer theatre collective, still running in repertory. (More on that later in the programme.)' },
];

// The opening number: early jobs as a scrolling reel of badges. Click one to flip it.
export const mcdArches = 'M17.243 3.006c2.066 0 3.742 8.714 3.742 19.478H24c0-11.588-3.042-20.968-6.766-20.968-2.127 0-4.007 2.81-5.248 7.227-1.241-4.416-3.121-7.227-5.231-7.227C3.031 1.516 0 10.888 0 22.476h3.014c0-10.763 1.658-19.47 3.724-19.47 2.066 0 3.741 8.05 3.741 17.98h2.997c0-9.93 1.684-17.98 3.75-17.98Z';

export const earlyJobs = [
  { key: 'c64', label: 'Crosswords on a C64', first: true, lesson: 'First build, sold door to door. “What can I make with what I have right now?”' },
  { key: 'lawns', label: 'Driveways & Lawns', lesson: 'Every season has a side hustle.' },
  { key: 'paper', label: 'Flyers & Papers', lesson: 'Show up. Every day. Rain or shine.' },
  { key: 'mcd', label: 'McDonald’s', lesson: 'Systems, speed and a smile.' },
  { key: 'blockbuster', label: 'Blockbuster', lesson: 'Be kind, please rewind.' },
  { key: 'callcentre', label: 'Call Centre Rep', lesson: 'Stay calm. Solve the problem.' },
  { key: 'serving', label: 'Serving Tables', lesson: 'Read the room before it reads you.' },
  { key: 'cater', label: 'Cater Waiter', lesson: 'Pour, smile, disappear.' },
  { key: 'ambassador', label: 'Brand Ambassador', lesson: 'Believe in it, or don’t sell it.' },
  { key: 'writer', label: 'Freelance Writer', lesson: 'Find the story. Cut the rest.' },
  { key: 'pm', label: 'Freelance Project Manager', lesson: 'Nothing’s done until it ships.' },
  { key: 'restaurants', label: 'Managing Restaurants', lesson: 'Run the floor. Run the numbers.' },
  { key: 'hotels', label: 'Hotels', lesson: 'Hospitality never clocks out.' },
  { key: 'oddjobs', label: 'Odd Jobs', lesson: 'Say yes. Figure it out.' },
];

export const hospitality: Scene[] = [
  { years: '2014–16', role: 'General Manager', where: 'Hawthorne Food & Drink', logo: '/images/logos/hawthorne.svg', logoClass: 'round', tag: 'Social enterprise', note: 'A downtown restaurant backed by United Way Toronto that trained people coming out of homelessness or off social assistance for full-time careers in hospitality.' },
  { years: '2016–17', role: 'Toronto Community Lead', where: 'Mealshare', logo: '/images/logos/mealshare.jpg', tag: 'Non-profit social enterprise', note: 'Partner restaurants donate a meal to someone in need every time a Mealshare item is ordered. Buy a meal, give a meal.' },
  { years: '2016–17', role: 'General Manager', where: 'Glad Day Bookshop', logo: '/images/logos/gladday.png', logoClass: 'padded', note: 'The oldest surviving LGBTQ bookstore in North America. Added a café and a bar.' },
];

// Not hospitality, not tech: its own touring company.
export const onTour = { years: '2016–2017', role: 'International Tour Director', where: 'Evolve Tours', note: 'Not quite hospitality, not quite tech: pure operations. Running the show, just with a passport.' };

export const tech: Scene[] = [
  { years: '2017–19', role: 'Merchant Success', where: 'Shopify' },
  { years: '2019–20', role: 'Product Expansion', where: 'Shopify' },
  { years: '2020–22', role: 'Senior Product Ops Manager → Product Ops Lead', where: 'Shopify', note: 'Product Management Certificate, Product School, 2021.' },
  { years: '2022–23', role: 'Staff Product Operations Manager', where: 'Tonal' },
  { years: '2023–24', role: 'Senior Product Operations Lead', where: 'Shopify' },
  { years: '2024–25', role: 'Director, Technical Operations & Chief of Staff to the CTO', where: 'Shopify' },
  { years: '2026–', role: 'Senior Director, Talent Operations & Technology', where: 'Wealthsimple', note: 'Building People Systems & Ops. Agentic workflows, human welcomes.' },
];

// Backstage passes for the big companies, oldest first. Colours are each brand's own.
export const shopifyBag = 'M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z';

export const companies = [
  { name: 'Shopify', bag: true, act: 'Debut', role: 'Merchant Success → Product Expansion → Product Ops Lead', years: '2017–2022', color: '#95bf47', ink: '#0f2a0f' },
  { name: 'Tonal', logo: '/images/logos/tonal.png', invert: true, role: 'Staff Product Operations Manager', years: '2022–23', color: '#141414', ink: '#fff' },
  { name: 'Shopify', bag: true, act: 'Encore', role: 'Senior Product Ops Lead → Director, Tech Ops & Chief of Staff to the CTO', years: '2023–2025', color: '#5e8e3e', ink: '#fff' },
  { name: 'Wealthsimple', logo: '/images/logos/wealthsimple.svg', role: 'Senior Director, Talent Ops & Technology', years: '2026–', color: '#f4f1ea', ink: '#111' },
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
  on: string; // ISO date of the talk; it moves to Previously the day after
};

export const speaking: Engagement[] = [
  { date: 'Nov 11, 2026 · 2:55pm', event: 'HRFest Canada', title: 'AI Ate the Training Department: What L&D Becomes Next', where: 'Rebel, Toronto', url: 'https://hrfest.ca', on: '2026-11-11' },
  { date: 'Nov 18, 2026', event: 'QT Qonference 2026', title: 'Who Gets to Lead the Future of Work?', where: 'Evergreen Brick Works, Toronto', url: 'https://queertech.org', img: '/images/qt-qonference-2026.jpg', on: '2026-11-18' },
  { date: '2026', event: 'HR in Tech Crawl', title: 'Remote, Hybrid, or Bust: Recruiting for the Future of Work', where: 'Toronto', on: '2026-06-01' }, // exact day unknown; only used for sorting
];

export const speakingTopics = ['AI, HR & the future of work', 'People systems & ops', 'Product operations', 'Queer leadership', 'Career pivots'];

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
  { title: 'POZ', year: '2024–25', credit: 'Director · Producer · Dramaturg', where: 'Toronto · Montreal', img: '/images/TT_POZ.jpg', laurel: 'Toronto Fringe Best New Play · Patron’s Pick', blurb: 'Mark Keller’s play. Toronto Star Critic’s Pick: “This is storytelling at its best.”' },
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

export const coachingQuestions = [
  'What would you try if you knew you couldn’t fail?',
  'What’s the real challenge here, for you?',
  'What’s already working that we can build on?',
  'What do you need to let go of?',
  'What does “good” look like a year from now?',
  'What’s your next small step?',
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
  { title: 'Coaching', status: 'In workshop', chair: true, blurb: 'Certification in progress. Mentors shaped every step of this career, so this is the next one.' },
  { title: 'Tuber or Not Tuber', status: 'In rehearsal', potato: true, blurb: 'An app about one of Nick’s favourite things: potatoes. Mashed, roasted, hashed, scalloped. Further details are under wraps (in foil).' },
];
