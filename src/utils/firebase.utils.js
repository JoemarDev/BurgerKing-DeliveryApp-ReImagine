import { initializeApp } from 'firebase/app';

import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';

import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5nPkHUsYaiQrrZnv6qZ3DzLwX-G7oWsA",
    authDomain: "dev-sandbox-43dbb.firebaseapp.com",
    projectId: "dev-sandbox-43dbb",
    storageBucket: "dev-sandbox-43dbb.appspot.com",
    messagingSenderId: "817499310516",
    appId: "1:817499310516:web:b48015328d671471114ae1",
    measurementId: "G-K7XV7T5KP2"
}

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : "select_account"
});

export const db = getFirestore();

export const auth = getAuth();

export const siginInWithGooglePopup = () => signInWithPopup(auth , googleProvider);


export const createUserDocumentFromAuth = async(userAuth) => {
    // Function for checking the user wether his already in the data or not , save if not exists.
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'burger-king-app-users' , userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName , email , photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef , {
                displayName,
                email,
                photoURL,
                createdAt
            });
        } catch (error) {
            console.log(`error creating the user ${error.message}`);
        }
    }

    return userDocRef;
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth , callback);

export const signOutUser = async() => await signOut(auth);