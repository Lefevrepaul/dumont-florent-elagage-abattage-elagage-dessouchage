export const siteConfig = {
  company: {
    name: "DUMONT Florent Élagage",
    tagline: "Spécialiste de l'élagage, abattage et dessouchage",
    description: "Expert en élagage, abattage et dessouchage à Étalondes et en Normandie. Forte de 15 ans d'expérience et plus de 120 projets réalisés, notre entreprise vous garantit un service professionnel et sécurisé pour l'entretien de vos arbres et espaces verts."
  },
  contact: {
    phoneDisplay: "06 87 42 57 58",
    phoneE164: "+33687425758",
    email: "Nous contacter par formulaire"
  },
  location: {
    city: "Étalondes",
    region: "Normandie",
    radiusKm: 30,
    coords: {
      lat: 50.0325565,
      lng: 1.392484
    },
    villes: [
      "Étalondes",
      "Le Tréport",
      "Mers-les-Bains",
      "Eu",
      "Ault",
      "Friville-Escarbotin",
      "Gamaches",
      "Woignarue",
      "Saint-Quentin-la-Motte-Croix-au-Bailly",
      "Criel-sur-Mer",
      "Beauchamps",
      "Incheville"
    ],
    realisationsVilles: [
      "Étalondes",
      "Le Tréport",
      "Eu",
      "Mers-les-Bains",
      "Ault",
      "Friville-Escarbotin"
    ],
    temoignagesVilles: [
      "Étalondes",
      "Le Tréport",
      "Eu"
    ]
  },
  stats: {
    projectsCount: "120+",
    yearsExperience: "15 ans"
  },
  googleReviews: {
    rating: "4.5",
    count: 13,
    searchQuery: "DUMONT+Florent+Élagage+Étalondes+avis"
  },
  seo: {
    titleTemplate: "%s | DUMONT Florent Élagage - Étalondes",
    defaultTitle: "DUMONT Florent Élagage - Abattage, Élagage et Dessouchage à Étalondes",
    metaDescription: "Expert en élagage, abattage et dessouchage à Étalondes et en Normandie. 15 ans d'expérience, 120+ projets réalisés. Note Google 4.5/5. Devis gratuit au 06 87 42 57 58.",
    url: "https://dumont-elagage-etalondes.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;