// Firebase Authentication Module
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import { app } from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

// Check if user is admin
export async function isAdmin(uid) {
    try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        return userDoc.exists() && userDoc.data().role === 'admin';
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
}

// Sign up new user
export async function signUp(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Create user document
        await setDoc(doc(db, 'users', user.uid), {
            email: email,
            name: name,
            role: 'customer',
            createdAt: new Date().toISOString()
        });
        
        return { success: true, user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign in user
export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Sign out user
export async function logOut() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Get current user
export function getCurrentUser() {
    return auth.currentUser;
}

// Auth state observer
export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
}

export { auth };
