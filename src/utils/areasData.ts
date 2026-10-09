export interface AreaReview {
  name: string;
  locality: string;
  rating: number;
  review: string;
  serviceUsed: string;
  date: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  localities: string[];
  landmarks: string[];
  customerReviews: AreaReview[];
  nearbySlugs: string[];
}

const localTraits: Record<
  string,
  {
    name: string;
    desc: string;
    housingType: string;
    localizedDetail: string;
    tagline: string;
    localities: string[];
    landmarks: string[];
    customerReviews: AreaReview[];
  }
> = {
  whitefield: {
    name: "Whitefield",
    desc: "Whitefield is East Bangalore's premier IT and tech hub, home to international tech parks, upscale high-rise gated communities, and sprawling residential townships.",
    housingType: "premium high-rise IT corridor apartments, luxury gated villas, and modern residential townships",
    localizedDetail: "High-rise apartments and balconies near tech parks require SS316 marine-grade invisible grills and heavy-duty anti-pigeon netting for uncompromised child safety and pristine views.",
    tagline: "Premier safety nets & SS316 invisible grills in Whitefield — certified installation with 5-year warranty protection.",
    localities: ["ITPL Road", "EPIP Zone", "Kadugodi", "Hope Farm Junction", "Varthur Road", "Hoodi", "Channasandra"],
    landmarks: ["ITPL", "Phoenix Marketcity", "Nexus Shantiniketan Mall", "Manipal Hospital Whitefield", "Hope Farm Junction"],
    customerReviews: [
      {
        name: "Suresh Raghavan",
        locality: "Hope Farm Junction",
        rating: 5,
        review: "Manikanta Safety Solutions installed invisible grills on our 14th-floor balcony in Whitefield. The view is completely unblocked and the cables are rock solid. Excellent workmanship!",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-15",
      },
      {
        name: "Meenakshi Sundaram",
        locality: "EPIP Zone",
        rating: 5,
        review: "Installed anti-pigeon netting across our utility area and balconies in our Whitefield apartment. Very clean installation and zero bird disturbance since day one.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-20",
      },
    ],
  },
  koramangala: {
    name: "Koramangala",
    desc: "Koramangala is one of South-East Bangalore's most vibrant and cosmopolitan residential and commercial destinations, bustling with modern apartments, startups, and tree-lined blocks.",
    housingType: "upscale residential flats, luxury penthouse suites, and boutique apartment enclaves",
    localizedDetail: "Multi-story flats and open balconies face urban bird intrusion and toddler fall hazards, making precision-anchored child safety nets and invisible grills essential.",
    tagline: "Architectural invisible grills & durable safety nets in Koramangala — elegant, unobtrusive home safety.",
    localities: ["1st Block", "3rd Block", "4th Block", "5th Block", "6th Block", "7th Block", "8th Block", "Sony World Signal Area"],
    landmarks: ["Sony World Signal", "Forum Mall Koramangala", "Koramangala Indoor Stadium", "Jyoti Nivas College Road", "St. John's Medical College"],
    customerReviews: [
      {
        name: "Vikram Malhotra",
        locality: "4th Block",
        rating: 5,
        review: "The technicians were punctual and fitted child safety netting with tight anchor spacing. Very reassuring for our toddlers.",
        serviceUsed: "Children Safety Nets",
        date: "2026-05-28",
      },
      {
        name: "Deepa Narayanan",
        locality: "6th Block",
        rating: 5,
        review: "Ceiling cloth drying hangers installed by Manikanta Safety Solutions saved so much floor space on our balcony. Heavy-duty stainless steel rods and smooth pulleys.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-04-18",
      },
    ],
  },
  indiranagar: {
    name: "Indiranagar",
    desc: "Indiranagar is an upscale residential and lifestyle hub in East Bangalore, characterized by leafy residential streets, luxury low-to-mid rise apartments, and prominent high-street avenues.",
    housingType: "luxury multi-level residences, boutique apartment complexes, and contemporary builder floors",
    localizedDetail: "Wide balconies and large French windows benefit from sleek SS316 invisible grills and durable bird spikes to maintain architectural charm while ensuring total family security.",
    tagline: "Aesthetic safety nets & SS316 invisible grills in Indiranagar — flawless installation and premium finish.",
    localities: ["100 Feet Road", "12th Main Road", "HAL 2nd Stage", "HAL 3rd Stage", "Defence Colony", "Doopanahalli", "Old Airport Road"],
    landmarks: ["100 Feet Road Junction", "Indiranagar Metro Station", "CMH Road", "Domlur Flyover", "Defence Colony Park"],
    customerReviews: [
      {
        name: "Ananya Deshmukh",
        locality: "Defence Colony",
        rating: 5,
        review: "Manikanta Safety Solutions installed invisible grills on our balcony. High quality materials, very neat installation, and maintains the look of our home.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-12",
      },
      {
        name: "Rajesh Kumar",
        locality: "100 Feet Road",
        rating: 5,
        review: "Pigeon netting installed on our terrace utility area. The team did a fantastic job with neat anchor points.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-14",
      },
    ],
  },
  "hsr-layout": {
    name: "HSR Layout",
    desc: "HSR Layout is a leading residential epicenter in South-East Bangalore, planned in distinct sectors with modern apartment societies and tech parks.",
    housingType: "planned sector apartment societies, modern high-rise condominiums, and independent builder floors",
    localizedDetail: "Sector balconies require high-tensile child fall arrest netting and space-saving ceiling cloth drying racks for compact utility balconies.",
    tagline: "Top-rated balcony safety nets & ceiling cloth hangers in HSR Layout — free doorstep inspection.",
    localities: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Sector 7", "27th Main Road"],
    landmarks: ["27th Main Road", "HSR BDA Complex", "Agara Lake", "Silk Board Junction", "Sompura Gate"],
    customerReviews: [
      {
        name: "Karthik Subramanian",
        locality: "Sector 2",
        rating: 5,
        review: "Got balcony safety netting and ceiling cloth hangers installed. Very sturdy and professional rigger team.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-06-08",
      },
      {
        name: "Sneha Reddy",
        locality: "Sector 7",
        rating: 5,
        review: "Prompt response and same-day installation for pigeon nets on our 5th floor flat. Highly satisfied.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-22",
      },
    ],
  },
  "electronic-city": {
    name: "Electronic City",
    desc: "Electronic City is Bangalore's massive technology nexus in South Bangalore, featuring extensive multi-story gated apartment townships, high-rise condominiums, and IT campuses.",
    housingType: "high-density multi-story apartment townships, high-rise gated societies, and tech workforce condominiums",
    localizedDetail: "High-rise towers spanning 10 to 30 floors require heavy-duty balcony fall protection netting and pigeon containment mesh to safeguard children and keep utility spaces hygienic.",
    tagline: "Certified high-rise safety nets & invisible grills in Electronic City — 5-year replacement warranty.",
    localities: ["Phase 1", "Phase 2", "Neeladri Nagar", "Doddathoguru", "Konappana Agrahara", "Bettadasanapura", "Ananth Nagar"],
    landmarks: ["Infosys Campus", "Wipro Gate", "Neeladri High Street", "Electronic City Toll Gate", "PES University Area"],
    customerReviews: [
      {
        name: "Naveen Prasad",
        locality: "Neeladri Nagar",
        rating: 5,
        review: "Living on the 18th floor, child safety was our main priority. Manikanta Safety Solutions did an immaculate job with strong anchors and thick polymer nets.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-18",
      },
      {
        name: "Divya Krishnan",
        locality: "Phase 1",
        rating: 5,
        review: "Superb invisible grills for our balcony. Clean finish, transparent view, and very durable.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-05-19",
      },
    ],
  },
  marathahalli: {
    name: "Marathahalli",
    desc: "Marathahalli is a prime East Bangalore connector linking the Outer Ring Road tech corridor with Whitefield and HAL, filled with high-density residential complexes.",
    housingType: "multi-tier residential apartments, gated high-rises, and rental housing communities",
    localizedDetail: "Proximity to open transit corridors and construction zones makes anti-pigeon netting, bird spikes, and balcony safety nets vital for high-rise families.",
    tagline: "Reliable balcony safety netting and pigeon defense in Marathahalli — same-day site visit available.",
    localities: ["ORR Junction", "Munnekolala", "Spice Garden", "Kundalahalli Gate", "Anand Nagar", "Tulasi Theater Area", "Ashwath Nagar"],
    landmarks: ["Marathahalli Innovative Multiplex", "Kundalahalli Gate Flyover", "Spice Garden Signal", "Kalamandir Junction"],
    customerReviews: [
      {
        name: "Arun Nair",
        locality: "Spice Garden",
        rating: 5,
        review: "Installed pigeon safety nets across our balcony and AC duct areas. The team arrived on time and finished quickly.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-06-05",
      },
      {
        name: "Pooja Hegde",
        locality: "Munnekolala",
        rating: 5,
        review: "Great quality balcony safety nets with warranty. Highly recommend Manikanta Safety Solutions.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-04-29",
      },
    ],
  },
  jayanagar: {
    name: "Jayanagar",
    desc: "Jayanagar is South Bangalore's iconic, heritage-rich planned residential locality, renowned for wide tree-lined boulevards, peaceful blocks, and modern multi-unit apartments.",
    housingType: "planned block apartment complexes, multi-family residences, and premium residential flats",
    localizedDetail: "Balconies overlooking lush neighborhood parks require UV-treated pigeon nets and transparent invisible grills that maintain panoramic tree-top views.",
    tagline: "Premium invisible grills & balcony safety nets in Jayanagar — trusted residential rigger crew.",
    localities: ["1st Block", "3rd Block", "4th Block", "5th Block", "7th Block", "9th Block", "South End Circle", "Jayanagar East"],
    landmarks: ["Jayanagar 4th Block BDA Complex", "South End Circle", "Madhavan Park", "Ashoka Pillar", "Cosmopolitan Club"],
    customerReviews: [
      {
        name: "K. Narayanan",
        locality: "4th Block",
        rating: 5,
        review: "Manikanta Safety Solutions installed balcony invisible grills with genuine 316 marine cables. Looks stunning and ensures our kids are safe.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-23",
      },
      {
        name: "P. Vimala",
        locality: "7th Block",
        rating: 5,
        review: "Anti-bird netting was installed swiftly and cleanly. Pigeon problem is completely resolved.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-21",
      },
    ],
  },
  yelahanka: {
    name: "Yelahanka",
    desc: "Yelahanka is North Bangalore's rapidly growing hub near Kempegowda International Airport, featuring expansive luxury high-rise gated communities, lakes, and defense establishments.",
    housingType: "expansive gated apartment townships, high-rise lake-view towers, and luxury villa enclaves",
    localizedDetail: "Open high-altitude winds and lake breeze require extra-tight anchor spacing on balcony safety nets and heavy-gauge SS316 invisible wire grills.",
    tagline: "Certified safety netting & SS316 invisible grills in Yelahanka — robust high-wind protection.",
    localities: ["Yelahanka New Town", "Yelahanka Old Town", "Kogilu Road", "Allalasandra", "Judicial Layout", "Attur Layout", "Doddaballapur Road"],
    landmarks: ["Yelahanka Lake", "Air Force Station", "RMZ Galleria Mall", "Rail Wheel Factory", "Kogilu Junction"],
    customerReviews: [
      {
        name: "Ramesh Chandran",
        locality: "Yelahanka New Town",
        rating: 5,
        review: "We live on the 16th floor facing the lake. Strong winds used to be an issue, but the rigger team tensioned the nets perfectly. Solid safety.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-06-11",
      },
      {
        name: "Shalini Murthy",
        locality: "Judicial Layout",
        rating: 5,
        review: "Installed invisible grills for our balcony and windows. Aesthetic is preserved and zero safety worries.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-05-17",
      },
    ],
  },
  "jp-nagar": {
    name: "JP Nagar",
    desc: "JP Nagar is a prestigious residential suburb in South Bangalore, spread across multiple phases with modern apartment towers and cultural centers.",
    housingType: "modern multi-tier apartments, luxury gated complexes, and residential condominiums",
    localizedDetail: "High-floor balconies and open French windows require childproof fall arrest barriers, anti-pigeon netting, and stainless ceiling cloth drying hangers.",
    tagline: "Expert safety nets and balcony invisible grills in JP Nagar — free doorstep measurement.",
    localities: ["Phase 1", "Phase 2", "Phase 3", "Phase 5", "Phase 6", "Phase 7", "Phase 8", "Puttenahalli", "Dollars Colony"],
    landmarks: ["Ranga Shankara", "Sarakki Lake", "Central Mall JP Nagar", "Puttenahalli Underpass", "Brigade Millennium Area"],
    customerReviews: [
      {
        name: "M. Venkatesh",
        locality: "Phase 7",
        rating: 5,
        review: "Extremely professional team. They brought sample nets and cables for inspection before installation. Very reliable service.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-19",
      },
      {
        name: "Kavitha Rao",
        locality: "Phase 2",
        rating: 5,
        review: "Ceiling cloth hanger installation was completed within 45 minutes. Very smooth operation.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-05-08",
      },
    ],
  },
  "bannerghatta-road": {
    name: "Bannerghatta Road",
    desc: "Bannerghatta Road is a major arterial corridor in South Bangalore, connecting prominent IT parks, premier hospitals, and high-density residential high-rise communities.",
    housingType: "high-rise gated apartment towers, integrated residential enclaves, and premium builder floors",
    localizedDetail: "Proximity to open greenery and forest tracts means apartments often face pigeon and monkey intrusion, requiring heavy-duty monkey safety netting and SS316 invisible grills.",
    tagline: "Heavy-duty safety nets & invisible grills on Bannerghatta Road — complete wildlife and child protection.",
    localities: ["Arekere", "Hulimavu", "Gottigere", "Bilekahalli", "Arakere MICO Layout", "Akshayanagar", "Jigani Road"],
    landmarks: ["IIM Bangalore", "Fortis Hospital", "Apollo Hospital", "Meenakshi Mall", "Bannerghatta National Park Road"],
    customerReviews: [
      {
        name: "Girish Sharma",
        locality: "Hulimavu",
        rating: 5,
        review: "We had regular monkey visits damaging our balcony plants. Manikanta Safety Solutions installed heavy-duty monkey nets. Problem solved permanently!",
        serviceUsed: "Monkey Safety Nets",
        date: "2026-06-25",
      },
      {
        name: "Anita George",
        locality: "Arekere",
        rating: 5,
        review: "Balcony safety nets fitted neatly without spoiling the facade. Excellent customer support.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-05-30",
      },
    ],
  },
  "sarjapur-road": {
    name: "Sarjapur Road",
    desc: "Sarjapur Road is a booming residential and tech hotspot in South-East Bangalore, crowded with mega gated communities, international schools, and tech parks.",
    housingType: "mega high-rise gated communities, luxury villa plots, and modern apartment complexes",
    localizedDetail: "Families with toddlers in high-rise towers require certified child safety nets with narrow anchor spacing and transparent invisible grills for balconies and stairwells.",
    tagline: "Child safety nets & SS316 invisible grills on Sarjapur Road — fast same-day rigger dispatch.",
    localities: ["Sarjapur Town", "Kaikondrahalli", "Carmelaram", "Doddakannelli", "Kasavanahalli", "Somapura", "Hadosiddapura"],
    landmarks: ["Wipro Sarjapur Campus", "Kaikondrahalli Lake", "Decathlon Sarjapur", "Carmelaram Railway Station", "Market Square Mall"],
    customerReviews: [
      {
        name: "Pradeep Joshi",
        locality: "Kasavanahalli",
        rating: 5,
        review: "Installed child safety nets for 3 balconies in our gated society. Great pricing and certified materials with warranty card.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-04",
      },
      {
        name: "Rashmi Balasubramanian",
        locality: "Kaikondrahalli",
        rating: 5,
        review: "The invisible grills look so sleek on our balcony. Totally secure for our kids and pets.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-05-16",
      },
    ],
  },
  "btm-layout": {
    name: "BTM Layout",
    desc: "BTM Layout is a centrally located residential and commercial neighborhood in South Bangalore, offering exceptional connectivity.",
    housingType: "multi-story residential apartments, compact builder flats, and commercial-residential properties",
    localizedDetail: "Multi-story flats require childproof fall arrest netting, pigeon deterrent spikes, and heavy-duty ceiling cloth drying hangers for compact utility spaces.",
    tagline: "Balcony safety nets & ceiling cloth drying systems in BTM Layout — budget-friendly certified safety.",
    localities: ["BTM 1st Stage", "BTM 2nd Stage", "Tavarekere", "Madiwala Border", "Silk Board Area", "Kuvempu Nagar", "Udupi Garden Area"],
    landmarks: ["Udupi Garden Signal", "Madiwala Lake", "BTM Water Tank", "Silk Board Flyover", "Jayadeva Hospital Junction"],
    customerReviews: [
      {
        name: "R. Murali",
        locality: "BTM 2nd Stage",
        rating: 5,
        review: "Installed child safety nets on our 6th floor flat. The installation was very quick and sturdy.",
        serviceUsed: "Children Safety Nets",
        date: "2026-06-09",
      },
      {
        name: "Jayashree V.",
        locality: "Tavarekere",
        rating: 5,
        review: "Ceiling cloth hangers work wonderfully. Smooth stainless steel pipes and high weight capacity.",
        serviceUsed: "Ceiling Cloth Hangers",
        date: "2026-05-06",
      },
    ],
  },
  hebbal: {
    name: "Hebbal",
    desc: "Hebbal is North Bangalore's premier gateway and lake-front hub, featuring iconic flyovers, ultra-luxury high-rise residential towers, and corporate business parks.",
    housingType: "ultra-luxury high-rise residential towers, lake-view penthouses, and gated condominiums",
    localizedDetail: "High-altitude towers overlooking Hebbal Lake experience strong gusts and heavy bird activity, demanding high-tensile marine SS316 invisible grills and UV-stabilized anti-bird nets.",
    tagline: "High-rise invisible grills & balcony safety netting in Hebbal — lake-view safety with 5-year warranty.",
    localities: ["Hebbal Kempapura", "Chola Nagar", "Ganga Nagar", "Bellary Road", "Manorayana Palya", "Bhoopasandra", "Lal Bahadur Shastri Nagar"],
    landmarks: ["Hebbal Flyover", "Hebbal Lake", "Manyata Tech Park Gateway", "Columbia Asia Hospital Hebbal", "Esteem Mall"],
    customerReviews: [
      {
        name: "Col. Sanjeev Bakshi",
        locality: "Hebbal Kempapura",
        rating: 5,
        review: "Manikanta Safety Solutions installed heavy-duty balcony netting on our 20th floor flat. Very sturdy anchoring and professional team.",
        serviceUsed: "Balcony Safety Nets",
        date: "2026-06-20",
      },
      {
        name: "Shruti Hegde",
        locality: "Bellary Road",
        rating: 5,
        review: "Invisible grills installed for all our windows and balconies. Very clean aesthetic and strong.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-05-24",
      },
    ],
  },
  "rt-nagar": {
    name: "RHSR Layout",
    desc: "RHSR Layout is a well-established residential and commercial neighborhood in North Bangalore, known for peaceful residential pockets and bustling high streets.",
    housingType: "established residential apartments, boutique flats, and multi-generation independent homes",
    localizedDetail: "Apartment balconies and open windows require anti-pigeon netting and child safety nets to ensure total perimeter protection without obstructing natural airflow.",
    tagline: "Certified safety netting & invisible grills in RHSR Layout — prompt doorstep installation.",
    localities: ["1st Block", "2nd Block", "Dinnur Main Road", "HMT Layout", "MLA Layout", "Matadahalli", "Taralabalu Layout"],
    landmarks: ["RHSR Layout Police Station", "Dinnur Junction", "HMT Grounds", "CBI Road Junction", "Taralabalu Kendra"],
    customerReviews: [
      {
        name: "N. Sathish Kumar",
        locality: "Dinnur Main Road",
        rating: 5,
        review: "Manikanta Safety Solutions installed invisible grills for our balcony and windows. Superb quality and quick installation.",
        serviceUsed: "Balcony Invisible Grills",
        date: "2026-06-27",
      },
      {
        name: "Revathi S.",
        locality: "HMT Layout",
        rating: 5,
        review: "Very professional pigeon netting service. Highly recommended for apartment owners in RHSR Layout.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2026-05-25",
      },
    ],
  },
};

