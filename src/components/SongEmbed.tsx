interface Props {
    trackId: string;
    numLikes: number;
}


function SongEmbed({ trackId, numLikes }: Props) {

    const embedUrl = "https://open.spotify.com/embed/track/" + trackId;

    return (
        <iframe src={embedUrl} width="300vh" height="400vh" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )

}

export default SongEmbed;