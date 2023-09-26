const CONSTANT = {
    stream: {
        hls: {
            type: 'application/x-mpegURL',
            subtitle: 'https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt',
            src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        }
    },
    common: {
        types: {
            hls: 'application/x-mpegURL'
        }
    },
    playlist: [
        {
            name: 'tears of steal',
            type: 'application/x-mpegURL',
            subtitle: 'https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt',
            src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        },
        {
            name: 'man of steal',
            type: 'application/x-mpegURL',
            subtitle: 'https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt',
            src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        },
        {
            name: 'multi-audio-video-url',
            type: 'application/x-mpegURL',
            subtitle: '',
            src: 'https://cdn.bitmovin.com/content/assets/sintel/hls/playlist.m3u8',
        }
    ]
}