let bgm;

function initAudio() {
    if (!bgm) {
        bgm = new Audio('./pokemon_tcg.mp3');
        bgm.loop = true;
        bgm.volume = 0.3;
    }
}

function playBGM() {
    initAudio();
    bgm.play().catch(function(error) {
        console.log("Audio autoplay failed:", error);
    });
}

function pauseBGM() {
    if (bgm) {
        bgm.pause();
    }
} 