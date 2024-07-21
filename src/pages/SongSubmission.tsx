import React, { useState } from 'react';
import '../firebase/firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, query, DocumentData, doc, getDoc } from "firebase/firestore";
import SongEmbed from '../components/SongEmbed'
import fetchData from '../firebase/firebaseFunctions';



function SongSubmission() {

    const temporaryArr: DocumentData[] = [];

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    let [storedValues, setStoredValues] = useState(temporaryArr);

    
    const songIDs = [
        { id: '2kzGJLQ9e2lS2NqIajgbG9', likes: 10},
        { id: '0QwKxajohg1rAMMmv1AWe1', likes: 27},
        { id: '7DF8lvLdV3htIbuTWpc7lR', likes: 203}
    ];
    
    const db = getFirestore();

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

    
  
    // save
    const saveDataToFireStore = async () => {
      const docRef = await addDoc(collection(db, "songPreviews"), {
        name: inputValue1,
        artist: inputValue2,
        likes: inputValue3,
        id: inputValue4

      });
      console.log("Document written to database");
    }

    const fetchDataFromFireStore = async () => {
        const querySnapshot = await getDocs(collection(db, "songPreviews"));
        const temporaryArr: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        setStoredValues(temporaryArr);
    }

    return (
        <div className="SongSubmission">
            <h1>Song Submission</h1>
            <input
                type='text'
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
            />
            <input
                type='text'
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
            />
            <input
                type='text'
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
            />
            <input
                type='text'
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
            />
            <button onClick={saveDataToFireStore}>Save to Firestore</button> <br></br>

            <button onClick={fetchDataFromFireStore}>Fetch from Firestore</button>

            <button onClick={fetchData}>Log fetch</button>

            <div>
                {storedValues.map( (item, index) => (
                    <div key={index}>
                        <p>{item.field1}: {item.field2}: {item.field3}: {item.field4}</p>
                    </div>
                )
                )}
            </div>

            { songIDs.map((id) => <SongEmbed trackId={id.id} numLikes={id.likes}/>) }
        </div>


    );
}

export default SongSubmission;