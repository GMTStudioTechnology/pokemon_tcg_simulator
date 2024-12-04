let bgmVolume = parseFloat(localStorage.getItem('bgmVolume')) || 0.3;
let sfxVolume = parseFloat(localStorage.getItem('sfxVolume')) || 0.2;
let isBGMMuted = localStorage.getItem('isBGMMuted') === 'true' || false;
let isSFXMuted = localStorage.getItem('isSFXMuted') === 'true' || false;
let currentBGM = null;

function initAudio(musicPath) {
    if (!currentBGM) {
        currentBGM = new Audio(musicPath);
        currentBGM.loop = true;
        currentBGM.volume = isBGMMuted ? 0 : bgmVolume;
    }
}

function playBGM(musicPath = './1.mp3') {
    if (currentBGM && currentBGM.src !== musicPath) {
        fadeOutBGM().then(() => {
            startNewBGM(musicPath);
        });
    } else {
        startNewBGM(musicPath);
    }
}

function startNewBGM(musicPath) {
    currentBGM = new Audio(musicPath);
    currentBGM.loop = true;
    currentBGM.volume = isBGMMuted ? 0 : bgmVolume;
    
    currentBGM.addEventListener('timeupdate', () => {
        const buffer = 1;
        if (currentBGM.currentTime > currentBGM.duration - buffer) {
            fadeAudio(currentBGM, currentBGM.volume, 0, buffer);
        }
    });
    
    currentBGM.play().catch(() => console.log('Playback prevented'));
}

function fadeAudio(audioElement, start, end, duration) {
    const interval = 50;
    const steps = duration * 1000 / interval;
    const step = (end - start) / steps;
    
    let current = start;
    const fadeInterval = setInterval(() => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            clearInterval(fadeInterval);
            audioElement.volume = end;
        } else {
            audioElement.volume = current;
        }
    }, interval);
}

function fadeOutBGM() {
    return new Promise(resolve => {
        if (!currentBGM) resolve();
        fadeAudio(currentBGM, currentBGM.volume, 0, 0.5);
        setTimeout(() => {
            currentBGM.pause();
            currentBGM = null;
            resolve();
        }, 500);
    });
}

const SoundEffects = {
    CARD_FLIP: './src/sounds/card_flip.mp3',
    PACK_OPEN: './src/sounds/pack_open.mp3',
    RARE_CARD: './src/sounds/rare_card.mp3',
    BUTTON_CLICK: './src/sounds/button_click.mp3',
    HOVER: './src/sounds/card_hover.mp3'
};

class SoundPool {
    constructor(source, size = 3) {
        this.pool = Array(size).fill().map(() => {
            const audio = new Audio(source);
            audio.volume = isSFXMuted ? 0 : sfxVolume;
            return audio;
        });
        this.current = 0;
    }

    play() {
        if (isSFXMuted) return;
        this.pool[this.current].currentTime = 0;
        this.pool[this.current].play().catch(() => {});
        this.current = (this.current + 1) % this.pool.length;
    }

    setVolume(volume) {
        this.pool.forEach(audio => audio.volume = volume);
    }
}

const soundPools = {};
Object.entries(SoundEffects).forEach(([key, source]) => {
    soundPools[key] = new SoundPool(source);
});

function setVolume(type, value) {
    if (type === 'bgm') {
        bgmVolume = value;
        if (currentBGM) currentBGM.volume = isBGMMuted ? 0 : value;
        localStorage.setItem('bgmVolume', value);
    } else {
        sfxVolume = value;
        Object.values(soundPools).forEach(pool => pool.setVolume(isSFXMuted ? 0 : value));
        localStorage.setItem('sfxVolume', value);
    }
}

function toggleMute(type) {
    if (type === 'bgm') {
        isBGMMuted = !isBGMMuted;
        if (currentBGM) currentBGM.volume = isBGMMuted ? 0 : bgmVolume;
        localStorage.setItem('isBGMMuted', isBGMMuted);
    } else {
        isSFXMuted = !isSFXMuted;
        Object.values(soundPools).forEach(pool => 
            pool.setVolume(isSFXMuted ? 0 : sfxVolume));
        localStorage.setItem('isSFXMuted', isSFXMuted);
    }
}

window.playBGM = playBGM;
window.setVolume = setVolume;
window.toggleMute = toggleMute;
window.playSFX = (effect) => soundPools[effect]?.play();
