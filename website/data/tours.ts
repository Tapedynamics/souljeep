export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  maxPeople: string;
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
  visible: boolean;
  availability?: {
    days: string;
    timeSlot: string;
  };
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'teide-sunset',
    title: 'Teide Sunset',
    subtitle: 'Magia en el Volcán',
    description: 'Contempla el sol desapareciendo tras el horizonte desde la cima del volcán más alto de Europa. Vive un atardecer único en el Monte Teide, rodeado de colores surrealistas y vistas panorámicas increíbles que te dejarán sin aliento.',
    duration: '3-4 horas',
    maxPeople: 'Máximo 4 personas por Jeep',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      'Atardecer desde 2.000m de altitud',
      'Vistas panorámicas de Tenerife',
      'Conduce tu propio Jeep Wrangler',
      'Fotografía de paisajes volcánicos',
      'Experiencia en grupos pequeños'
    ],
    includes: [
      'Alquiler de Jeep Wrangler (3 horas)',
      'Depósito de combustible lleno',
      'Seguro a todo riesgo',
      'Guía profesional de ruta'
    ],
    itinerary: [
      {
        time: '17:00',
        title: 'Salida desde Costa Adeje',
        description: 'Encuentro en nuestra oficina en C.C. Aquamall. Breve orientación y revisión de seguridad de tu Jeep Wrangler.'
      },
      {
        time: '17:30',
        title: 'Ascenso al Parque Nacional del Teide',
        description: 'Recorrido escénico de 120km por serpenteantes carreteras de montaña y paisajes volcánicos únicos.'
      },
      {
        time: '18:30',
        title: 'Mirador del Atardecer',
        description: 'Llegada al lugar perfecto para contemplar el mágico atardecer sobre el Océano Atlántico y las islas vecinas.'
      },
      {
        time: '19:30',
        title: 'Regreso',
        description: 'Vuelta a Costa Adeje con recuerdos inolvidables y fotos increíbles.'
      }
    ],
    requirements: [
      'Edad mínima del conductor: 21 años',
      'Experiencia de conducción: 2+ años',
      'Carnet de conducir válido obligatorio',
      'Ropa de abrigo recomendada (la temperatura baja en altitud)',
      'Cámara muy recomendada'
    ],
    fareharbor: 'https://fareharbor.com/embeds/book/souljeep/items/',
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
    featured: true,
    visible: true
  },
  {
    id: '2',
    slug: 'teide-by-day',
    title: 'Teide de Día',
    subtitle: 'Aventura Volcánica',
    description: 'Embárcate en una aventura diurna de 120 km por el Parque Nacional del Teide. Descubre el imponente volcán, navega por serpenteantes carreteras de montaña y experimenta paisajes volcánicos únicos.',
    duration: '3-4 horas',
    maxPeople: 'Máximo 4 personas por Jeep',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      'Ruta de aventura de 120km',
      'Exploración del Parque Nacional del Teide',
      'Paisajes volcánicos de aspecto lunar',
      'Paradas fotográficas en miradores',
      'Conduce tu propio Wrangler'
    ],
    includes: [
      'Alquiler de Jeep Wrangler (3 horas)',
      'Depósito de combustible lleno',
      'Seguro a todo riesgo',
      'Guía profesional de ruta',
      'Acceso al Parque Nacional'
    ],
    itinerary: [
      {
        time: '10:00',
        title: 'Salida por la Mañana',
        description: 'Comienza tu aventura desde Costa Adeje con una orientación completa y revisión del vehículo.'
      },
      {
        time: '10:30',
        title: 'Ascenso a la Montaña',
        description: 'Conduce a través de diversos ecosistemas mientras subes desde el nivel del mar hasta más de 2.000 metros.'
      },
      {
        time: '11:30',
        title: 'Parque Nacional del Teide',
        description: 'Explora el sitio Patrimonio de la Humanidad de la UNESCO con sus formaciones volcánicas de otro mundo.'
      },
      {
        time: '12:30',
        title: 'Regreso a Costa Adeje',
        description: 'Completa el circuito con vistas espectaculares durante todo el camino de vuelta.'
      }
    ],
    requirements: [
      'Edad mínima del conductor: 21 años',
      'Experiencia de conducción: 2+ años',
      'Carnet de conducir válido obligatorio',
      'Protector solar y gafas de sol recomendados',
      'Ropa cómoda y calzado cerrado'
    ],
    fareharbor: 'https://fareharbor.com/embeds/book/souljeep/items/',
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
    featured: true,
    visible: false
  },
  {
    id: '3',
    slug: 'coastal-tour',
    title: 'Tour Costero',
    subtitle: 'Acantilados, Calas y Vistas al Mar',
    description: 'Recorre la espectacular costa sur de Tenerife en tu Jeep Wrangler privado. Descubre los impresionantes acantilados de Los Gigantes, calas escondidas y báñate en las aguas cristalinas del puerto de El Balito.',
    duration: '3-4 horas',
    maxPeople: 'Máximo 4 personas por Jeep',
    price: {
      oneTwo: 220,
      three: 240,
      four: 260,
    },
    highlights: [
      'Vistas de los acantilados de Los Gigantes',
      'Baño opcional en el puerto de El Balito',
      'Recorrido escénico por la costa',
      'Playas y calas escondidas',
      'Panorámicas del Océano Atlántico',
      'Oportunidades fotográficas frente al mar'
    ],
    includes: [
      'Alquiler de Jeep Wrangler (3 horas)',
      'Depósito de combustible lleno',
      'Seguro a todo riesgo',
      'Guía profesional de ruta'
    ],
    itinerary: [
      {
        time: '10:00',
        title: 'Salida por la Costa',
        description: 'Comienza tu viaje desde Costa Adeje por la impresionante costa occidental.'
      },
      {
        time: '10:45',
        title: 'Acantilados de Los Gigantes',
        description: 'Parada para admirar los majestuosos acantilados de 600 metros que emergen del océano.'
      },
      {
        time: '11:15',
        title: 'Recorrido Escénico por la Costa',
        description: 'Navega por serpenteantes carreteras costeras con impresionantes vistas al mar en cada curva.'
      },
      {
        time: '11:45',
        title: 'Puerto de El Balito',
        description: 'Llegada al pintoresco puerto. Baño opcional y relax en aguas cristalinas.'
      },
      {
        time: '12:30',
        title: 'Regreso',
        description: 'Vuelta a Costa Adeje por la hermosa costa.'
      }
    ],
    requirements: [
      'Edad mínima del conductor: 21 años',
      'Experiencia de conducción: 2+ años',
      'Carnet de conducir válido obligatorio',
      'Bañador y toalla recomendados',
      'Protector solar imprescindible'
    ],
    fareharbor: 'https://fareharbor.com/embeds/book/souljeep/items/',
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
    featured: true,
    visible: true,
    availability: {
      days: 'Martes y Jueves',
      timeSlot: 'Solo por la mañana'
    }
  }
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find(tour => tour.slug === slug);
};

export const getVisibleTours = (): Tour[] => {
  return tours.filter(tour => tour.visible);
};

export const getFeaturedTours = (): Tour[] => {
  return tours.filter(tour => tour.featured && tour.visible);
};
