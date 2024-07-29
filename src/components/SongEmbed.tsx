import React, { useState, useEffect } from 'react';
import heart from '../icons/Heart.png';
import filledHeart from '../icons/Filledheart.png';

interface Props {
    trackId: string;
    numLikes: number;
}

function SongEmbed({ trackId, numLikes }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

    useEffect(() => {
        const likedTracks = JSON.parse(localStorage.getItem('likedTracks') || '[]');
        setIsClicked(likedTracks.includes(trackId));
    }, [trackId]);

    const handleLikeClick = () => {
        const likedTracks = JSON.parse(localStorage.getItem('likedTracks') || '[]');

        if (isClicked) {
            const updatedTracks = likedTracks.filter((id: string) => id !== trackId);
            localStorage.setItem('likedTracks', JSON.stringify(updatedTracks));
        } else {
            likedTracks.push(trackId);
            localStorage.setItem('likedTracks', JSON.stringify(likedTracks));
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