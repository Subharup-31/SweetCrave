// Clear Firebase products collection
// Run this in browser console at http://localhost:8000 to clear all products

async function clearProducts() {
    if (window.firebase && window.firebase.db) {
        try {
            const productsCol = window.firebase.collection(window.firebase.db, 'products');
            const productSnapshot = await window.firebase.getDocs(productsCol);
            const deletePromises = productSnapshot.docs.map(doc => 
                window.firebase.deleteDoc(doc.ref)
            );
            await Promise.all(deletePromises);
            console.log('All products cleared from Firebase!');
            alert('All products cleared! Refresh the page to see changes.');
        } catch (error) {
            console.error('Error clearing products:', error);
        }
    } else {
        console.error('Firebase not available');
    }
}

// Add your specific product to Firebase
async function addYourProduct() {
    if (window.firebase && window.firebase.db) {
        const product = {
            name: 'Chocolate Delight',
            description: 'Rich chocolate pastry with cream',
            price: 150,
            image: 'https://images.unsplash.com/photo-1599785209796-9f1d3e6f6c2c?auto=format&fit=crop&w=800&q=80',
            emoji: '🍫'
        };

        try {
            await window.firebase.addDoc(window.firebase.collection(window.firebase.db, 'products'), product);
            console.log('Your Chocolate Delight product added to Firebase!');
            alert('Your Chocolate Delight product added! Refresh the page to see it.');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    } else {
        console.error('Firebase not available');
    }
}
