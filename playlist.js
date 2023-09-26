function playPlaylistItem({ src, type }) {
    toPlay(
        src,
        type
    );
    getAudios();
}

function createPlaylist() {
    const playlist = CONSTANT.playlist;
    const playlistParent = document.getElementById('player-playlist-container');

    let playlistItemEls = [];
    playlist.forEach(el => {
        const playlistItemEL = document.createElement('div');
        playlistItemEL.setAttribute('class', 'playlist-item');
        playlistItemEL.onclick = () => playPlaylistItem({
            src: el.src,
            type: el.type
        });
        playlistItemEL.innerText = el.name;
        playlistItemEls.push(playlistItemEL);
    })
    playlistParent.append(...playlistItemEls);
}