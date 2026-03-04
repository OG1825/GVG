export interface Event {
  title: string;
  date: string; // ISO 8601 date
  location: string;
  type: 'Build Night' | 'Demo Day' | 'Talk' | 'Pitch Night';
  description: string;
  link?: string;
}

export const events: Event[] = [
  {
    title: 'March Build Night: AI Tools',
    date: '2026-03-15T18:00:00Z',
    location: 'Innovation Hub, Room 201',
    type: 'Build Night',
    description: 'Join us for a casual build night exploring AI frameworks and tools. Bring your ideas and collaborate with other builders.',
    link: 'https://discord.gg/example'
  },
  {
    title: 'Spring Demo Day',
    date: '2026-03-29T17:00:00Z',
    location: 'Main Auditorium',
    type: 'Demo Day',
    description: 'Watch completed bounties come to life. Winners showcase their work, meet investors, and celebrate their achievements.',
    link: 'https://forms.example.com/rsvp'
  },
  {
    title: 'Guest Talk: Building in Public',
    date: '2026-04-10T16:30:00Z',
    location: 'Library Lecture Theatre',
    type: 'Talk',
    description: 'Local founder discusses building in public, gaining early customers, and scaling startup ideas. Q&A session included.'
  },
  {
    title: 'Pitch Night: Funded Founders',
    date: '2026-04-24T18:30:00Z',
    location: 'Innovation Hub, Main Hall',
    type: 'Pitch Night',
    description: 'Hear pitches from previously-funded GVG projects and learn what made them successful. Network with successful builders.',
    link: 'https://discord.gg/example'
  },
  {
    title: 'April Build Night: Web3 Fundamentals',
    date: '2026-04-05T18:00:00Z',
    location: 'Innovation Hub, Room 201',
    type: 'Build Night',
    description: 'Technical workshop on Web3 fundamentals, smart contracts, and blockchain applications. No prior experience needed.'
  },
  {
    title: 'Monthly Sync: Bounty Updates',
    date: '2026-03-08T12:00:00Z',
    location: 'Innovation Hub, Café',
    type: 'Talk',
    description: 'Quick catch-up on new bounties, community updates, and upcoming opportunities. Casual, open to everyone.'
  }
];
