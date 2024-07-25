import { useState, useEffect } from 'react';
import '../firebase/firebaseConfig';
import { getFirestore, DocumentData } from "firebase/firestore";
import SongEmbed from '../components/SongEmbed'
import { saveDataToFireStore, fetchDataFromFireStore } from '../firebase/firebaseFunctions';



function SongSubmission() {

    const temporaryArr: DocumentData[] = [];
    const db = getFirestore();

    const [inputTitle, setInputTitle] = useState('');
    const [inputArtist, setInputArtist] = useState('');
    const [inputLikes, setInputLikes] = useState('');
    const [inputId, setInputId] = useState('');
    const [storedValues, setStoredValues] = useState(temporaryArr);


    useEffect(() => {
        
        fetchDataFromFireStore().then((data) => {
            setStoredValues(data);
        });
        //console.log("loaded songs!")
    }, []);

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

            <button onClick={fetchDataFromFireStore}>Log fetch</button>

            <div>
                {storedValues.map( (item, index) => (
                    <div key={index}>
                        <p>{item.id}: {item.field2}: {item.field3}: {item.field4}</p>
                    </div>
                )
                )}
            </div>
            { storedValues.map((item) => <SongEmbed trackId={item.id} numLikes={1}/>) }
        </div>


    );
}

export default SongSubmission;