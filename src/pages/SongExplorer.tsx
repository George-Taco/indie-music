import { useEffect, useState } from 'react';
import '../firebase/firebaseConfig';
import { DocumentData } from "firebase/firestore";
import SongEmbed from '../components/SongEmbed';
import { fetchDataFromFireStore } from '../firebase/firebaseFunctions';


function SongExplorer(){

    const temporaryArr: DocumentData[] = [];

    const [storedValues, setStoredValues] = useState(temporaryArr);

    useEffect(() => {
        
        fetchDataFromFireStore().then((data) => {
            setStoredValues(data);
        });
        //console.log("loaded songs!")
    }, []);

    return (
        <div className='grid-container'>
            { storedValues.map((item) => <SongEmbed trackId={item.id} numLikes={1}/>) }
        </div>
     )   

    }

export default SongExplorer