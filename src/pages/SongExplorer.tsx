import { useState } from 'react';
import '../firebase/firebaseConfig';
import { getFirestore, addDoc, collection, getDocs, query, DocumentData, doc, getDoc } from "firebase/firestore";



function SongExplorer() {

    return (
        <div className="SongExplorer">
            <h1>Song Explorer</h1>
        </div>


    );
}

export default SongExplorer;