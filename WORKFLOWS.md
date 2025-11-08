# SweetCrave Workflows

Visual representation of all user workflows in the SweetCrave e-commerce system.

---

## 🛍️ Customer Workflows

### Workflow 1: Browse and Purchase (Guest User)

```
START
  │
  ├─→ Visit Homepage (index.html)
  │     │
  │     ├─→ View Products
  │     │     │
  │     │     └─→ See product details
  │     │           - Name, description
  │     │           - Price, image
  │     │           - Featured badge
  │     │
  │     └─→ Click "Add to Cart"
  │           │
  │           └─→ Item added to localStorage
  │                 │
  │                 └─→ Cart count updates
  │
  ├─→ Click Cart Icon
  │     │
  │     └─→ View Cart (cart.html)
  │           │
  │           ├─→ Review items
  │           ├─→ Adjust quantities (+/-)
  │           ├─→ Remove items
  │           └─→ See price summary
  │
  ├─→ Click "Proceed to Checkout"
  │     │
  │     └─→ Checkout Page (checkout.html)
  │           │
  │           ├─→ Fill Personal Info
  │           │     - First & Last Name
  │           │     - Email & Phone
  │           │
  │           ├─→ Fill Address
  │           │     - Street Address
  │           │     - City, State, ZIP
  │           │     - Country
  │           │
  │           ├─→ Add Delivery Notes (optional)
  │           │
  │           └─→ Review Order Summary
  │
  ├─→ Click "Place Order"
  │     │
  │     ├─→ Validate form
  │     ├─→ Save to Firebase (orders collection)
  │     ├─→ Clear cart
  │     └─→ Show success modal
  │
  └─→ END (Order Placed Successfully)
```

---

### Workflow 2: Browse and Purchase (Registered User)

```
START
  │
  ├─→ Visit Homepage
  │     │
  │     └─→ Click "Login"
  │
  ├─→ Login Page (login.html)
  │     │
  │     ├─→ Enter email & password
  │     ├─→ Click "Sign In"
  │     └─→ Firebase Authentication
  │           │
  │           └─→ Redirect to Homepage
  │
  ├─→ Browse & Add to Cart
  │     (Same as guest workflow)
  │
  ├─→ Proceed to Checkout
  │     │
  │     └─→ Email pre-filled
  │           (from user account)
  │
  ├─→ Complete checkout
  │     │
  │     └─→ Order linked to userId
  │
  └─→ END (Order Placed & Tracked)
```

---

### Workflow 3: Create Account

```
START
  │
  ├─→ Visit Login Page (login.html)
  │     │
  │     └─→ Click "Sign Up"
  │
  ├─→ Signup Form
  │     │
  │     ├─→ Enter Name
  │     ├─→ Enter Email
  │     ├─→ Enter Password (min 6 chars)
  │     └─→ Click "Sign Up"
  │
  ├─→ Firebase Authentication
  │     │
  │     ├─→ Create user account
  │     └─→ Create user document in Firestore
  │           │
  │           └─→ Set role: "customer"
  │
  ├─→ Auto-login
  │     │
  │     └─→ Redirect to Homepage
  │
  └─→ END (Account Created)
```

---

## 👨‍💼 Admin Workflows

### Workflow 4: Initial Admin Setup

```
START
  │
  ├─→ Visit create-admin.html
  │     │
  │     └─→ Admin Creation Form
  │
  ├─→ Fill Details
  │     │
  │     ├─→ Enter Name
  │     ├─→ Enter Email
  │     └─→ Enter Password
  │
  ├─→ Click "Create Admin Account"
  │     │
  │     ├─→ Firebase Authentication
  │     │     │
  │     │     └─→ Create user account
  │     │
  │     └─→ Firestore
  │           │
  │           └─→ Create user document
  │                 │
  │                 └─→ Set role: "admin"
  │
  ├─→ Auto-login
  │     │
  │     └─→ Redirect to Admin Dashboard
  │
  └─→ END (Admin Account Ready)

⚠️  IMPORTANT: Delete create-admin.html after setup!
```

---

### Workflow 5: Admin Login

```
START
  │
  ├─→ Visit Login Page (login.html)
  │     │
  │     └─→ Enter admin credentials
  │
  ├─→ Click "Sign In"
  │     │
  │     └─→ Firebase Authentication
  │           │
  │           └─→ Check user role in Firestore
  │
  ├─→ Role Check
  │     │
  │     ├─→ If role = "admin"
  │     │     │
  │     │     └─→ Redirect to admin.html
  │     │
  │     └─→ If role = "customer"
  │           │
  │           └─→ Redirect to index.html
  │
  └─→ END (Logged In)
```

---

### Workflow 6: Add Product (Admin)

