window.onload = () => {
    playerDom = createVideoDom();
    player = createVideoPlayer();
    bindEvents();
    createPlaylist();
}