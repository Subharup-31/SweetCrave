# SweetCrave Quick Reference

## 🔗 Important URLs

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/index.html` | Browse products, add to cart |
| Login/Signup | `/login.html` | User authentication |
| Shopping Cart | `/cart.html` | View and manage cart items |
| Checkout | `/checkout.html` | Enter address and place order |
| Admin Dashboard | `/admin.html` | Manage products (admin only) |
| Create Admin | `/create-admin.html` | Initial admin setup |
| Clear Cache | `/clear-cache.html` | Reset localStorage |

---

## 👤 User Roles

### Customer
- Browse products
- Add items to cart
- Place orders
- View order history (future feature)

### Admin
- All customer features
- Access admin dashboard
- Add/edit/delete products
- Mark products as featured
- View all orders (future feature)

---

## 🔑 Default Credentials

**Note**: You need to create your own admin account using `/create-admin.html`

After setup, you can login at `/login.html` with your credentials.

---

## 🛠️ Common Operations

### For Customers

#### Browse Products
1. Go to homepage (`/index.html`)
2. Scroll to "Featured Pastries" section
3. View product details

#### Add to Cart
1. Click "Add to Cart" on any product
2. See cart count increase in navigation
3. Click cart icon to view cart

#### Checkout
1. Go to cart (`/cart.html`)
2. Review items and quantities
3. Click "Proceed to Checkout"
4. Fill in delivery address
5. Click "Place Order"

#### Create Account
1. Go to `/login.html`
2. Click "Sign Up"
3. Enter name, email, password
4. Click "Sign Up"

---

### For Admins

#### Access Admin Dashboard
1. Login at `/login.html`
2. Automatically redirected to `/admin.html`
3. Or click "Admin" link in navigation

#### Add Product
1. Go to admin dashboard
2. Fill in product form:
   - Name (required)
   - Price in ₹ (required)
   - Description (required)
   - Image URL (optional)
   - Emoji (optional)
   - Category (dropdown)
   - Featured checkbox
3. Click "Add Product"

#### Delete Product
1. Go to admin dashboard
2. Find product in grid
3. Click "Delete" button
4. Confirm deletion

#### Feature/Unfeature Product
1. Go to admin dashboard
2. Find product in grid
3. Click "Feature" or "Unfeature" button
4. Product updates instantly

---

## 🗄️ Firebase Console Operations

### View Products
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Firestore Database"
4. Open "products" collection

### View Orders
1. Go to Firestore Database
2. Open "orders" collection
3. Click on any order to view details

### Make User Admin
1. Go to Firestore Database
2. Open "users" collection
3. Find user by email
4. Edit document
5. Change `role` from `customer` to `admin`
6. Save

### View Users
1. Go to "Authentication" in Firebase Console
2. Click "Users" tab
3. See all registered users

---

## 🐛 Troubleshooting Quick Fixes

### Cart Not Working
```
1. Open browser console (F12)
2. Run: localStorage.clear()
3. Refresh page
```

### Products Not Loading
```
1. Check Firebase Console → Firestore
2. Verify products exist
3. Check browser console for errors
4. Verify Firebase config in firebase-config.js
```

### Can't Login
```
1. Verify email/password are correct
2. Check Firebase Console → Authentication
3. Ensure user exists
4. Try password reset (future feature)
```

### Admin Access Denied
```
1. Go to Firebase Console → Firestore
2. Open users collection
3. Find your user document
4. Change role to "admin"
5. Logout and login again
```

---

## 📝 Code Snippets

### Clear All Products (Browser Console)
```javascript
// Run in browser console on admin page
const products = await firebase.getDocs(firebase.collection(firebase.db, 'products'));
products.forEach(async (doc) => {
  await firebase.deleteDoc(firebase.doc(firebase.db, 'products', doc.id));
});
console.log('All products deleted');
```

### Add Sample Product (Browser Console)
```javascript
// Run in browser console on admin page
await firebase.addDoc(firebase.collection(firebase.db, 'products'), {
  name: "Test Product",
  description: "This is a test product",
  price: 100,
  image: "https://picsum.photos/400/300",
  emoji: "🧁",
  category: "pastry",
  featured: false,
  createdAt: new Date().toISOString()
});
console.log('Product added');
```

### Check Current User (Browser Console)
```javascript
// Run in browser console
console.log('Current user:', firebase.auth.currentUser);
```

### View Cart (Browser Console)
```javascript
// Run in browser console
console.log('Cart:', JSON.parse(localStorage.getItem('cart')));
```

---

## 🎨 Customization Quick Guide

### Change Colors
Search and replace in HTML files:
- `#ff6b9d` → Your primary color
- `#ffc371` → Your secondary color
- `#c471f5` → Your accent color