```
START (Admin Dashboard)
  │
  ├─→ Fill Product Form
  │     │
  │     ├─→ Product Name *
  │     ├─→ Price (₹) *
  │     ├─→ Description *
  │     ├─→ Image URL
  │     ├─→ Emoji
  │     ├─→ Category (dropdown)
  │     └─→ Featured (checkbox)
  │
  ├─→ Click "Add Product"
  │     │
  │     └─→ Validate form
  │
  ├─→ Save to Firestore
  │     │
  │     └─→ Add to products collection
  │           │
  │           └─→ Include timestamp
  │
  ├─→ Real-time Update
  │     │
  │     ├─→ Admin dashboard refreshes
  │     └─→ Homepage updates automatically
  │           │
  │           └─→ New product appears
  │
  └─→ END (Product Added)
```

---

### Workflow 7: Manage Products (Admin)

```
START (Admin Dashboard)
  │
  ├─→ View Products Grid
  │     │
  │     └─→ All products displayed
  │
  ├─→ Choose Action
  │     │
  │     ├─→ Feature Product
  │     │     │
  │     │     ├─→ Click "Feature" button
  │     │     ├─→ Update Firestore
  │     │     └─→ Product shows star badge
  │     │
  │     ├─→ Unfeature Product
  │     │     │
  │     │     ├─→ Click "Unfeature" button
  │     │     ├─→ Update Firestore
  │     │     └─→ Star badge removed
  │     │
  │     └─→ Delete Product
  │           │
  │           ├─→ Click "Delete" button
  │           ├─→ Confirm deletion
  │           ├─→ Remove from Firestore
  │           └─→ Product disappears
  │
  ├─→ Real-time Update
  │     │
  │     └─→ Changes appear instantly
  │           on homepage
  │
  └─→ END (Products Managed)
```

---

## 🔄 System Workflows

### Workflow 8: Real-time Product Sync

```
Admin Dashboard                    Homepage
      │                               │
      ├─→ Add/Update/Delete           │
      │     Product                   │
      │                               │
      └─→ Firestore                   │
            │                         │
            ├─────────────────────────┤
            │   Real-time Listener   │
            ├─────────────────────────┤
            │                         │
            │                         ├─→ Detect Change
            │                         │
            │                         ├─→ Fetch Updated Data
            │                         │
            │                         └─→ Re-render Products
            │                               │
            └───────────────────────────────┘
                  (Instant Update)
```

---

### Workflow 9: Cart Synchronization

```
Homepage (index.html)          Cart Page (cart.html)
      │                               │
      ├─→ Add to Cart                 │
      │     │                         │
      │     └─→ localStorage           │
      │           │                   │
      │           ├───────────────────┤
      │           │   Shared Storage  │
      │           ├───────────────────┤
      │           │                   │
      │           │                   ├─→ Read Cart
      │           │                   │
      │           │                   ├─→ Display Items
      │           │                   │
      │           │                   └─→ Update Quantities
      │           │                         │
      │           ├───────────────────────┤
      │           │   Save Changes        │
      │           ├───────────────────────┤
      │           │                       │
      └───────────┴───────────────────────┘
            (Always Synchronized)
```

---

### Workflow 10: Authentication State Management

```
Any Page
    │
    ├─→ Page Load
    │     │
    │     └─→ Check Firebase Auth State
    │
    ├─→ User Logged In?
    │     │
    │     ├─→ YES
    │     │     │
    │     │     ├─→ Get user data
    │     │     ├─→ Check role (Firestore)
    │     │     │
    │     │     ├─→ Update Navigation
    │     │     │     │
    │     │     │     ├─→ Show "Logout"
    │     │     │     └─→ Show "Admin" (if admin)
    │     │     │
    │     │     └─→ Enable user features
    │     │
    │     └─→ NO
    │           │
    │           ├─→ Update Navigation
    │           │     │
    │           │     └─→ Show "Login"
    │           │
    │           └─→ Guest mode
    │
    └─→ Continue Page Load
```

---

## 🔐 Security Workflows

### Workflow 11: Admin Route Protection

```
User Attempts to Access admin.html
    │
    ├─→ Check Authentication
    │     │
    │     ├─→ Not Logged In
    │     │     │
    │     │     └─→ Redirect to login.html
    │     │
    │     └─→ Logged In
    │           │
    │           └─→ Check Role in Firestore
    │
    ├─→ Role Check
    │     │
    │     ├─→ role = "admin"
    │     │     │
    │     │     └─→ Allow Access
    │     │           │
    │     │           └─→ Load Admin Dashboard
    │     │
    │     └─→ role = "customer"
    │           │
    │           ├─→ Show "Access Denied"
    │           └─→ Redirect to index.html
    │
    └─→ END
```

---

### Workflow 12: Order Submission Security

