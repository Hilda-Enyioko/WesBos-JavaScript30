const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineJoin = "round"; // sets the shape of the points where lines join
context.linWidth = 90; // sets the width of the lines
context.lineCap = "round"; // sets the shape of the beginning and the end of the lines
context.strokeStyle = "#000000" //sets the outline color of the lines

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if (!isDrawing)
        return;
    console.log(e);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX, lastY); // start from
    context.lineTo(e.offsetX, e.offsetY); //go to
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360)
        hue = 0;

    if (context.lineWidth <= 1 || context.lineWidth >= 100)
        direction = !direction;

    if (direction)
      context.lineWidth++;
    else context.lineWidth--;
}

canvas.addEventListener('mousemove', draw);