
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD4lg9g_Np8AlZaeXZyIcrv40U13XQJ22A",
  authDomain: "webcarros-4e36e.firebaseapp.com",
  projectId: "webcarros-4e36e",
  storageBucket: "webcarros-4e36e.appspot.com",
  messagingSenderId: "695465401985",
  appId: "1:695465401985:web:aa1942bb215d994dc9f780"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };