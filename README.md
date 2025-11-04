// SweetCrave - Firebase Setup Guide
// ================================

This guide will help you set up Firebase for the SweetCrave pastry shop website.

## 🚀 Firebase Setup

### 1. Create a Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Create a project" or select existing project
3. Enter project name: "SweetCrave" (or your preferred name)
4. Follow the setup wizard

### 2. Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location for your database

### 3. Configure Firebase SDK
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" → Web app (</>)
4. Register your app with a nickname
5. Copy the configuration object
6. Replace the placeholder values in firebase-config.js

### 4. Update Firebase Configuration
Edit firebase-config.js and replace the placeholder values:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-actual-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-actual-app-id"
};
```

### 5. Set Up Firestore Security Rules
Create a file called firestore.rules in your Firebase project:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Products collection - read/write access for all users
    match /products/{document} {
      allow read, write: if true;
    }

    // Cart data in localStorage (no Firestore storage needed)
    // Users collection for future user accounts
    match /users/{userId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 6. Create Products Collection
In Firestore Console:
1. Go to Firestore Database
2. Click "Start collection"
3. Collection ID: "products"
4. Add documents with the following structure:

Document ID: "croissant" (or any unique ID)
Fields:
- name: "Classic Croissant" (string)
- description: "Buttery, flaky perfection with 27 delicate layers" (string)
- price: 4.50 (number)
- emoji: "🥐" (string)
- category: "pastries" (string)
- available: true (boolean)
- image: "url-to-image" (string, optional)

### 7. Test Real-time Updates
1. Add/update/delete products in Firebase Console
2. Watch the website update automatically in real-time
3. Test the cart functionality

## 🔧 Development Workflow

### Adding New Products:
1. Add product document in Firestore
2. Website updates automatically via real-time listeners
3. No code changes needed!

### Updating Product Details:
1. Edit product in Firebase Console
2. Changes appear instantly on website
3. All pricing, descriptions, and availability update in real-time

### Cart Management:
- Cart data stored in localStorage for persistence
- Synchronized between index.html and cart.html
- Compatible with Firebase product structure

## 🎯 Production Deployment

For production:
1. Update Firestore security rules to be more restrictive
2. Implement Firebase Authentication for user management
3. Add Firebase Storage for product images
4. Set up Firebase Hosting for the website

## 🔧 Troubleshooting

### Cart Issues Fixed

If you encounter issues with the "Add to Cart" functionality:

1. **Clear Browser Cache:**
   - Visit `http://localhost:8000/clear-cache.html`
   - Click "Clear All Cache" to reset localStorage
   - Refresh the main site

2. **Check Browser Console:**
   - Press F12 to open developer tools
   - Look for Firebase initialization messages
   - Check for any JavaScript errors

3. **Common Issues:**
   - **Cart buttons not working:** Wait for products to load from Firebase first
   - **Items auto-loading:** This was fixed by clearing localStorage on cart init
   - **Multiple initializations:** Cart now has protection against multiple setups

### Recent Fixes Applied

✅ **Fixed Add to Cart buttons not responding**
✅ **Fixed cart auto-loading items on first visit**
✅ **Fixed initialization order between Firebase and products**
✅ **Added proper error handling and debugging**

## 🌐 Testing

1. Start the server: `python3 -m http.server 8000`
2. Visit: http://localhost:8000
3. **Open browser console** and run:
   - `clearProducts()` - Clear all existing products
   - `addYourProduct()` - Add your "Chocolate Delight" product
4. Products should load from Firebase automatically with images!
5. Add items to cart and verify they work
6. Check cart count updates in navigation

## 🎨 Product Images

The featured pastry cards now display beautiful images from Unsplash instead of emojis!

### Features:
- **High-quality images** from professional food photography
- **Fallback to emojis** if images fail to load
- **Responsive design** - images scale properly on all devices
- **Lazy loading** - images load only when needed for better performance
- **Hover effects** - images scale smoothly on hover

### Image URLs in Firebase:
Each product document in Firestore should include an `image` field:
```json
{
  "name": "Chocolate Delight",
  "description": "Rich chocolate pastry with cream",
  "price": 150,
  "image": "https://images.unsplash.com/photo-1599785209796-9f1d3e6f6c2c?auto=format&fit=crop&w=800&q=80",
  "emoji": "🍫"
}
```

## 🔧 Testing with Your Firebase Data

If you want to clear existing products and test with your own data:

1. **Clear existing products:** Open browser console and run `clearProducts()`
2. **Add your product:** Run `addYourProduct()` in the console
3. **Or manually add** your product through Firebase console

Your product should appear with the image automatically!

### Expected Firebase Structure:
```json
{
  "name": "Chocolate Delight",
  "description": "Rich chocolate pastry with cream", 
  "price": 150,
  "image": "https://images.unsplash.com/photo-1599785209796-9f1d3e6f6c2c?auto=format&fit=crop&w=800&q=80",
  "emoji": "🍫"
}
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Next Steps

1. Set up Firebase project and replace placeholder config
2. Add your actual products to Firestore
3. Test all functionalities
4. Deploy to production with proper security rules

Happy coding! 🥐🍰🧁
