import  { useState } from 'react';
import '../firebase/firebaseConfig';
import { DocumentData } from "firebase/firestore";
import { saveDataToFireStore, fetchDataFromFireStore } from '../firebase/firebaseFunctions';



function SongSubmission() {

    const temporaryArr: DocumentData[] = [];

    const [inputTitle, setInputTitle] = useState('');
    const [inputArtist, setInputArtist] = useState('');
    const [inputLikes, setInputLikes] = useState('');
    const [inputId, setInputId] = useState('');
    const [storedValues, setStoredValues] = useState(temporaryArr);


    return (
        <div className="SongSubmission">
            <h1>Song Submission</h1>
            <input
                type='text'
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
            />
            <input
                type='text'
                value={inputArtist}
                onChange={(e) => setInputArtist(e.target.value)}
            />
            <input
                type='string'
                value={inputLikes}
                onChange={(e) => setInputLikes(e.target.value)}
            />
            <input
                type='text'
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
            />
            <button onClick={() => saveDataToFireStore(inputTitle, inputArtist, inputLikes, inputId)}>Save to Firestore</button> <br></br>

            <button onClick={fetchDataFromFireStore}>Fetch from Firestore</button>

            <div>
                {storedValues.map( (item, index) => (
                    <div key={index}>
                        <p>{item.id}: {item.field2}: {item.field3}: {item.field4}</p>
                    </div>
                )
                )}
            </div>
        </div>


    );
}

export default SongSubmission;