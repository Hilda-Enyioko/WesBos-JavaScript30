const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const slider = player.querySelectorAll('.player__slider');
const skip = player.querySelectorAll('[data-skip]');
const screenButton = player.querySelectorAll('.screen-size');


/* plays or pauses video */
function playVideo() {
    if (video.paused) video.play();
        else video.pause();
}

/* changes toggle icon */
function changeToggle() {
    if (video.paused) toggle.textContent = '►';
        else toggle.textContent = '❚ ❚';
}

/* skips time according to sip button */
function skipTime() {
    video.currentTime += parseFloat(this.dataset.skip);
}

/* sets volume and play back rate*/
function setRange() {
    video[this.name] = this.value;
}

/* sets video progress on progress bar*/
function setProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

/* scrub time */
function scrubTime(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', playVideo);
video.addEventListener('click', changeToggle);
video.addEventListener('timeupdate', setProgress);

toggle.addEventListener('click', playVideo);
toggle.addEventListener('click', changeToggle);

skip.forEach((button) => {
    button.addEventListener('click', skipTime);
})

slider.forEach((slide) => {
    slide.addEventListener('click', setRange)
})

slider.forEach((slide) => {
    slide.addEventListener('mousemove', setRange)
})

progress.addEventListener('click', scrubTime);
progress.addEventListener('mousedown', scrubTime);

