const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    const minDegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    const secondDegree = ((second / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setDate, 1000);