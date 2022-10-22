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
    addDoc,
    getFirestore,
    setDoc,
    collection,
    getDocs,
    query,
    where,
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


export const createOrderDocument = async(user,orders) => {
    if(!orders || !user) return;

    const userID = user.uid;

    const createdAt = new Date();

    const orderDocs = await collection(db, 'burger-king-orders');
    
    
    const res = await addDoc(orderDocs, {
        userID,
        createdAt, 
        orderDetails : orders,
    });

    return res;
}

export const GetUserOrders = async(user) => {
    if(!user) return;
    let userOrders = [];
    const orderDocs = await collection(db, 'burger-king-orders');
    const {uid} = user;
    const q = query(orderDocs , where("userID" , "==" , uid) );
    const res = await getDocs(q);
    
    res.docs.map((item) => {
        userOrders = [...userOrders , item.data()];
    });

    return userOrders;
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth , callback);

export const signOutUser = async() => await signOut(auth);