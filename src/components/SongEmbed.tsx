import React, { useState, useEffect } from 'react';
import heart from '../icons/Heart.png';
import filledHeart from '../icons/Filledheart.png';
import { getUserId } from '../firebase/firebaseFunctions';
import { setDoc, getFirestore, doc } from 'firebase/firestore'

interface Props {
    trackId: string;
    numLikes: number;
}

function SongEmbed({ trackId, numLikes }: Props) {
    const [isClicked, setIsClicked] = useState(false);
    const db = getFirestore();
    const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
    let userId = getUserId();
    let confirmedUserId: string = userId as string;


    useEffect(() => {
        const likedTracks = JSON.parse(localStorage.getItem('likedTracks') || '[]');
        setIsClicked(likedTracks.includes(trackId));
    }, [trackId]);

    

    const handleLikeClick = async () => {
        const likedTracks = JSON.parse(localStorage.getItem('likedTracks') || '[]');

        if (isClicked) {
            const updatedTracks = likedTracks.filter((id: string) => id !== trackId);
            localStorage.setItem('likedTracks', JSON.stringify(updatedTracks));
            await setDoc(doc(db, "LikedSongs", confirmedUserId), {
                ids: updatedTracks
            });
        } else {
            likedTracks.push(trackId);
            localStorage.setItem('likedTracks', JSON.stringify(likedTracks));
            await setDoc(doc(db, "LikedSongs", confirmedUserId), {
                ids: likedTracks
            });
        }

        setIsClicked(!isClicked);
    };

    return (
        <div className='spotifyEmbedContainer'>
            <iframe className="spotifyEmbed" src={embedUrl} width="290" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <button id="like" onClick={handleLikeClick}>
                <img src={isClicked ? filledHeart : heart} alt="Heart Icon" className={`heartIcon ${isClicked ? 'heartIconFilled' : 'heartIconUnfilled'}`}/>
            </button>
        </div>
    );
}

export default SongEmbed;