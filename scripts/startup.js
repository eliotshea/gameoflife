canvas.width = width;
canvas.height = height;

const barX =  document.getElementById('barX');
const barY = document.getElementById('barY');
var barXOffset = 0;
var barYOffset = 0;

barX.setAttribute("style",`height:${height}px; width:10px;`);
barY.setAttribute("style",`width:${width}px; height:10px;`);

canvas.addEventListener('mousedown', function(e) {
  updateGrid(getCursorPosition(canvas, e));
  drawGrid(context, grid);
});

drawGrid(context, grid);

var running = false;
var speed = 100;
const button = document.getElementById("startStop")

button.addEventListener('click', (e) => {
  running = !running
  if (running) {
    button.innerHTML = 'Stop';
  } else {
    button.innerHTML = 'Start';
  }
});

var intervalId = setInterval(() => {
  if (running) {
    grid = getNextGridState(grid);
    drawGrid(context, grid);
  }
}, speed);

