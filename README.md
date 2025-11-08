# SweetCrave - Artisan Pastries E-Commerce Website

A modern, animated e-commerce website for a pastry shop built with HTML, CSS, and JavaScript, featuring Firebase integration for authentication, real-time product management, and order processing.

## ✨ Features

- 🎨 Modern, gradient-based design with smooth animations
- 🔐 Firebase Authentication (Login/Signup)
- 👨‍💼 Admin Dashboard for product management
- 🛒 Shopping cart functionality with localStorage
- 📦 Address collection and checkout flow
- 🔥 Firebase Firestore integration for products and orders
- 📱 Fully responsive design
- ✨ Custom cursor and particle effects
- 🎭 Smooth scroll animations and parallax effects

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

The project is already configured with Firebase. The configuration is in `firebase-config.js`.

### 3. Create Admin Account

To access the admin dashboard, you need to create an admin account first:

1. Open `create-admin.html` in your browser
2. Fill in the form with your details (name, email, password)
3. Click "Create Admin Account"
4. You'll be redirected to the admin dashboard

**Important:** After creating your admin account, you should remove or restrict access to `create-admin.html` in production.

### 4. Run the Website

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
sweetcrave/
├── index.html          # Main homepage with product catalog
├── login.html          # Login/Signup page
├── admin.html          # Admin dashboard for product management
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout with address collection form
├── create-admin.html   # Admin account creation (setup only)
├── auth.js             # Authentication module
├── firebase-config.js  # Firebase configuration
├── setup-firebase.js   # Script to populate sample products
├── package.json        # Node.js dependencies
└── README.md          # This file
```

## 👥 User Flows

### Customer Flow
1. **Browse Products** - View all products on the homepage
2. **Add to Cart** - Click "Add to Cart" on any product
3. **View Cart** - Click cart icon to see selected items
4. **Adjust Quantities** - Increase/decrease quantities or remove items
5. **Proceed to Checkout** - Click "Proceed to Checkout"
6. **Enter Address** - Fill in delivery information
7. **Place Order** - Submit order (saved to Firebase)

### Admin Flow
1. **Login** - Sign in with admin credentials
2. **Access Dashboard** - Automatically redirected to admin panel
3. **Add Products** - Fill form with product details:
   - Name, description, price
   - Image URL
   - Category and emoji
   - Featured status
4. **Manage Products** - View, feature/unfeature, or delete products
5. **Real-time Updates** - Changes appear instantly on the store

## 🗄️ Firebase Collections

### Users Collection (`users`)
```javascript
{
  email: "user@example.com",
  name: "John Doe",
  role: "customer" | "admin",
  createdAt: "2025-01-01T00:00:00.000Z"
}
```

### Products Collection (`products`)
```javascript
{
  name: "Classic Croissant",
  description: "Buttery, flaky perfection",
  price: 450,
  image: "https://example.com/image.jpg",
  emoji: "🥐",
  category: "pastry",
  featured: true,
  createdAt: "2025-01-01T00:00:00.000Z"
}
```

### Orders Collection (`orders`)
```javascript
{
  customer: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1234567890"
  },
  address: {
    street: "123 Main St",
    city: "Mumbai",
    state: "Maharashtra",
    zipCode: "400001",
    country: "India"
  },
  notes: "Ring doorbell twice",
  items: [
    {
      id: "product-id",
      name: "Classic Croissant",
      price: 450,
      quantity: 2
    }
  ],
  subtotal: 900,
  tax: 90,
  delivery: 5,
  total: 995,
  status: "pending",
  userId: "user-id-if-logged-in",
  createdAt: "2025-01-01T00:00:00.000Z"
}
```

## 🔐 Authentication

The website uses Firebase Authentication with email/password:

- **Sign Up**: New users can create accounts at `/login.html`
- **Login**: Existing users can sign in
- **Logout**: Users can sign out from the navigation
- **Admin Check**: Automatically detects admin users and shows admin link

## 👨‍💼 Admin Features

Admins can manage products through the dashboard:

- ✅ Add new products with all details
- ✅ Upload product images (via URL)
- ✅ Set product categories (pastry, cake, cookie, bread, other)
- ✅ Mark products as featured (appears with star badge)
- ✅ Delete products
- ✅ View all products in a responsive grid

## 🛠️ Customization

### Adding Products

Products can be added through:
1. **Admin Dashboard** (recommended) - User-friendly interface
2. **Firebase Console** - Direct database access
3. **Auto-population** - Sample products added if database is empty

### Styling

All styles are contained within the HTML files. Key color variables:
- Primary: `#ff6b9d` (Pink)
- Secondary: `#ffc371` (Orange)
- Accent: `#c471f5` (Purple)

### Making a User Admin Manually

To manually promote an existing user to admin:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to Firestore Database
3. Find the user in the `users` collection
4. Edit the document and change `role` from `customer` to `admin`

## 🔒 Security Notes

### Important for Production:

1. **Remove create-admin.html** - Delete or protect this file after initial setup
2. **Firestore Security Rules** - Add proper rules to protect admin operations:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Products - read for all, write for admins only
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Users - users can read/write their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Orders - users can create, read their own orders
    match /orders/{orderId} {
      allow create: if true;
      allow read: if request.auth != null && 
                    (resource.data.userId == request.auth.uid || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
  }
}
```

3. **Environment Variables** - Move Firebase config to environment variables
4. **HTTPS Only** - Use HTTPS in production
5. **Rate Limiting** - Implement rate limiting for API calls

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Cart Issues
- **Clear cache**: Visit `/clear-cache.html` to reset localStorage
- **Check console**: Press F12 and look for errors
- **Verify Firebase**: Ensure Firebase is properly initialized

### Authentication Issues
- **Check Firebase Auth**: Ensure Authentication is enabled in Firebase Console
- **Email/Password**: Verify email/password provider is enabled
- **Console errors**: Check browser console for specific error messages

### Admin Access Issues
- **Verify role**: Check Firestore to ensure user has `role: "admin"`
- **Re-login**: Try logging out and logging back in
- **Create new admin**: Use `create-admin.html` to create a new admin account

## 📝 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Made with ❤️ for pastry lovers everywhere 🥐🍰🧁
