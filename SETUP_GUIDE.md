# SweetCrave Setup Guide

This guide will walk you through setting up the SweetCrave e-commerce website with all its features.

## 📋 Prerequisites

- A web browser (Chrome, Firefox, Safari, or Edge)
- A Firebase account (free tier is sufficient)
- Basic knowledge of HTML/JavaScript (optional)

## 🚀 Step-by-Step Setup

### Step 1: Firebase Project Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Enter project name: "SweetCrave"
   - Disable Google Analytics (optional)
   - Click "Create project"

2. **Enable Firestore Database**
   - In Firebase Console, click "Firestore Database" in the left menu
   - Click "Create database"
   - Select "Start in test mode" (we'll add security rules later)
   - Choose your preferred location
   - Click "Enable"

3. **Enable Authentication**
   - Click "Authentication" in the left menu
   - Click "Get started"
   - Click on "Email/Password" under Sign-in method
   - Enable "Email/Password"
   - Click "Save"

4. **Get Firebase Configuration**
   - Click the gear icon (⚙️) next to "Project Overview"
   - Click "Project settings"
   - Scroll down to "Your apps"
   - Click the web icon (</>)
   - Register app with nickname "SweetCrave Web"
   - Copy the `firebaseConfig` object

5. **Update firebase-config.js**
   - Open `firebase-config.js` in your project
   - Replace the existing config with your copied config
   - Save the file

### Step 2: Run the Website Locally

1. **Install Dependencies** (optional, for Firebase CLI)
   ```bash
   npm install
   ```

2. **Start Local Server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx http-server
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:8000`
   - You should see the SweetCrave homepage

### Step 3: Create Admin Account

1. **Navigate to Admin Setup Page**
   - Open `http://localhost:8000/create-admin.html`

2. **Fill in Admin Details**
   - Name: Your name
   - Email: Your email address
   - Password: Choose a strong password (min 6 characters)

3. **Create Account**
   - Click "Create Admin Account"
   - Wait for confirmation
   - You'll be redirected to the admin dashboard

4. **Security Note**
   - After creating your admin account, delete or restrict access to `create-admin.html`

### Step 4: Add Products

1. **Access Admin Dashboard**
   - You should already be on the admin dashboard
   - If not, login at `/login.html` with your admin credentials

2. **Add Your First Product**
   - Fill in the product form:
     - **Product Name**: e.g., "Classic Croissant"
     - **Price**: e.g., 450 (in rupees)
     - **Description**: e.g., "Buttery, flaky perfection"
     - **Image URL**: Use a URL from Unsplash or your own hosting
     - **Emoji**: e.g., 🥐
     - **Category**: Select from dropdown
     - **Featured**: Check if you want it featured
   - Click "Add Product"

3. **Add More Products**
   - Repeat the process to add more products
   - Featured products will appear with a star badge

### Step 5: Test Customer Flow

1. **Browse Products**
   - Go back to homepage (`/index.html`)
   - You should see your products displayed

2. **Add to Cart**
   - Click "Add to Cart" on any product
   - Notice the cart count increase in the navigation

3. **View Cart**
   - Click the cart icon in navigation
   - Verify your items are there
   - Try adjusting quantities

4. **Checkout**
   - Click "Proceed to Checkout"
   - Fill in delivery address
   - Click "Place Order"
   - You should see a success message

5. **Verify Order in Firebase**
   - Go to Firebase Console
   - Open Firestore Database
   - Check the "orders" collection
   - Your order should be there!

### Step 6: Add Security Rules (Production)

1. **Open Firestore Rules**
   - In Firebase Console, go to Firestore Database
   - Click on "Rules" tab

2. **Update Rules**
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

3. **Publish Rules**
   - Click "Publish"

## 🎯 Common Tasks

### Making Another User Admin

1. Go to Firebase Console → Firestore Database
2. Navigate to `users` collection
3. Find the user document
4. Edit the `role` field to `admin`
5. User will have admin access on next login

### Adding Product Images

**Option 1: Use Unsplash (Free)**
- Go to [Unsplash](https://unsplash.com/)
- Search for food/pastry images
- Right-click on image → Copy image address
- Use this URL in the Image URL field

**Option 2: Use Your Own Hosting**
- Upload images to your server
- Use the full URL in the Image URL field

**Option 3: Use Firebase Storage**
- Upload images to Firebase Storage
- Get the download URL
- Use this URL in the Image URL field

### Customizing Colors

Edit the CSS in the HTML files:
- Primary color: `#ff6b9d` (Pink)
- Secondary color: `#ffc371` (Orange)
- Accent color: `#c471f5` (Purple)

Search for these hex codes and replace with your brand colors.

## 🐛 Troubleshooting

### "Add to Cart" Not Working
- Check browser console for errors (F12)
- Verify Firebase is initialized
- Clear cache at `/clear-cache.html`

### Can't Login as Admin
- Verify user exists in Firestore `users` collection
- Check that `role` field is set to `admin`
- Try creating a new admin account

### Products Not Showing
- Check Firebase Console → Firestore Database
- Verify products exist in `products` collection
- Check browser console for errors

### Orders Not Saving
- Verify Firestore rules allow order creation
- Check browser console for errors
- Ensure checkout form is completely filled

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Verify Firebase configuration is correct
3. Ensure all Firebase services are enabled
4. Check Firestore security rules

## 🎉 You're All Set!

Your SweetCrave e-commerce website is now ready to use! You can:
- ✅ Add and manage products through the admin dashboard
- ✅ Customers can browse and add items to cart
- ✅ Process orders with address collection
- ✅ Track orders in Firebase

Happy selling! 🥐🍰🧁
