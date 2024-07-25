import heart from '../icons/Heart.png'
import { useState } from 'react';
import '../firebaseConfig';


function SongExplorer(){
    return (
        <div>
            <iframe className="leftSongs" src="https://open.spotify.com/embed/track/2BJSMvOGABRxokHKB0OI8i?utm_source=generator" width="300" height="400vh" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <button id="test">
                <img src={heart}></img>
            </button>
        </div>
     )   

    }

export default SongExplorer