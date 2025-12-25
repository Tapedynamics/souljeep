export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: {
    oneTwo: number;
    three: number;
    four: number;
  };
  highlights: string[];
  includes: string[];
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  requirements: string[];
  fareharbor: string;
  images: {
    hero: string;
    gallery: string[];
  };
  category: 'teide' | 'coastal' | 'adventure';
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'teide-sunset',
    title: 'Teide Sunset',
    subtitle: 'Magic on the Volcano',
    description: 'Watch the sun dip behind the horizon from the summit of Europe\'s highest volcano. Experience a once-in-a-lifetime sunset on Mount Teide, surrounded by surreal colors and incredible panoramic views that will take your breath away.',
    duration: '3 hours',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      'Sunset from 2,000m altitude',
      'Panoramic views of Tenerife',
      'Drive your own Jeep Wrangler',
      'Volcanic landscape photography',
      'Small group experience'
    ],
    includes: [
      'Jeep Wrangler rental (3 hours)',
      'Full fuel tank',
      'Comprehensive insurance',
      'Professional route guidance'
    ],
    itinerary: [
      {
        time: '17:00',
        title: 'Departure from Costa Adeje',
        description: 'Meet at our office in C.C. Aquamall. Brief orientation and safety check of your Jeep Wrangler.'
      },
      {
        time: '17:30',
        title: 'Ascent to Teide National Park',
        description: '120km scenic drive through winding mountain roads and unique volcanic landscapes.'
      },
      {
        time: '18:30',
        title: 'Sunset Viewing Point',
        description: 'Arrive at the perfect spot to watch the magical sunset over the Atlantic Ocean and neighboring islands.'
      },
      {
        time: '19:30',
        title: 'Return Journey',
        description: 'Drive back to Costa Adeje with unforgettable memories and amazing photos.'
      }
    ],
    requirements: [
      'Minimum driver age: 21 years',
      'Driving experience: 2+ years',
      'Valid driver\'s license required',
      'Warm clothing recommended (temperature drops at altitude)',
      'Camera highly recommended'
    ],
    fareharbor: 'https://fareharbor.com/book/souljeep/items/525897/?full-items=yes',
    images: {
      hero: '/images/tours/teide-sunset/hero.jpg',
      gallery: [
        '/images/tours/teide-sunset/gallery-1.jpg',
        '/images/tours/teide-sunset/gallery-2.jpg',
        '/images/tours/teide-sunset/gallery-3.jpg',
        '/images/tours/teide-sunset/gallery-4.jpg',
      ]
    },
    category: 'teide',
    featured: true
  },
  {
    id: '2',
    slug: 'teide-by-day',
    title: 'Teide By Day',
    subtitle: 'Volcanic Adventure',
    description: 'Embark on a 120 km daytime adventure across Teide National Park. Discover the towering volcano, navigate winding mountain roads, and experience unique volcanic landscapes.',
    duration: '3 hours',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      '120km adventure route',
      'Teide National Park exploration',
      'Lunar-like volcanic landscapes',
      'Photo stops at scenic viewpoints',
      'Drive your own Wrangler'
    ],
    includes: [
      'Jeep Wrangler rental (3 hours)',
      'Full fuel tank',
      'Comprehensive insurance',
      'Professional route guidance',
      'National Park access'
    ],
    itinerary: [
      {
        time: '10:00',
        title: 'Morning Departure',
        description: 'Start your adventure from Costa Adeje with a full briefing and vehicle check.'
      },
      {
        time: '10:30',
        title: 'Mountain Ascent',
        description: 'Drive through diverse ecosystems as you climb from sea level to 2,000+ meters.'
      },
      {
        time: '11:30',
        title: 'Teide National Park',
        description: 'Explore the UNESCO World Heritage site with its otherworldly volcanic formations.'
      },
      {
        time: '12:30',
        title: 'Return to Costa Adeje',
        description: 'Complete the circuit with spectacular views all the way back.'
      }
    ],
    requirements: [
      'Minimum driver age: 21 years',
      'Driving experience: 2+ years',
      'Valid driver\'s license required',
      'Sunscreen and sunglasses recommended',
      'Comfortable clothing and closed shoes'
    ],
    fareharbor: 'https://fareharbor.com/book/souljeep/items/525898/?full-items=yes',
    images: {
      hero: '/images/tours/teide-day/hero.jpg',
      gallery: [
        '/images/tours/teide-day/gallery-1.jpg',
        '/images/tours/teide-day/gallery-2.jpg',
        '/images/tours/teide-day/gallery-3.jpg',
        '/images/tours/teide-day/gallery-4.jpg',
      ]
    },
    category: 'teide',
    featured: true
  },
  {
    id: '3',
    slug: 'coastal-tour',
    title: 'Coastal Tour',
    subtitle: 'Cliffs, Coves, and Ocean Views',
    description: 'Cruise along Tenerife\'s spectacular southern coastline in your private Jeep Wrangler. Discover dramatic Los Gigantes cliffs, hidden coves, and swim in the crystal-clear waters of El Balito harbor.',
    duration: '3 hours',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      'Los Gigantes cliff views',
      'Optional swimming at El Balito harbor',
      'Coastal scenic drive',
      'Hidden beaches and coves',
      'Atlantic Ocean panoramas',
      'Beachfront photo opportunities'
    ],
    includes: [
      'Jeep Wrangler rental (3 hours)',
      'Full fuel tank',
      'Comprehensive insurance',
      'Professional route guidance'
    ],
    itinerary: [
      {
        time: '10:00',
        title: 'Coastal Departure',
        description: 'Begin your journey from Costa Adeje along the stunning western coastline.'
      },
      {
        time: '10:45',
        title: 'Los Gigantes Cliffs',
        description: 'Stop to admire the majestic 600-meter high cliffs rising from the ocean.'
      },
      {
        time: '11:15',
        title: 'Scenic Coastal Drive',
        description: 'Navigate winding coastal roads with breathtaking ocean views at every turn.'
      },
      {
        time: '11:45',
        title: 'El Balito Harbor',
        description: 'Arrive at the picturesque harbor. Optional swimming and relaxation in crystal-clear waters.'
      },
      {
        time: '12:30',
        title: 'Return Journey',
        description: 'Drive back to Costa Adeje along the beautiful coastline.'
      }
    ],
    requirements: [
      'Minimum driver age: 21 years',
      'Driving experience: 2+ years',
      'Valid driver\'s license required',
      'Swimwear and towel recommended',
      'Sunscreen essential'
    ],
    fareharbor: 'https://fareharbor.com/book/souljeep/items/525899/?full-items=yes',
    images: {
      hero: '/images/tours/coastal/hero.jpg',
      gallery: [
        '/images/tours/coastal/gallery-1.jpg',
        '/images/tours/coastal/gallery-2.jpg',
        '/images/tours/coastal/gallery-3.jpg',
        '/images/tours/coastal/gallery-4.jpg',
      ]
    },
    category: 'coastal',
    featured: true
  }
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find(tour => tour.slug === slug);
};

export const getFeaturedTours = (): Tour[] => {
  return tours.filter(tour => tour.featured);
};
