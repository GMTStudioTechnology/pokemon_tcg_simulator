let bgm;

function initAudio(musicPath) {
    if (!bgm) {
        bgm = new Audio(musicPath);
        bgm.loop = true;
        bgm.volume = 0.3;
    }
}

function playBGM(musicPath = './1.mp3') {
    if (bgm && bgm.src !== musicPath) {
        bgm.pause();
        bgm = null;
    }
    initAudio(musicPath);
    bgm.play().catch(function(error) {
        console.log("Audio autoplay failed:", error);
    });
}

function pauseBGM() {
    if (bgm) {
        bgm.pause();
    }
} 