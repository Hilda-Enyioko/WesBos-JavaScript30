const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// Get webcam video
function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
    .then((localMediaStream) => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch((error) => {
        console.error("ERROR!", error);
    });
}

getVideo();

//copy and add effects video
function copyVideo() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
}

// paste webcam video to canvas
function paintToCanvas() {
    return setInterval(copyVideo, 16);
}

video.addEventListener('canplay', paintToCanvas);

// take photo
function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;

    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i +=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
  }

  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i +=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }
