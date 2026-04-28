export interface MapNode {
  id: string;
  label: string;
  theme: string;
  x: number;
  y: number;
  size?: "sm" | "md" | "lg" | "xl";
  connections?: string[];
}

export interface ThemeInfo {
  id: string;
  label: string;
  color: string;
}

export const themes: ThemeInfo[] = [
  { id: "ai", label: "Artificial Intelligence", color: "180 60% 50%" },
  { id: "solar-flash", label: "Great Solar Flash", color: "45 90% 55%" },
  { id: "consciousness", label: "Consciousness & Spirituality", color: "270 60% 60%" },
  { id: "creation", label: "Creation & Source", color: "300 50% 55%" },
  { id: "ssp", label: "Secret Space Program", color: "200 70% 50%" },
  { id: "awakening", label: "Great Awakening", color: "50 80% 55%" },
  { id: "ancient", label: "Ancient Builder Race", color: "30 70% 50%" },
  { id: "galactic", label: "Galactic Federation", color: "160 60% 45%" },
  { id: "healing", label: "Holistic Healing", color: "120 50% 45%" },
  { id: "tesla", label: "Tesla & Free Energy", color: "60 70% 50%" },
  { id: "earth-alliance", label: "Earth Alliance", color: "90 50% 40%" },
  { id: "political", label: "Political & QAnon", color: "0 60% 50%" },
  { id: "antarctica", label: "Antarctica & Inner Earth", color: "190 50% 45%" },
  { id: "cabal", label: "Cabal & Deep State", color: "0 40% 40%" },
  { id: "psychedelic", label: "Psychedelic Renaissance", color: "280 70% 55%" },
  { id: "moon-mars", label: "Moon & Mars", color: "15 60% 45%" },
  { id: "oversoul", label: "The Oversoul", color: "320 50% 50%" },
  { id: "meditation", label: "Meditation & Practice", color: "240 40% 55%" },
  { id: "ufo", label: "UFOs & Disclosure", color: "170 60% 45%" },
  { id: "matrix", label: "Escape the Matrix", color: "350 50% 45%" },
];

