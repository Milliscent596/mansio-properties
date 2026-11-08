/* ===== MANSIO PROPERTIES: edit this file to add, remove or update properties ===== */
/* status: 'sale' | 'rent' | 'sold' | 'let'      agent: 'kelly' | 'cassim' */
const STATUS = { sale: 'For sale', rent: 'For rent', sold: 'Sold', let: 'Let' };
const isClosed = p => p.status === 'sold' || p.status === 'let';

const AGENTS = {
  kelly:  { name: 'Kelly',  title: 'Lead agent',        phone: '078 200 6697', wa: '263782006697', email: 'kellyganda96@gmail.com' },
  cassim: { name: 'Cassim', title: 'Real estate agent', phone: '078 403 3986', wa: '263784033986', email: 'cassimphiri9@gmail.com' }
};

/* helper: builds the photo paths for a folder. The first photo is the main one. */
const pics = (folder, names) => names.map(n => `images/${folder}/WhatsApp Image 2026-11-07 at ${n}.jpeg`);

const PROPERTIES = [
  {
    id: 1, status: 'sale', price: '$420,000', title: '4-bedroom family home with cottage', type: 'House',
    suburb: 'Greendale, Msasa', city: 'Harare', beds: 4, baths: '', size: '', stand: '2,000 m²', agent: 'kelly',
    photos: pics('Grendale Msasa', [
      '10.36.58 PM', '10.36.58 PM (1)', '10.36.58 PM (2)',
      '10.36.59 PM', '10.36.59 PM (1)',
      '10.37.00 PM', '10.37.00 PM (1)', '10.37.00 PM (2)',
      '10.37.01 PM', '10.37.01 PM (1)', '10.37.01 PM (2)',
      '10.37.02 PM', '10.37.02 PM (1)', '10.37.02 PM (2)'
    ]),
    description: 'Immaculate 4-bedroom family home on a massive 2,000 m² stand with title deeds, close to amenities. A perfect blend of space, security and convenience, with a 2-bedroom stand-alone cottage and staff quarters for extra flexibility. An investor’s dream, with high commercial value waiting to be unlocked. It is less than 300 metres off the Mutare Highway, just after Electrosales, and a stone’s throw from Lusitania Primary School.',
    features: [
      '4 bedrooms, all with built-in cupboards',
      '2 ensuite bedrooms, including the master',
      'Spacious lounge and separate dining room',
      'Tiles and ceiling throughout',
      'Modern fitted kitchen with scullery',
      'Separate bathroom/toilet and guest toilet',
      'Solar geyser',
      '2-bedroom stand-alone cottage',
      'Staff quarters and storeroom',
      'Neatly paved yard and well-maintained lawn',
      'Road frontage',
      'Borehole for water security',
      '2 × 5,000 litre water storage tanks',
      'Fully walled with electric fence and electric gate',
      'Prepaid electricity',
      'Separate solar system backup for all units',
      'Title deeds available'
    ]
  },
  {
    id: 2, status: 'sale', price: '$1,500,000', title: '2.2 hectare land with vintage house', type: 'Land',
    suburb: 'Hatfield, Arlington Road', city: 'Harare', beds: '', baths: '', size: '', stand: '22,000 m² (2.2 ha)', agent: 'kelly',
    photos: pics('hatfield 2.2 hectares prop', [
      '10.33.07 PM', '10.33.07 PM (1)', '10.33.07 PM (2)',
      '10.33.08 PM', '10.33.08 PM (1)', '10.33.08 PM (2)',
      '10.33.13 PM', '10.33.13 PM (1)', '10.33.13 PM (2)',
      '10.33.14 PM', '10.33.14 PM (1)', '10.33.14 PM (2)'
    ]),
    description: 'For visionaries. Space like this almost never comes up this close to the city. This 22,000 m² (2.2 ha) property on Arlington Road, near Jongwe Corner in Hatfield, comes with a charming vintage house and all service lines available. Land this size, this close to the airport and this well connected, does not wait long for the right buyer. Serious enquiries only. Book your private viewing today.',
    features: [
      '22,000 m² (2.2 ha) with a charming vintage house',
      'Under 15 minutes to RGM International Airport',
      'Minutes from Arlington Estates',
      '200 m off Seke Road, about 100 m from St Patrick’s Road',
      'All service lines available',
      'Ideal for a prestige residential estate',
      'Ideal for a boutique hotel or lodge',
      'Ideal for a private school or institution',
      'Ideal for a commercial or mixed-use hub',
      'Ideal for a cluster house development'
    ]
  },
  {
    id: 3, status: 'sale', price: '$26,000 (negotiable)', title: '4-roomed core house, Unit A', type: 'House',
    suburb: 'Unit A', city: 'Chitungwiza', beds: '', baths: '', size: '', stand: '200 m²', agent: 'cassim',
    photos: pics('Chitungwiza core house', [
      '10.39.41 PM', '10.39.41 PM (1)', '10.39.41 PM (2)', '10.39.41 PM (3)'
    ]),
    description: 'Recently renovated 4-roomed core house in Unit A, Chitungwiza. It comes with a clean council cession and is a registered deceased estate with consent to sell. The house is vacant, so you can buy and move in. All service lines are available.',
    features: [
      'Recently renovated',
      'Clean council cession',
      'Registered deceased estate with consent to sell',
      'Ordinary cobra floors',
      'Walled on 3 sides and gated (back wall still needed)',
      'All service lines available',
      'Vacant: buy and move in'
    ]
  }
];

/* opens a Gmail compose page in the browser, with the agent, subject and message filled in */
const gmail = (to, subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;