function play() {
    playerDom.play();
}

function pause() {
    playerDom.pause();
}

function rewind() {
    playerDom.currentTime -= 10;
}

function forward() {
    playerDom.currentTime += 10;
}

function restart() {
    playerDom.currentTime = 0;
}

function fullScreen() {
    playerDom.requestFullscreen();
}

function muteToggle(value) {
    playerDom.muted = value;
}

function volume() {
    const volumeValue = document.getElementById('vol-control').value;
    playerDom.volume = volumeValue/100;
}

function toPlay(src, type) {
    player.src({
        src,
        type
    })
}

function toAddSubTitle(src) {
    const trackEl = document.createElement('track');
    trackEl.src = src;
    trackEl.kind = 'subtitles';
    trackEl.srclang = 'en';
    playerDom.appendChild(trackEl);
}

function defaultPlay() {
    toPlay(
        CONSTANT.stream.hls.src,
        CONSTANT.stream.hls.type
        );
}

function addLinkToPlay() {
    const videoUrl = document.getElementById('player-video-input').value;
    toPlay(videoUrl, CONSTANT.common.types.hls);
}

function addSubtitleLinkToPlay() {
    const subtitleUrl = document.getElementById('player-subtitle-input').value;
    toAddSubTitle(subtitleUrl);
}

function resetPlayerInput() {
    document.getElementById('player-video-input').value = '';
}

function resetPlayerSubtitleInput() {
    document.getElementById('player-subtitle-input').value = '';
}

function videoDuration() {
    const { duration } = playerDom;
    const videoDurationEl = document.getElementById('player-video-duration');
    videoDurationEl.innerText = duration;
}

function videoCurrentTime() {
    const { currentTime } = playerDom;
    const videoCurrentTimeEl = document.getElementById('player-video-current-time');
    videoCurrentTimeEl.innerText = currentTime;
}

function setAudio(trackLabel) {
    const audioTracks = player.audioTracks();
    if (audioTracks && audioTracks.length) {
        for (let i = 0; i < audioTracks.length; i++) {
            if (audioTracks[i].label == trackLabel) {
                audioTracks[i].enabled = true; 
            } else {
                audioTracks[i].enabled = false; 
            }
        }
    }
}

function getAudios() {
    const audioTracks = player.audioTracks();
    if (audioTracks && audioTracks.length) {
        const audioTracksParentEl = document.getElementById('player-available-tracks');
        const audioTracksEL = [];
        for (let i = 0; i < audioTracks.length; i++) {
            const { label } = audioTracks[i];
            const audioEl = document.createElement('div');
            audioEl.setAttribute('class', 'video-available-tracks');
            audioEl.onclick = () => setAudio(label);
            audioEl.innerText = label; 
            audioTracksEL.push(audioEl);
        }
        audioTracksParentEl.innerHTML = '';
        audioTracksParentEl.append(...audioTracksEL);
    }
}

// id
// : 
// "English"
// kind
// : 
// (...)
// label
// : 
// "English"
// language
// : 
// "en"