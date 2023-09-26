function bindEvents() {
    playerDom.onloadedmetadata = _onLoadedMetaData;
    playerDom.onplay = _onPlay;
    playerDom.ontimeupdate = _onTimeUpdate;
}

function _onPlay() {
}

function _onLoadedMetaData() {
    videoDuration();
    getAudios();
    // toAddSubTitle(CONSTANT.stream.hls.subtitle);
}

function _onTimeUpdate() {
    videoCurrentTime();
}