const list = document.querySelector('.videos');
const videos = Array.from(list.querySelectorAll('li'));

const times = videos
.map((video) => {
    return video.dataset.time;
})
.map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return (mins * 60) + secs;
});

const totalTime = times.reduce((total = 0, seconds) => {
    return total + seconds;
});

const hours = Math.floor(totalTime / 3600);
let secondsLeft = totalTime % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);

