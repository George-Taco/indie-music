import React from 'react';
import SongEmbed from '../components/SongEmbed';

function Likes() {
    const likedTracks = JSON.parse(localStorage.getItem('likedTracks') || '[]');

    return (
        <div className="grid-container">
            {likedTracks.map((trackId: string) => (
                <SongEmbed key={trackId} trackId={trackId} numLikes={0} />
            ))}
        </div>
    );
}

export default Likes;