import heart from '../icons/Heart.png'

interface Props {
    trackId: string;
    numLikes: number;
}


function SongEmbed({ trackId, numLikes }: Props) {

    const embedUrl = "https://open.spotify.com/embed/track/" + trackId;

    return (
        <div className='spotifyEmbedContainer'>
            <iframe className = "spotifyEmbed" src={embedUrl} width="290" height="360" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <button id="like">
                <img src={heart}></img>
            </button>
        </div>
    )

}


export default SongEmbed;