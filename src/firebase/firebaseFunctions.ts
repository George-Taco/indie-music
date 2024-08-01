import './firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, DocumentData } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

initializeApp(firebaseConfig)

const db = getFirestore();



    // save doc to songPreviews collection
    const saveDataToFireStore = async (inputTitle: string, inputArtist: string, inputLikes: string, inputId: string) => {
      await addDoc(collection(db, "songPreviews"), {
        name: inputTitle,
        artist: inputArtist,
        likes: inputLikes,
        id: inputId

      });
      console.log("Document written to database");
    }


    // fetch data from songPreviews collection
    const fetchDataFromFireStore = async () => {
        const querySnapshot = await getDocs(collection(db, "songPreviews"));
        const temporaryArr: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        //setStoredValues(temporaryArr);
        console.log("fetched data from firestore!!!")
        return temporaryArr;
    }


    // get current users URL
    const getUserId = () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        //const displayName = user.displayName;
        //const email = user.email;
        const uid = user.uid;
        return uid;
      }
    }

    const getDisplayName = () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const displayName = user.displayName;
        return displayName;
      }
    }

    const getUserEmail = () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const email = user.email;
        return email;
      }
    }


export { saveDataToFireStore, fetchDataFromFireStore, getUserId, getDisplayName, getUserEmail };