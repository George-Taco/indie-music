import React, { useState } from 'react';
import '../firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, query, DocumentData } from "firebase/firestore";


function SongExplorer() {

    const temporaryArr: DocumentData[] = [];

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    let [storedValues, setStoredValues] = useState(temporaryArr);
  
    const db = getFirestore();
  
    const saveDataToFireStore = async () => {
      const docRef = await addDoc(collection(db, "myCollection"), {
        field1: inputValue1,
        field2: inputValue2,
      });
      console.log("Document written to database");
    }

    const fetchDataFromFireStore = async () => {
        const querySnapshot = await getDocs(collection(db, "myCollection"));
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
            <button onClick={saveDataToFireStore}>Save to Firestore</button> <br></br>

            <button onClick={fetchDataFromFireStore}>Fetch from Firestore</button>

            <div>
                {storedValues.map( (item, index) => (
                    <div key={index}>
                        <p>{item.field1}: {item.field2}</p>
                    </div>
                )
                )}
            </div>

        </div>


    );
}

export default SongExplorer;