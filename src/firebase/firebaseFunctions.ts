import './firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, DocumentData } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig)

const db = getFirestore();



    // save doc to songPreviews collection
    const saveDataToFireStore = async (inputTitle: string, inputArtist: string, inputLikes: string, inputId: string) => {
      const docRef = await addDoc(collection(db, "songPreviews"), {
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



export { saveDataToFireStore, fetchDataFromFireStore };