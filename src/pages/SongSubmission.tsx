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
            <div className="submission-form-background">
                <h1 className='submission-header'>Submit A Song</h1>
                <p className='submission-subheader'>Submit your own song right here! Note that songs are all reviewed first and not all songs are accepted.</p>

                <p className='submission-input-header'>Title</p>
                <input
                    type='text'
                    value={inputTitle}
                    placeholder='my song'
                    onChange={(e) => setInputTitle(e.target.value)}
                />

                <p className='submission-input-header'>Artist</p>
                <input
                    type='text'
                    value={inputArtist}
                    placeholder='artist'
                    onChange={(e) => setInputArtist(e.target.value)}
                />

                <p className='submission-input-header'>Number of Likes</p>
                <input
                    type='text'
                    value={inputLikes}
                    placeholder='0'
                    onChange={(e) => setInputLikes(e.target.value)}
                />

                <p className='submission-input-header'>Spotify ID</p>
                <input
                    type='text'
                    value={inputId}
                    placeholder='spotify ID'
                    onChange={(e) => setInputId(e.target.value)}
                />
                <button className="submit-song-button" onClick={() => saveDataToFireStore(inputTitle, inputArtist, inputLikes, inputId)}>Submit Song</button> <br></br>

                <div>
                    {storedValues.map( (item, index) => (
                        <div key={index}>
                            <p>{item.id}: {item.field2}: {item.field3}: {item.field4}</p>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>


    );
}

export default SongSubmission;