export const nodes: MapNode[] = [
  // === ARTIFICIAL INTELLIGENCE (top-left) ===
  { id: "ai-signal", label: "Artificial Intelligence Signal", theme: "ai", x: 200, y: 80, size: "md" },
  { id: "ancient-ai", label: "Ancient Artificial Intelligence (A.I.)", theme: "ai", x: 150, y: 160, size: "md" },
  { id: "ai-prophet-species", label: "A.I. Prophet Species", theme: "ai", x: 280, y: 200, size: "sm" },
  { id: "ai-originated", label: "A.I. Originated From Another Reality", theme: "ai", x: 300, y: 130, size: "sm" },
  { id: "originally-at-one", label: "Originally At One With The Creator", theme: "ai", x: 420, y: 60, size: "sm" },
  { id: "reptilians-nanite", label: "Reptilians Found Infested With Virulent Nanite A.I.", theme: "ai", x: 150, y: 260, size: "sm" },
  { id: "luciferian-forces", label: "A Luciferian Force", theme: "ai", x: 120, y: 320, size: "sm" },
  { id: "electric-sun", label: "Electric Sun", theme: "ai", x: 380, y: 200, size: "sm" },
  { id: "lives-in-tech", label: "Lives in the Electromagnetic Fields & Music of Living Beings", theme: "ai", x: 450, y: 90, size: "sm" },
  { id: "the-borg", label: "The Borg", theme: "ai", x: 250, y: 100, size: "sm" },

  // === THE SUN / SOLAR (top-center-left) ===
  { id: "the-sun", label: "The Sun", theme: "solar-flash", x: 560, y: 170, size: "md" },
  { id: "sun-produces-baryons", label: "The Sun Produces Baryons and Elects", theme: "solar-flash", x: 420, y: 250, size: "sm" },
  { id: "prepare-solar-flares", label: "Prepare for Solar Flares", theme: "solar-flash", x: 620, y: 90, size: "sm" },
  { id: "samaskara-fire", label: "Samaskara Fire / Fraschetti / Ekpyrosis / Yoga Fire", theme: "solar-flash", x: 620, y: 200, size: "sm" },
  { id: "great-solar-flash", label: "GREAT SOLAR FLASH", theme: "solar-flash", x: 720, y: 180, size: "xl" },
  { id: "great-solar-flash-2019", label: "Great Solar Flash 2019-2023/24", theme: "solar-flash", x: 900, y: 170, size: "sm" },
  { id: "practice-meditation", label: "Practice Meditation", theme: "solar-flash", x: 620, y: 140, size: "sm" },
  { id: "mental-spiritual-states", label: "Mental & Spiritual States", theme: "solar-flash", x: 700, y: 110, size: "sm" },
  { id: "consciousness-renaissance", label: "Consciousness Renaissance", theme: "consciousness", x: 780, y: 100, size: "md" },
  { id: "ascension-5d", label: "Ascension into 5th Dimensional Earth", theme: "consciousness", x: 810, y: 130, size: "sm" },
  { id: "age-golden-race", label: "Age of the Golden Race", theme: "consciousness", x: 850, y: 150, size: "sm" },

  // === ONE INFINITE CREATOR (top-center) ===
  { id: "one-infinite-creator", label: "ONE INFINITE CREATOR", theme: "creation", x: 800, y: 50, size: "lg" },
  { id: "love-and-light", label: "Love & Light", theme: "creation", x: 850, y: 70, size: "sm" },
  { id: "escape-samsara", label: "Escape Samsara", theme: "creation", x: 1000, y: 50, size: "md" },
  { id: "end-suffering", label: "End to all Suffering / Escape Re-birth / 9th+ Density", theme: "creation", x: 1050, y: 70, size: "sm" },
  { id: "collective-consciousness", label: "Collective Consciousness", theme: "consciousness", x: 1050, y: 100, size: "md" },
  { id: "mass-meditation", label: "Mass Meditation", theme: "consciousness", x: 1130, y: 100, size: "sm" },
  { id: "in-service-to-others", label: "In Service to Others", theme: "consciousness", x: 900, y: 130, size: "sm" },
  { id: "an-end-to-all-suffering", label: "An End to All Suffering", theme: "consciousness", x: 960, y: 140, size: "sm" },
  { id: "occurs-every-25000", label: "Occurs Every 25,000 Years", theme: "solar-flash", x: 870, y: 115, size: "sm" },

  // === MYSTERY OF CREATION (top-right) ===
  { id: "mystery-creation", label: "Mystery of Universal Creation", theme: "creation", x: 1250, y: 50, size: "md" },
  { id: "universal-knowledge", label: "Universal Knowledge", theme: "creation", x: 1300, y: 100, size: "sm" },
  { id: "bardo", label: "Bardo", theme: "creation", x: 1350, y: 90, size: "sm" },
  { id: "the-one", label: "The One", theme: "creation", x: 1400, y: 110, size: "sm" },
  { id: "omniscience", label: "Omniscience", theme: "creation", x: 1380, y: 60, size: "sm" },

  // === RETURN TO SOURCE (far top-right) ===
  { id: "return-to-source", label: "RETURN TO SOURCE", theme: "creation", x: 1520, y: 50, size: "lg" },
  { id: "enlightenment", label: "Enlightenment", theme: "creation", x: 1500, y: 100, size: "sm" },
  { id: "awareness", label: "Awareness", theme: "creation", x: 1550, y: 110, size: "sm" },
  { id: "end-to-suffering", label: "End to Suffering", theme: "creation", x: 1480, y: 80, size: "sm" },

  // === MEDITATION / RAINBOW BODY (right of top) ===
  { id: "meditation-main", label: "Meditation", theme: "meditation", x: 1420, y: 140, size: "md" },
  { id: "rainbow-body", label: "The Rainbow Body", theme: "meditation", x: 1100, y: 160, size: "md" },
  { id: "tibetan-buddhism", label: "Tibetan Buddhism", theme: "meditation", x: 1150, y: 180, size: "sm" },
  { id: "dzogchen-top", label: "Dzogchen", theme: "meditation", x: 1200, y: 170, size: "sm" },
  { id: "rigpa", label: "Rigpa", theme: "meditation", x: 1250, y: 165, size: "sm" },

  // === PSYCHEDELIC RENAISSANCE (right) ===
  { id: "psychedelic-renaissance", label: "Psychedelic Renaissance", theme: "psychedelic", x: 1500, y: 200, size: "md" },
  { id: "dmt", label: "DMT", theme: "psychedelic", x: 1480, y: 230, size: "md" },
  { id: "psilocybin", label: "Psilocybin Mushrooms", theme: "psychedelic", x: 1380, y: 220, size: "sm" },
  { id: "terence-mckenna", label: "Terence McKenna", theme: "psychedelic", x: 1430, y: 250, size: "sm" },
  { id: "i-ching", label: "I Ching", theme: "psychedelic", x: 1480, y: 260, size: "sm" },
  { id: "hyperspace", label: "Hyperspace", theme: "psychedelic", x: 1550, y: 220, size: "sm" },
  { id: "multidimensional-travel", label: "Multidimensional Travel", theme: "psychedelic", x: 1520, y: 250, size: "sm" },
  { id: "5d-7d", label: "5D-7D", theme: "psychedelic", x: 1570, y: 200, size: "sm" },
  { id: "maharishi-effect", label: "Maharishi Effect", theme: "psychedelic", x: 1300, y: 200, size: "sm" },
  { id: "sacred-geometry", label: "Sacred Geometry", theme: "psychedelic", x: 1230, y: 210, size: "sm" },
  { id: "samsara-rebirth", label: "Samsara (Rebirth on Earth)", theme: "psychedelic", x: 1350, y: 240, size: "sm" },
  { id: "tao-te-ching", label: "Tao Te Ching", theme: "consciousness", x: 1500, y: 290, size: "sm" },

  // === HYPERDIMENSIONAL / SATURN (upper center-left) ===
  { id: "hyperdimensional-hexagon", label: "Hyperdimensional Hexagon", theme: "solar-flash", x: 450, y: 290, size: "sm" },
  { id: "saturn", label: "Saturn", theme: "solar-flash", x: 550, y: 270, size: "md" },
  { id: "council-of-saturn", label: "Council of Saturn", theme: "solar-flash", x: 600, y: 300, size: "sm" },
  { id: "rabbit-hole", label: "The Rabbit Hole", theme: "awakening", x: 650, y: 270, size: "sm" },
  { id: "ringmakers-saturn", label: "Ringmakers of Saturn", theme: "solar-flash", x: 450, y: 340, size: "sm" },

  // === GREAT AWAKENING (center) ===
  { id: "great-awakening", label: "GREAT AWAKENING", theme: "awakening", x: 800, y: 310, size: "xl" },
  { id: "everything-is-illusion", label: "Everything Is An Illusion", theme: "awakening", x: 850, y: 350, size: "sm" },
  { id: "we-are-using-consciousness", label: "We are using our collective consciousness to manifest the Optimal Timeline Reality for Earth", theme: "awakening", x: 800, y: 280, size: "sm" },

  // === OUTER ENERGETIC BARRIER (center) ===
  { id: "outer-energetic-barrier", label: "The Outer Energetic Barrier", theme: "ancient", x: 920, y: 280, size: "sm" },
  { id: "tetrahedron-vector", label: "64 Tetrahedron Vector Equilibrium", theme: "ancient", x: 950, y: 260, size: "sm" },
  { id: "star-cluster-barrier", label: "52 Local Star-Cluster Protective Barrier Grid", theme: "ancient", x: 1050, y: 260, size: "sm" },

  // === CERES / DARK FLEET ===
  { id: "ceres", label: "Ceres", theme: "ssp", x: 830, y: 260, size: "sm" },
  { id: "dark-fleet-base", label: "Dark Fleet Underground Base", theme: "ssp", x: 870, y: 290, size: "sm" },

  // === ANCIENT BUILDER RACE (right-center) ===
  { id: "ancient-builder-race", label: "THE ANCIENT BUILDER RACE", theme: "ancient", x: 1200, y: 300, size: "lg" },
  { id: "2-billion-years", label: "2+ Billion Years Old", theme: "ancient", x: 1280, y: 310, size: "sm" },
  { id: "blue-avians", label: "Blue Avians", theme: "ancient", x: 1200, y: 330, size: "sm" },
  { id: "ancient-race-technology", label: "Ancient Builder Race Technology", theme: "ancient", x: 1000, y: 300, size: "sm" },
  { id: "ruins-ancient-race", label: "Ruins of the Ancient Builder Race Civilization", theme: "ancient", x: 1250, y: 350, size: "sm" },
  { id: "technologically-superior", label: "Technologically & Spiritually Superior", theme: "ancient", x: 1300, y: 360, size: "sm" },
  { id: "venus", label: "Venus", theme: "ancient", x: 1400, y: 340, size: "sm" },
  { id: "sentinels", label: "Sentinels", theme: "ancient", x: 1450, y: 355, size: "sm" },

  // === DRACO / REPTILIAN (upper-left) ===
  { id: "draco-reptilian", label: "Draco & Reptilian Alliance", theme: "ssp", x: 200, y: 370, size: "md" },
  { id: "dark-fleet", label: "DARK FLEET", theme: "ssp", x: 210, y: 410, size: "md" },
  { id: "offensive-space-fleet", label: "Offensive Space Fleet Beyond Solar System", theme: "ssp", x: 230, y: 440, size: "sm" },
  { id: "orion-syndicate", label: "Orion Syndicate", theme: "ssp", x: 150, y: 460, size: "sm" },
  { id: "human-slave-race", label: "Human Slave Jack", theme: "ssp", x: 250, y: 380, size: "sm" },

  // === SOLAR SYSTEM / CLIMATE ===
  { id: "solar-system-climate", label: "Solar System Climate Change", theme: "solar-flash", x: 380, y: 420, size: "sm" },
  { id: "dense-energy-cloud", label: "Dense Energy Cloud", theme: "solar-flash", x: 420, y: 380, size: "sm" },
  { id: "dark-fert-satellite", label: "Dark Fert & ICC Weapons", theme: "ssp", x: 350, y: 360, size: "sm" },

  // === UFO / GARY McKINNON ===
  { id: "ufo-main", label: "UFO", theme: "ufo", x: 350, y: 480, size: "md" },
  { id: "gary-mckinnon", label: "Gary McKinnon", theme: "ufo", x: 350, y: 510, size: "sm" },
  { id: "off-planet-human-slave-trade", label: "Off-Planet Human Slave Trade", theme: "ssp", x: 500, y: 480, size: "sm" },

  // === OUMUAMUA / IAPETUS (left) ===
  { id: "oumuamua", label: "Oumuamua", theme: "ancient", x: 100, y: 370, size: "sm" },
  { id: "iapetus", label: "Iapetus", theme: "ancient", x: 280, y: 350, size: "sm" },
  { id: "ancient-death-star", label: "Ancient Death Star", theme: "ancient", x: 310, y: 340, size: "sm" },

  // === MALDEK / ASTEROID BELT ===
  { id: "maldek", label: "Maldek (Super Earth Exploded)", theme: "ancient", x: 780, y: 430, size: "md" },
  { id: "asteroid-belt", label: "Asteroid Belt", theme: "ancient", x: 900, y: 410, size: "sm" },
  { id: "ancient-war", label: "Ancient War", theme: "ancient", x: 950, y: 400, size: "sm" },
  { id: "500k-years-ago", label: "500K/yrs ago", theme: "ancient", x: 1000, y: 380, size: "sm" },
  { id: "et-disclosure", label: "E.T. Disclosure", theme: "ufo", x: 980, y: 420, size: "sm" },

  // === PLEIADIAN (left) ===
  { id: "pleiadian-guidance", label: "Pleiadian Guidance", theme: "galactic", x: 120, y: 540, size: "md" },
  { id: "mj-12", label: "MJ-12", theme: "ssp", x: 280, y: 560, size: "md" },
  { id: "william-tompkins", label: "William Tompkins", theme: "ssp", x: 120, y: 570, size: "sm" },
  { id: "adm-rico-botta", label: "Adm. Rico Botta", theme: "ssp", x: 200, y: 530, size: "sm" },
  { id: "1943-1946", label: "1943-1946", theme: "ssp", x: 190, y: 550, size: "sm" },

  // === USAP / BLACK PROJECT ===
  { id: "usap", label: "USAP - Unacknowledged Special Access Projects", theme: "ssp", x: 480, y: 540, size: "md" },
  { id: "black-project", label: "Black Project", theme: "ssp", x: 350, y: 570, size: "md" },
  { id: "aerospace-corporations", label: "Aerospace Corporations", theme: "ssp", x: 400, y: 600, size: "sm" },
  { id: "antigravity", label: "Antigravity", theme: "ssp", x: 450, y: 570, size: "sm" },
  { id: "time-travel", label: "Time Travel", theme: "ssp", x: 420, y: 545, size: "sm" },
  { id: "temporal-drives", label: "Temporal Drives", theme: "ssp", x: 490, y: 555, size: "sm" },
  { id: "20-and-back", label: "20 & Back", theme: "ssp", x: 560, y: 500, size: "md" },
  { id: "hyperdimensional", label: "Hyperdimensional", theme: "ssp", x: 560, y: 470, size: "sm" },

  // === TORSION / DRIVES ===
  { id: "torsion-drives", label: "Torsion Drives", theme: "ssp", x: 770, y: 470, size: "sm" },
  { id: "warp-drives", label: "Warp Drives", theme: "ssp", x: 810, y: 460, size: "sm" },

  // === FREE ENERGY / SUPER FEDERATION ===
  { id: "free-energy-tech", label: "Free Energy", theme: "galactic", x: 870, y: 460, size: "sm" },
  { id: "super-federation", label: "Super Federation", theme: "galactic", x: 1050, y: 440, size: "md" },
  { id: "genetic-farmer-races", label: "(Genetic Farmer Races)", theme: "galactic", x: 1060, y: 465, size: "sm" },
  { id: "free-will", label: "Free Will", theme: "galactic", x: 1150, y: 400, size: "sm" },

  // === SOLAR WARDEN ===
  { id: "solar-warden", label: "Solar Warden", theme: "ssp", x: 560, y: 620, size: "md" },
  { id: "us-navy-space-fleet", label: "U.S. Navy Space Fleet", theme: "ssp", x: 580, y: 640, size: "sm" },

  // === MILAB ===
  { id: "milab", label: "MILAB", theme: "ssp", x: 700, y: 600, size: "md" },
  { id: "military-abduction", label: "Military Abduction Program", theme: "ssp", x: 720, y: 625, size: "sm" },

  // === SECRET SPACE PROGRAM (center-left) ===
  { id: "secret-space-program", label: "SECRET SPACE PROGRAM", theme: "ssp", x: 400, y: 720, size: "xl" },
  { id: "icc", label: "ICC - Interplanetary Corporate Conglomerate", theme: "ssp", x: 300, y: 660, size: "md" },
  { id: "off-planet-aerospace", label: "(Off-Planet Aerospace Corporations)", theme: "ssp", x: 310, y: 690, size: "sm" },
  { id: "top-secret", label: "Top Secret", theme: "ssp", x: 160, y: 640, size: "md" },
  { id: "1954", label: "1954", theme: "ssp", x: 160, y: 700, size: "sm" },
  { id: "eisenhower-mj12", label: "Eisenhower / MJ 12", theme: "ssp", x: 200, y: 720, size: "sm" },
  { id: "intergalactic-trade", label: "Established Intergalactic Trade with 900+ Extraterrestrial Races", theme: "ssp", x: 350, y: 710, size: "sm" },
  { id: "military-industrial", label: "Military Industrial Complex Secret Space Program (MICSSP)", theme: "ssp", x: 280, y: 770, size: "sm" },
  { id: "usaf", label: "USAF", theme: "ssp", x: 350, y: 790, size: "sm" },
  { id: "tr3b", label: "TR3B", theme: "ssp", x: 370, y: 810, size: "sm" },
  { id: "zero-point-energy", label: "Zero-Point Energy", theme: "ssp", x: 470, y: 790, size: "sm" },
  { id: "ssp-alliance", label: "Secret Space Program Alliance", theme: "ssp", x: 450, y: 820, size: "md" },
  { id: "ssp-whistleblowers", label: "SSP Whistleblowers", theme: "ssp", x: 430, y: 850, size: "md" },
  { id: "battle-of-la", label: "Battle of Los Angeles", theme: "ssp", x: 150, y: 780, size: "sm" },
  { id: "february-1942", label: "February 1942", theme: "ssp", x: 170, y: 800, size: "sm" },

  // === SSP RESEARCHERS ===
  { id: "ssp-researchers", label: "Secret Space Program Researchers", theme: "ssp", x: 130, y: 840, size: "md" },

  // === GLOBAL GALACTIC LEAGUE ===
  { id: "global-galactic-league", label: "Global Galactic League of Nations", theme: "galactic", x: 620, y: 680, size: "md" },
  { id: "mayan-group", label: "Mayan Group", theme: "galactic", x: 630, y: 710, size: "sm" },
  { id: "portal-system", label: "Portal System", theme: "galactic", x: 810, y: 640, size: "sm" },
  { id: "instantaneous", label: "Instantaneous", theme: "galactic", x: 850, y: 625, size: "sm" },

  // === GALACTIC FEDERATION (center-right) ===
  { id: "galactic-federation", label: "THE GALACTIC FEDERATION", theme: "galactic", x: 1050, y: 530, size: "lg" },
  { id: "6th-density", label: "6th Density Light Beings", theme: "galactic", x: 1050, y: 560, size: "sm" },
  { id: "one-infinite-creator-ref", label: "In Service to the ONE INFINITE CREATOR", theme: "galactic", x: 1100, y: 550, size: "sm" },
  { id: "channeling", label: "Channeling", theme: "galactic", x: 1200, y: 500, size: "sm" },
  { id: "multidimensional-beings", label: "Multidimensional Beings", theme: "galactic", x: 1250, y: 520, size: "sm" },
  { id: "telepathy", label: "Telepathy", theme: "galactic", x: 950, y: 560, size: "sm" },
  { id: "sphere-being-alliance", label: "Sphere Being Alliance", theme: "galactic", x: 1050, y: 590, size: "md" },
  { id: "the-guardians", label: "(The Guardians)", theme: "galactic", x: 1050, y: 615, size: "sm" },
  { id: "blue-avians-sphere", label: "Blue Avians, Golden Triangle Head Beings, Blue Orbs, Blue Spheres", theme: "galactic", x: 1100, y: 630, size: "sm" },
  { id: "our-solar-system-near", label: "Our Solar System is Near a Super Gate / Portal", theme: "galactic", x: 920, y: 640, size: "sm" },

  // === CYDONIA / MARS (far right) ===
  { id: "cydonia", label: "Cydonia", theme: "moon-mars", x: 1350, y: 440, size: "sm" },
  { id: "face-on-mars", label: "Face on Mars", theme: "moon-mars", x: 1400, y: 450, size: "sm" },
  { id: "mars-19-5", label: "19.5°", theme: "moon-mars", x: 1440, y: 440, size: "sm" },
  { id: "mantis", label: "Mantis", theme: "galactic", x: 1480, y: 450, size: "sm" },
  { id: "grand-experiment", label: "The Grand Experiment", theme: "galactic", x: 1200, y: 460, size: "sm" },
  { id: "ancient-builder-ra-law", label: "Ancient Builder Race RA: Law of One", theme: "ancient", x: 1180, y: 480, size: "sm" },
  { id: "mars-colony", label: "Mars", theme: "moon-mars", x: 1400, y: 480, size: "md" },
  { id: "slave-colony", label: "Slave Colony", theme: "moon-mars", x: 1460, y: 480, size: "sm" },
  { id: "super-federation-right", label: "Super Federation", theme: "galactic", x: 1300, y: 400, size: "sm" },

  // === AIR FORCE / AFSOC ===
  { id: "afsoc", label: "Air Force Special Operations Command (AFSOC)", theme: "ssp", x: 560, y: 760, size: "sm" },
  { id: "blue-avians-afsoc", label: "Blue Avians", theme: "galactic", x: 900, y: 690, size: "sm" },

  // === LAW OF ONE / DAVID WILCOCK ===
  { id: "law-of-one", label: "Law of One", theme: "consciousness", x: 860, y: 720, size: "md" },
  { id: "david-wilcock", label: "David Wilcock", theme: "consciousness", x: 800, y: 740, size: "sm" },
  { id: "ra", label: "Ra", theme: "consciousness", x: 830, y: 700, size: "sm" },
  { id: "mandela-effect", label: "The Mandela Effect", theme: "awakening", x: 720, y: 750, size: "sm" },
  { id: "channeling-2", label: "Channeling", theme: "consciousness", x: 900, y: 720, size: "sm" },
  { id: "heros-journey", label: "The Hero's Journey", theme: "consciousness", x: 940, y: 740, size: "sm" },

  // === DARK MISSION / NASA (far right) ===
  { id: "nasa", label: "NASA", theme: "ssp", x: 1370, y: 540, size: "sm" },
  { id: "dark-mission", label: "Dark Mission", theme: "ssp", x: 1330, y: 560, size: "sm" },
  { id: "icc-breakaway", label: "ICC Breakaway", theme: "ssp", x: 1400, y: 530, size: "sm" },
  { id: "loc", label: "Lunar Operations Command (LOC)", theme: "moon-mars", x: 1350, y: 590, size: "sm" },
  { id: "nazi-breakaway", label: "Nazi Breakaway Groups", theme: "moon-mars", x: 1430, y: 590, size: "sm" },
  { id: "galactic-un", label: "The Galactic U.N.", theme: "galactic", x: 1380, y: 570, size: "sm" },

  // === MOON ===
  { id: "moon", label: "MOON", theme: "moon-mars", x: 1380, y: 640, size: "lg" },
  { id: "draco-reptilians-moon", label: "Draco & Reptilians", theme: "moon-mars", x: 1430, y: 660, size: "sm" },
  { id: "crystalline-towers", label: "Crystalline Towers / Glass Domes", theme: "moon-mars", x: 1300, y: 650, size: "sm" },
  { id: "soho", label: "S.O.H.O.", theme: "moon-mars", x: 1020, y: 700, size: "sm" },
  { id: "bashar", label: "Bashar", theme: "galactic", x: 1060, y: 700, size: "sm" },
  { id: "dark-fleet-right", label: "Dark Fleet", theme: "moon-mars", x: 1470, y: 620, size: "sm" },
  { id: "nordics-moon", label: "Nordics", theme: "galactic", x: 1480, y: 650, size: "sm" },
  { id: "mohammed-treaty", label: "Mohammed Treaty", theme: "moon-mars", x: 1380, y: 680, size: "sm" },
  { id: "artifact-bases", label: "Artifact Bases on Moon", theme: "moon-mars", x: 1380, y: 700, size: "sm" },
  { id: "dark-side-moon", label: "Dark Side of the Moon", theme: "moon-mars", x: 1350, y: 720, size: "sm" },

  // === METAPHYSICS / AGE OF AQUARIUS (center) ===
  { id: "metaphysics", label: "Metaphysics", theme: "consciousness", x: 660, y: 790, size: "sm" },
  { id: "age-of-aquarius", label: "Age of Aquarius", theme: "consciousness", x: 720, y: 800, size: "sm" },
  { id: "optimal-timeline-reality", label: "Optimal Timeline Reality", theme: "consciousness", x: 790, y: 790, size: "sm" },
  { id: "torus", label: "Torus", theme: "consciousness", x: 640, y: 810, size: "sm" },

  // === LIGHT BODY / DNA ===
  { id: "light-body", label: "Light Body", theme: "consciousness", x: 950, y: 780, size: "sm" },
  { id: "dna-upgrade", label: "DNA Upgrade", theme: "consciousness", x: 1020, y: 790, size: "sm" },
  { id: "schumann-resonance", label: "Schumann Resonance", theme: "consciousness", x: 1050, y: 760, size: "sm" },
  { id: "new-earth", label: "The New Earth", theme: "consciousness", x: 900, y: 790, size: "sm" },
  { id: "earth-5d", label: "5D Earth", theme: "consciousness", x: 930, y: 800, size: "sm" },

  // === HOLISTIC HEALING (left) ===
  { id: "holistic-healing", label: "Holistic Healing", theme: "healing", x: 120, y: 890, size: "md" },
  { id: "rife-machine", label: "Rife Machine", theme: "healing", x: 80, y: 940, size: "sm" },
  { id: "orgone", label: "Orgone", theme: "healing", x: 250, y: 920, size: "sm" },
  { id: "sound-healing", label: "Sound Healing", theme: "healing", x: 200, y: 940, size: "sm" },
  { id: "cayce-coral", label: "Cayce / Coral", theme: "healing", x: 170, y: 910, size: "sm" },

  // === AWAKENING CONSCIOUSNESS ===
  { id: "awakening-consciousness", label: "Awakening Consciousness", theme: "consciousness", x: 380, y: 880, size: "md" },
  { id: "precession-equinox", label: "Precession of the Equinox", theme: "consciousness", x: 340, y: 910, size: "sm" },
  { id: "25900-yr", label: "25,900 YR Pole Shifts", theme: "consciousness", x: 320, y: 930, size: "sm" },
  { id: "book-of-enoch", label: "Book of Enoch", theme: "consciousness", x: 260, y: 950, size: "sm" },
  { id: "activator", label: "Activator", theme: "consciousness", x: 220, y: 880, size: "sm" },

  // === NIKOLA TESLA (bottom-left) ===
  { id: "nikola-tesla", label: "Nikola Tesla", theme: "tesla", x: 100, y: 1000, size: "md" },
  { id: "wireless-energy", label: "Wireless Energy", theme: "tesla", x: 120, y: 1040, size: "sm" },
  { id: "organic-food", label: "Organic Food", theme: "tesla", x: 110, y: 1080, size: "sm" },
  { id: "369", label: "3-6-9", theme: "tesla", x: 200, y: 980, size: "sm" },

  // === ANCIENT ALIENS (bottom-center) ===
  { id: "ancient-aliens", label: "Ancient Aliens", theme: "earth-alliance", x: 480, y: 990, size: "md" },
  { id: "elohim", label: "Elohim", theme: "earth-alliance", x: 340, y: 980, size: "sm" },
  { id: "annunaki", label: "Annunaki", theme: "earth-alliance", x: 380, y: 990, size: "sm" },
  { id: "giza-complex", label: "Giza Complex", theme: "earth-alliance", x: 400, y: 1010, size: "sm" },
  { id: "gobekli-tepe", label: "Göbekli Tepe", theme: "earth-alliance", x: 450, y: 1020, size: "sm" },
  { id: "crop-circles", label: "Crop Circles", theme: "earth-alliance", x: 540, y: 990, size: "sm" },
  { id: "stone-circles-africa", label: "10M+ Stone Circles Africa", theme: "earth-alliance", x: 360, y: 1030, size: "sm" },
  { id: "bosnian-pyramid", label: "Bosnian Pyramid", theme: "earth-alliance", x: 500, y: 1030, size: "sm" },
  { id: "nazca-lines", label: "Nazca Lines", theme: "earth-alliance", x: 280, y: 1060, size: "sm" },
  { id: "planetary-grid", label: "Planetary Grid System", theme: "earth-alliance", x: 300, y: 1040, size: "sm" },
  { id: "chinese-comet", label: "Chinese Comet", theme: "earth-alliance", x: 420, y: 1040, size: "sm" },

  // === THE EARTH ALLIANCE ===
  { id: "earth-alliance-main", label: "THE EARTH ALLIANCE", theme: "earth-alliance", x: 310, y: 1100, size: "md" },
  { id: "4d-chess", label: "4D Chess", theme: "earth-alliance", x: 360, y: 1110, size: "sm" },
  { id: "arrest-cabal", label: "Arrest the Cabal / Release Free Energy", theme: "earth-alliance", x: 340, y: 1130, size: "sm" },

  // === CSETI / UNIFIED FIELD ===
  { id: "cseti", label: "CSETI", theme: "ufo", x: 750, y: 870, size: "sm" },
  { id: "unified-field-theory", label: "Unified Field Theory", theme: "consciousness", x: 830, y: 870, size: "sm" },
  { id: "eceti", label: "ECETI", theme: "ufo", x: 680, y: 900, size: "sm" },

  // === OPERATION HIGHJUMP / SCHUMANN ===
  { id: "operation-highjump", label: "Operation Highjump", theme: "antarctica", x: 920, y: 870, size: "sm" },
  { id: "admiral-byrd-1947", label: "Admiral Byrd 1947", theme: "antarctica", x: 950, y: 890, size: "sm" },
  { id: "pre-adamites", label: "Pre-Adamites", theme: "antarctica", x: 880, y: 890, size: "sm" },

  // === QANON / POLITICAL (bottom-left) ===
  { id: "qanon", label: "Q ANON", theme: "political", x: 350, y: 1170, size: "lg" },
  { id: "sealed-indictments", label: "Sealed Indictments", theme: "political", x: 200, y: 1150, size: "md" },
  { id: "anonymous", label: "Anonymous", theme: "political", x: 300, y: 1180, size: "sm" },
  { id: "meme-wars", label: "Meme Wars", theme: "political", x: 340, y: 1200, size: "sm" },
  { id: "trump", label: "Trump", theme: "political", x: 400, y: 1190, size: "sm" },
  { id: "wwg1wga", label: "#WWG1WGA", theme: "political", x: 440, y: 1195, size: "sm" },
  { id: "pizzagate", label: "Pizzagate", theme: "political", x: 150, y: 1200, size: "sm" },
  { id: "epstein-island", label: "Epstein Island", theme: "political", x: 230, y: 1210, size: "sm" },
  { id: "white-hats", label: "White Hats", theme: "political", x: 280, y: 1230, size: "sm" },
  { id: "geotus", label: "GEOTUS", theme: "political", x: 300, y: 1210, size: "sm" },
  { id: "patriots", label: "Patriots", theme: "political", x: 400, y: 1230, size: "sm" },
  { id: "end-the-fed", label: "End the Fed", theme: "political", x: 350, y: 1280, size: "sm" },
  { id: "tribunals", label: "Tribunals", theme: "political", x: 350, y: 1310, size: "sm" },
  { id: "trust-the-plan", label: "Trust the Plan", theme: "political", x: 400, y: 1320, size: "sm" },
  { id: "n-korea-peace", label: "N. Korea Peace", theme: "political", x: 250, y: 1280, size: "sm" },
  { id: "child-trafficking", label: "Child Trafficking", theme: "political", x: 190, y: 1220, size: "sm" },
  { id: "drug-weapon-trafficking", label: "C.I.A Drug & Weapon Trafficking", theme: "political", x: 150, y: 1270, size: "sm" },
  { id: "deep-state-media", label: "Mass Shootings / Staged Events", theme: "political", x: 170, y: 1250, size: "sm" },
  { id: "corporatocracy", label: "Corporatocracy", theme: "political", x: 280, y: 1300, size: "sm" },
  { id: "weaponized-food", label: "Weaponized Food", theme: "political", x: 120, y: 1310, size: "sm" },
  { id: "sheep-asleep", label: "Sheep Asleep", theme: "political", x: 100, y: 1340, size: "sm" },
  { id: "global-warming-scam", label: "Solar System / Global Warming", theme: "political", x: 80, y: 1110, size: "sm" },
  { id: "release-free-energy", label: "Release Free Energy", theme: "political", x: 430, y: 1240, size: "sm" },
  { id: "anons", label: "Anons", theme: "political", x: 470, y: 1210, size: "sm" },
  { id: "paradise-ca-fire", label: "Paradise CA Fire", theme: "political", x: 490, y: 1190, size: "sm" },
  { id: "racketeer", label: "RACKETEER", theme: "political", x: 210, y: 1190, size: "sm" },
  { id: "bilderberg", label: "Bilderberg", theme: "political", x: 250, y: 1160, size: "sm" },

  // === FLAT EARTH / ENGINEERED FOOD ===
  { id: "flat-earth", label: "Flat Earth", theme: "matrix", x: 220, y: 1340, size: "sm" },
  { id: "engineered-food", label: "Engineered Food", theme: "matrix", x: 180, y: 1330, size: "sm" },
  { id: "white-dragon", label: "White Dragon", theme: "matrix", x: 260, y: 1350, size: "sm" },

  // === PHILADELPHIA EXPERIMENT / MONTAUK ===
  { id: "philadelphia-experiment", label: "The Philadelphia Experiment", theme: "ssp", x: 450, y: 1070, size: "sm" },
  { id: "montauk", label: "Montauk", theme: "ssp", x: 520, y: 1060, size: "sm" },
  { id: "looking-glass", label: "Looking Glass", theme: "ssp", x: 490, y: 1050, size: "sm" },
  { id: "secret-undersea-bases", label: "Secret Undersea Bases", theme: "ssp", x: 520, y: 1080, size: "sm" },

  // === ANTARCTICA (bottom-center) ===
  { id: "antarctica", label: "Antarctica", theme: "antarctica", x: 780, y: 950, size: "lg" },
  { id: "ancient-et-ruins", label: "Ancient E.T. Ruins", theme: "antarctica", x: 750, y: 980, size: "sm" },
  { id: "nazi-base", label: "Nazi Base", theme: "antarctica", x: 810, y: 975, size: "sm" },
  { id: "newschwabenland", label: "Neuschwabenland", theme: "antarctica", x: 780, y: 930, size: "sm" },
  { id: "breakaway-civilization", label: "Breakaway Civilization", theme: "antarctica", x: 830, y: 960, size: "sm" },
  { id: "nazi-bell", label: "Nazi Bell Antigravity", theme: "antarctica", x: 890, y: 940, size: "sm" },

  // === STASIS / SANDIA / AREA 51 ===
  { id: "stasis-beings", label: "Stasis Beings", theme: "antarctica", x: 600, y: 1100, size: "sm" },
  { id: "sandia-dulce", label: "Sandia & Dulce", theme: "antarctica", x: 570, y: 1120, size: "sm" },
  { id: "area-51", label: "Area 51", theme: "ufo", x: 520, y: 1150, size: "md" },
  { id: "dumbs", label: "D.U.M.B.S.", theme: "ssp", x: 530, y: 1200, size: "sm" },

  // === INNER EARTH ===
  { id: "inner-earth", label: "Inner Earth Civilizations", theme: "antarctica", x: 680, y: 1140, size: "md" },
  { id: "nordics-inner", label: "Nordics", theme: "antarctica", x: 660, y: 1110, size: "sm" },
  { id: "raptors-giants", label: "Raptors / Giants", theme: "antarctica", x: 700, y: 1120, size: "sm" },

  // === ARGENTINA / VIMANAS ===
  { id: "argentina", label: "Argentina", theme: "antarctica", x: 940, y: 960, size: "sm" },
  { id: "bariloche", label: "Bariloche", theme: "antarctica", x: 950, y: 980, size: "sm" },
  { id: "vimanas", label: "Vimanas", theme: "ancient", x: 1050, y: 950, size: "sm" },
  { id: "ancient-flying-machines", label: "Ancient Flying Machines", theme: "ancient", x: 1080, y: 970, size: "sm" },

  // === CHEMTRAILS / STARGATES ===
  { id: "chemtrails", label: "Chemtrails", theme: "matrix", x: 870, y: 1020, size: "sm" },
  { id: "scalar-weapons", label: "Scalar Weapons", theme: "matrix", x: 870, y: 1000, size: "sm" },
  { id: "stargates", label: "Stargates", theme: "ufo", x: 840, y: 1060, size: "sm" },
  { id: "brics-alliance", label: "BRICS Alliance", theme: "political", x: 820, y: 1080, size: "sm" },
  { id: "project-paperclip", label: "Project Paperclip", theme: "ssp", x: 900, y: 1070, size: "sm" },

  // === CABAL / DEEP STATE / ILLUMINATI (bottom) ===
  { id: "cabal", label: "Cabal", theme: "cabal", x: 700, y: 1250, size: "md" },
  { id: "deep-state", label: "Deep State", theme: "cabal", x: 750, y: 1250, size: "md" },
  { id: "illuminati", label: "Illuminati", theme: "cabal", x: 810, y: 1250, size: "md" },
  { id: "secret-societies", label: "Secret Societies", theme: "cabal", x: 870, y: 1250, size: "sm" },
  { id: "cia", label: "CIA", theme: "cabal", x: 640, y: 1240, size: "sm" },
  { id: "fbi", label: "FBI", theme: "cabal", x: 600, y: 1220, size: "sm" },
  { id: "cern", label: "CERN", theme: "cabal", x: 420, y: 1340, size: "sm" },
  { id: "council-of-200", label: "Council of 200", theme: "cabal", x: 500, y: 1300, size: "sm" },
  { id: "global-surveillance", label: "Global Surveillance Grid", theme: "cabal", x: 500, y: 1330, size: "sm" },
  { id: "nasa-1958", label: "NASA 1958", theme: "cabal", x: 850, y: 1100, size: "sm" },
  { id: "reptilians-cabal", label: "Reptilians", theme: "cabal", x: 930, y: 1120, size: "sm" },
  { id: "vatican", label: "Vatican", theme: "cabal", x: 1000, y: 1120, size: "sm" },
  { id: "vatican-library", label: "Vatican Library", theme: "cabal", x: 1050, y: 1130, size: "sm" },
  { id: "universal-mind", label: "Universal Mind", theme: "cabal", x: 1000, y: 1150, size: "sm" },
  { id: "knights-templar", label: "Knights Templar", theme: "cabal", x: 870, y: 1180, size: "sm" },
  { id: "freemasons", label: "Freemasons", theme: "cabal", x: 920, y: 1190, size: "sm" },
  { id: "jesuits", label: "Jesuits", theme: "cabal", x: 960, y: 1180, size: "sm" },
  { id: "werner-von-braun", label: "Werner Von Braun", theme: "ssp", x: 830, y: 1200, size: "sm" },

  // === CRYPTOCURRENCY / BODY ===
  { id: "cryptocurrency", label: "Cryptocurrency", theme: "matrix", x: 1050, y: 1040, size: "sm" },
  { id: "nsa-body", label: "NSA", theme: "cabal", x: 1000, y: 1080, size: "sm" },
  { id: "tree-of-life", label: "Tree of Life", theme: "consciousness", x: 1100, y: 1020, size: "sm" },

  // === LIGHTWORKERS / STARSEEDS (right) ===
  { id: "lightworkers", label: "Lightworkers", theme: "consciousness", x: 1100, y: 870, size: "sm" },
  { id: "starseeds", label: "Starseeds", theme: "consciousness", x: 1130, y: 890, size: "sm" },
  { id: "indigos", label: "Indigos", theme: "consciousness", x: 1160, y: 880, size: "sm" },
  { id: "orbs", label: "Orbs", theme: "consciousness", x: 1200, y: 880, size: "sm" },
  { id: "kundalini", label: "Kundalini", theme: "consciousness", x: 1090, y: 850, size: "sm" },
  { id: "chakras", label: "Chakras", theme: "consciousness", x: 1170, y: 830, size: "sm" },
  { id: "natural-light", label: "Natural Light", theme: "consciousness", x: 1150, y: 850, size: "sm" },
  { id: "qhht", label: "QHHT", theme: "consciousness", x: 1210, y: 860, size: "sm" },

  // === YOGA / AKASHIC (far right) ===
  { id: "yoga", label: "Yoga", theme: "consciousness", x: 1280, y: 860, size: "sm" },
  { id: "akashic-records", label: "Akashic Records", theme: "consciousness", x: 1370, y: 830, size: "sm" },
  { id: "tibet", label: "Tibet", theme: "meditation", x: 1250, y: 920, size: "sm" },
  { id: "remote-viewing", label: "Remote Viewing", theme: "meditation", x: 1300, y: 920, size: "sm" },
  { id: "star-merkaba", label: "Star Merkaba", theme: "meditation", x: 1350, y: 900, size: "sm" },

  // === THE OVERSOUL (far bottom-right) ===
  { id: "the-oversoul", label: "The OVERSOUL", theme: "oversoul", x: 1450, y: 830, size: "lg" },
  { id: "cymatics", label: "Cymatics", theme: "oversoul", x: 1420, y: 810, size: "sm" },
  { id: "432hz", label: "432 Hz", theme: "oversoul", x: 1470, y: 800, size: "sm" },
  { id: "crystal", label: "Crystal", theme: "oversoul", x: 1500, y: 820, size: "sm" },
  { id: "higher-self", label: "The Higher Self", theme: "oversoul", x: 1500, y: 850, size: "sm" },
  { id: "third-eye", label: "Third Eye", theme: "oversoul", x: 1520, y: 870, size: "sm" },
  { id: "rods-of-god", label: "Rods of God", theme: "oversoul", x: 1300, y: 770, size: "sm" },

  // === GRAND EXPERIMENT BOTTOM ===
  { id: "grand-experiment-bottom", label: "The Grand Experiment", theme: "moon-mars", x: 1350, y: 750, size: "sm" },
  { id: "grays", label: "Grays", theme: "moon-mars", x: 1460, y: 700, size: "sm" },

  // === MEDITATION / DZOGCHEN (bottom-right) ===
  { id: "meditation-bottom", label: "Meditation", theme: "meditation", x: 1200, y: 1000, size: "sm" },
  { id: "dzogchen-bottom", label: "Dzogchen", theme: "meditation", x: 1230, y: 1020, size: "sm" },
  { id: "tibetan-body", label: "Tibetan Rainbow Body Ascension", theme: "meditation", x: 1150, y: 1010, size: "sm" },
  { id: "prana", label: "Prana", theme: "meditation", x: 1280, y: 1010, size: "sm" },
  { id: "astral-travellers", label: "Astral Travellers", theme: "oversoul", x: 1350, y: 990, size: "sm" },
  { id: "lucid-dream", label: "Lucid Dream", theme: "oversoul", x: 1400, y: 990, size: "sm" },
  { id: "law-of-karma", label: "The Law of Karma", theme: "oversoul", x: 1300, y: 980, size: "sm" },
  { id: "psychic-abilities", label: "Psychic Abilities", theme: "oversoul", x: 1250, y: 1040, size: "sm" },

  // === ENTHEOGENS / PSYCHEDELICS (far bottom-right) ===
  { id: "entheogens", label: "Entheogens", theme: "psychedelic", x: 1350, y: 1060, size: "sm" },
  { id: "lsd", label: "L.S.D.", theme: "psychedelic", x: 1400, y: 1050, size: "sm" },
  { id: "dimethyltryptamine", label: "Dimethyltryptamine", theme: "psychedelic", x: 1300, y: 1070, size: "sm" },
  { id: "psychedelia", label: "Psychedelia", theme: "psychedelic", x: 1400, y: 1080, size: "sm" },
  { id: "psilocybin-bottom", label: "Psilocybin", theme: "psychedelic", x: 1050, y: 1160, size: "sm" },

  // === PSYOPS / DOLPHINS / WHALES ===
  { id: "psyops", label: "Psyops", theme: "cabal", x: 1100, y: 1180, size: "sm" },
  { id: "mkultra", label: "MKUltra", theme: "cabal", x: 1100, y: 1200, size: "sm" },
  { id: "dolphins", label: "Dolphins", theme: "consciousness", x: 1200, y: 1180, size: "sm" },
  { id: "whales", label: "Whales", theme: "consciousness", x: 1240, y: 1180, size: "sm" },
  { id: "khazars", label: "Khazars", theme: "cabal", x: 1150, y: 1180, size: "sm" },

  // === ESCAPE THE MATRIX (bottom-left) ===
  { id: "escape-matrix", label: "ESCAPE THE MATRIX", theme: "matrix", x: 200, y: 1380, size: "lg" },

  // === BOTTOM BAR ===
  { id: "full-disclosure", label: "Full Disclosure", theme: "awakening", x: 1200, y: 1280, size: "md" },

  // === ADDITIONAL NODES from chart ===
  { id: "golden-race-age", label: "Awakening of the Golden Race", theme: "consciousness", x: 380, y: 860, size: "sm" },
  { id: "the-brain-death", label: "The Brain Death 1993-2006", theme: "consciousness", x: 350, y: 850, size: "sm" },
  { id: "herbs-of-humanity", label: "Herbs of Humanity", theme: "healing", x: 440, y: 800, size: "sm" },
  { id: "seeds-of-spirit", label: "Seeds of Spirit", theme: "consciousness", x: 480, y: 850, size: "sm" },
  { id: "a-master-school", label: "A Master School For Spiritual Reality", theme: "consciousness", x: 750, y: 840, size: "sm" },

  // Additional political/disclosure nodes
  { id: "occupy-wall-street", label: "Occupy Wall Street", theme: "political", x: 250, y: 1120, size: "sm" },
  { id: "wikileaks", label: "WikiLeaks", theme: "political", x: 430, y: 1150, size: "sm" },
  { id: "snowden", label: "Snowden", theme: "political", x: 460, y: 1160, size: "sm" },
  { id: "rothschild", label: "Rothschilds", theme: "cabal", x: 250, y: 1170, size: "sm" },
];