export const areasData: Record<string, AreaDetail> = Object.entries(localTraits).reduce(
  (acc, [slug, data]) => {
    const allSlugs = Object.keys(localTraits);
    const nearby = allSlugs.filter((s) => s !== slug).slice(0, 4);

    acc[slug] = {
      slug,
      name: data.name,
      tagline: data.tagline,
      overview: `${data.name} is a rapidly developing residential and commercial hub in Bangalore, Karnataka. With an increasing number of families moving into multi-story residential buildings and modern gated complexes, ensuring perimeter protection on open balconies and windows has become essential for home safety.`,
      apartmentLiving: `In ${data.name}, residential living primarily encompasses ${data.housingType}. ${data.localizedDetail}`,
      balconySafety: `High-rise living in ${data.name} offers great ventilation and views, but open balconies and wide railing intervals pose severe fall risks for small children and pets. Manikanta Safety Solutions delivers heavy-duty balcony safety nets and architectural invisible grills engineered to withstand extreme weather while providing certified fall prevention.`,
      birdProblem: `Pigeons and urban birds frequently roost in apartment balconies, AC outdoor unit ledges, and duct shafts across ${data.name}. Our humane, UV-stabilized anti-pigeon netting and stainless bird spikes permanently eliminate bird droppings and hygiene hazards.`,
      weatherDetails: `${data.name} experiences moderate tropical climate, sunny summers, and strong monsoon showers. We exclusively install UV-fortified HDPE copolymer nets and marine-grade SS316 stainless cables that resist weather deterioration for over 10 years.`,
      localities: data.localities,
      landmarks: data.landmarks,
      customerReviews: data.customerReviews,
      nearbySlugs: nearby,
    };
    return acc;
  },
  {} as Record<string, AreaDetail>
);

export const areasList = Object.values(areasData);
export const bangaloreAreasList = Object.keys(areasData);
export const andhraPradeshAreasList = bangaloreAreasList; // Backwards compatibility alias
