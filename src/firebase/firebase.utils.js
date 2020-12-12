import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnuHmMAe-AVGD_yrLWa3-aoGpG31FZHD8",
    authDomain: "crwn-db-ce924.firebaseapp.com",
    projectId: "crwn-db-ce924",
    storageBucket: "crwn-db-ce924.appspot.com",
    messagingSenderId: "708426399827",
    appId: "1:708426399827:web:e8099e9c0ceb9a97c886a6",
    measurementId: "G-FTQ5PY8M0S"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt  = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

