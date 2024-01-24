function playSound(e) {
    let audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    let key = document.querySelector('div[data-key="${e.keyCode}"]');
    if (!audio)
        return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}