```
User Submits Order
    │
    ├─→ Client-side Validation
    │     │
    │     ├─→ Check required fields
    │     ├─→ Validate email format
    │     ├─→ Validate phone format
    │     └─→ Validate address
    │
    ├─→ Validation Passed?
    │     │
    │     ├─→ NO
    │     │     │
    │     │     └─→ Show error message
    │     │           │
    │     │           └─→ Return to form
    │     │
    │     └─→ YES
    │           │
    │           └─→ Prepare order data
    │
    ├─→ Submit to Firestore
    │     │
    │     ├─→ Add timestamp
    │     ├─→ Add userId (if logged in)
    │     ├─→ Set status: "pending"
    │     └─→ Save to orders collection
    │
    ├─→ Firestore Security Rules
    │     │
    │     └─→ Validate data structure
    │           │
    │           └─→ Allow creation
    │
    ├─→ Success
    │     │
    │     ├─→ Clear cart
    │     └─→ Show success modal
    │
    └─→ END (Order Saved)
```

---

## 📊 Data Flow Workflows

### Workflow 13: Product Data Flow

```
Admin Dashboard
    │
    ├─→ Add Product Form
    │     │
    │     └─→ Submit
    │
    ├─→ Firebase Firestore
    │     │
    │     └─→ products collection
    │           │
    │           ├─→ Document created
    │           │     │
    │           │     └─→ Auto-generated ID
    │           │
    │           └─→ Real-time listener triggered
    │
    ├─→ All Connected Clients
    │     │
    │     ├─→ Homepage (index.html)
    │     │     │
    │     │     └─→ Fetch updated products
    │     │           │
    │     │           └─→ Re-render grid
    │     │
    │     └─→ Admin Dashboard
    │           │
    │           └─→ Refresh product list
    │
    └─→ END (Product Visible Everywhere)
```

---

### Workflow 14: Order Data Flow

```
Checkout Page
    │
    ├─→ User fills form
    │     │
    │     └─→ Customer info + Address
    │
    ├─→ Click "Place Order"
    │     │
    │     └─→ Collect data
    │           │
    │           ├─→ Customer details
    │           ├─→ Address details
    │           ├─→ Cart items
    │           ├─→ Price calculations
    │           └─→ User ID (if logged in)
    │
    ├─→ Firebase Firestore
    │     │
    │     └─→ orders collection
    │           │
    │           └─→ New order document
    │
    ├─→ Order Saved
    │     │
    │     ├─→ Can be viewed in Firebase Console
    │     ├─→ Can be processed by admin
    │     └─→ Can be tracked (future feature)
    │
    └─→ END (Order in System)
```

---

## 🎯 Complete User Journey

### Workflow 15: End-to-End Customer Journey

```
Day 1: Discovery
    │
    ├─→ User visits website
    ├─→ Browses products
    ├─→ Adds items to cart
    └─→ Leaves (cart saved in localStorage)

Day 2: Return & Purchase
    │
    ├─→ User returns to website
    ├─→ Cart still has items
    ├─→ Decides to purchase
    │
    ├─→ Creates account (optional)
    │     │
    │     └─→ Faster checkout next time
    │
    ├─→ Proceeds to checkout
    ├─→ Fills address form
    ├─→ Places order
    │
    └─→ Order confirmed
          │
          └─→ Email notification (future)

Day 3: Delivery
    │
    ├─→ Admin processes order
    ├─→ Order status updated (future)
    ├─→ User receives tracking (future)
    └─→ Delivery completed

Day 4: Repeat Customer
    │
    ├─→ User returns
    ├─→ Already logged in
    ├─→ Address saved (future)
    ├─→ Quick checkout
    └─→ Loyal customer! 🎉
```

---

## 🔄 Maintenance Workflows

### Workflow 16: Adding New Admin

```
Option 1: Using create-admin.html
    │
    ├─→ Visit create-admin.html
    ├─→ Fill form
    ├─→ Submit
    └─→ New admin created

Option 2: Manual (Firebase Console)
    │
    ├─→ User creates account normally
    │
    ├─→ Admin goes to Firebase Console
    │     │
    │     └─→ Firestore Database
    │
    ├─→ Find user in users collection
    │
    ├─→ Edit document
    │     │
    │     └─→ Change role: "customer" → "admin"
    │
    ├─→ Save
    │
    └─→ User now has admin access
```

---

## 📈 Analytics Workflow (Future)

```
User Actions
    │
    ├─→ Page views
    ├─→ Product views
    ├─→ Add to cart
    ├─→ Checkout initiated
    └─→ Order completed
          │
          └─→ Google Analytics (future)
                │
                └─→ Admin Dashboard
                      │
                      └─→ View metrics
                            │
                            ├─→ Popular products
                            ├─→ Conversion rate
                            ├─→ Revenue
                            └─→ Customer insights
```

---

**Workflows Version**: 1.0.0  
**Last Updated**: 2025-01-08  
**Status**: Complete and Documented