### Change Currency
Search and replace in all files:
- `₹` → Your currency symbol
- Update price calculations if needed

### Change Site Name
Search and replace:
- `SweetCrave` → Your site name

---

## 📊 Firebase Limits (Free Tier)

| Resource | Limit |
|----------|-------|
| Firestore Reads | 50,000/day |
| Firestore Writes | 20,000/day |
| Firestore Deletes | 20,000/day |
| Storage | 1 GB |
| Authentication | Unlimited |

**Tip**: Monitor usage in Firebase Console → Usage tab

---

## 🔒 Security Checklist

- [ ] Remove or protect `create-admin.html` after setup
- [ ] Update Firestore security rules
- [ ] Enable email verification (optional)
- [ ] Set up password reset (optional)
- [ ] Use HTTPS in production
- [ ] Add rate limiting
- [ ] Monitor Firebase usage
- [ ] Regular security audits

---

## 📱 Testing Checklist

### Before Launch
- [ ] Test signup flow
- [ ] Test login flow
- [ ] Test logout
- [ ] Test add to cart
- [ ] Test cart quantity changes
- [ ] Test remove from cart
- [ ] Test checkout flow
- [ ] Test order submission
- [ ] Test admin product add
- [ ] Test admin product delete
- [ ] Test admin feature toggle
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Test with slow internet
- [ ] Test error scenarios

---

## 🚀 Deployment Checklist

- [ ] Update Firebase config for production
- [ ] Set up Firestore security rules
- [ ] Remove `create-admin.html`
- [ ] Test all features in production
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Add analytics (optional)
- [ ] Set up monitoring
- [ ] Create backup strategy
- [ ] Document admin procedures

---

## 📞 Support Resources

- **Firebase Documentation**: https://firebase.google.com/docs
- **Firebase Console**: https://console.firebase.google.com/
- **Browser DevTools**: Press F12 to open
- **Project README**: See `README.md`
- **Setup Guide**: See `SETUP_GUIDE.md`
- **Features List**: See `FEATURES.md`

---

## 💡 Pro Tips

1. **Use Browser DevTools**: Press F12 to debug issues
2. **Check Console**: Always check browser console for errors
3. **Test Locally First**: Test all changes before deploying
4. **Backup Firestore**: Export data regularly
5. **Monitor Usage**: Keep an eye on Firebase quotas
6. **Use Version Control**: Commit changes regularly
7. **Document Changes**: Keep notes of customizations
8. **Test on Mobile**: Always test responsive design
9. **Optimize Images**: Use compressed images for faster loading
10. **Cache Wisely**: Use localStorage for better performance

---

## 🎯 Quick Commands

### Start Local Server
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### Install Dependencies
```bash
npm install
```

### Clear Browser Cache
```
Ctrl + Shift + Delete (Windows/Linux)
Cmd + Shift + Delete (Mac)
```

### Open DevTools
```
F12 (All browsers)
Ctrl + Shift + I (Windows/Linux)
Cmd + Option + I (Mac)
```

---

**Last Updated**: 2025-01-08
**Version**: 1.0.0
