// Firebase Setup Script for SweetCrave
// Run this script in Firebase Console or through Firebase Admin SDK

// Sample products data to populate Firestore
const sampleProducts = [
  {
    id: 'croissant',
    name: 'Classic Croissant',
    description: 'Buttery, flaky perfection with 27 delicate layers',
    price: 4.50,
    emoji: '🥐',
    category: 'breakfast',
    available: true,
    image: '🥐'
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Delight',
    description: 'Light sponge cake with fresh strawberries and cream',
    price: 6.99,
    emoji: '🍰',
    category: 'cakes',
    available: true,
    image: '🍰'
  },
  {
    id: 'velvet-cupcake',
    name: 'Velvet Cupcake',
    description: 'Red velvet with cream cheese frosting',
    price: 3.99,
    emoji: '🧁',
    category: 'cupcakes',
    available: true,
    image: '🧁'
  },
  {
    id: 'chocolate-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Gooey center with Belgian chocolate chunks',
    price: 2.50,
    emoji: '🍪',
    category: 'cookies',
    available: true,
    image: '🍪'
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    description: 'Traditional recipe with cinnamon-spiced apples',
    price: 5.99,
    emoji: '🥧',
    category: 'pies',
    available: true,
    image: '🥧'
  },
  {
    id: 'glazed-donut',
    name: 'Glazed Donut',
    description: 'Freshly made with a sweet vanilla glaze',
    price: 2.99,
    emoji: '🍩',
    category: 'donuts',
    available: true,
    image: '🍩'
  }
];

// To add these to Firestore, use Firebase Console or Admin SDK:
// 1. Go to Firebase Console > Firestore Database
// 2. Create a "products" collection
// 3. Add each product as a document with the above data
// 4. Or use Firebase Admin SDK to batch import

export { sampleProducts };
