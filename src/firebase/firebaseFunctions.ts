import React, { useState } from 'react';
import './firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, query, DocumentData, doc, getDoc, QueryDocumentSnapshot } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig)

const db = getFirestore();


/*
const readDoc = async () => {
    const docRef = doc(db, "songPreviews", "Gmj0eDqUPQ9BN0L3LpMV");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}


const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
const [inputValue4, setInputValue4] = useState('');
const saveDataToFireStore = async () => {
  const docRef = await addDoc(collection(db, "songPreviews"), {
    name: inputValue1,
    artist: inputValue2,
    likes: inputValue3,
    id: inputValue4

  });
  console.log("Document written to database");
}



const temporaryArr: DocumentData[] = [];
let [storedValues, setStoredValues] = useState(temporaryArr);
const fetchDataFromFireStore = async () => {
    const querySnapshot = await getDocs(collection(db, "songPreviews"));
    const temporaryArr: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
    });
    setStoredValues(temporaryArr);
}
*/



async function fetchData() {

    type Dictionary = { [key: string]: any }
    const dataArr: Dictionary[] = [];
    const querySnapshot = await getDocs(collection(db, "songPreviews"))

    querySnapshot.forEach((doc) => {

        const docDict: { [key: string]: any} = {};
        const docData = doc.data();

        for (const key in docData) {
            docDict[key] = docData[key];
        }

        dataArr.push(docDict);

    })
    console.log(dataArr);
}

/*
const temporaryArr: DocumentData[] = [];
//let [storedValues, setStoredValues] = useState(temporaryArr);
const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "songPreviews"));
    snapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
    });
    console.log(temporaryArr);
}
*/
export default fetchData;