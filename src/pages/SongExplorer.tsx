import React, { useState } from 'react';
import '../firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, query, DocumentData, doc, getDoc } from "firebase/firestore";



function SongExplorer() {

    const temporaryArr: DocumentData[] = [];

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    let [storedValues, setStoredValues] = useState(temporaryArr);
  
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
        <div className="SongExplorer">
            <h1>Song Explorer</h1>
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

            <iframe src="https://open.spotify.com/embed/track/0nsCBf5okWMVoaiDU9xiK7" width="250" height="450"></iframe>

            <button onClick={readDoc}>Read doc from Firestore</button>

            <div>
                {storedValues.map( (item, index) => (
                    <div key={index}>
                        <p>{item.field1}: {item.field2}: {item.field3}: {item.field4}</p>
                    </div>
                )
                )}
            </div>

        </div>


    );
}

export default SongExplorer;