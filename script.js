let player;
let playerDom;

let src1 = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
let src = 'https://tv.googledrivelinks.com/live.php?c=Jio_Cricket&q=250&e=.m3u8'
let type = 'application/x-mpegURL'

function createVideoDom() {
    const ParentEl = document.getElementById('player-output');
    const videoEl = document.createElement('video');
    videoEl.setAttribute('class', 'videoPlayer');
    videoEl.controls = false;
    videoEl.autoplay = false;

    ParentEl.appendChild(videoEl);
    return videoEl;
}

function createVideoPlayer() {
    const playerConfig = {
        controlBar: false,
        errorDisplay: false,
        textTrackSettings: false,
        bigPlayButton: false,
        loadingSpinner: false,
        textTrackDisplay: false,
        posterImage: false,
        autoplay: true,
    }

    const playerCBFunction = () => {};

    return videojs(
        playerDom,
        playerConfig,
        playerCBFunction
    );
}