require('dotenv').config({ path: '.env.local' });
const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function testAuth() {
    try {
        console.log("Attempting sign in with dummy credentials...");
        await signInWithEmailAndPassword(auth, "testuser@shetra.com", "wrongpassword123");
        console.log("Success (unexpected)");
    } catch (error) {
        console.log("ERROR CODE:", error.code);
        console.log("ERROR MESSAGE:", error.message);
    }
    process.exit(0);
}

testAuth();
