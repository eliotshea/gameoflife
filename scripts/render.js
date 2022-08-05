const canvas = document.getElementById('board');
const context = canvas.getContext('2d');

const width = 1000;
const height = 1000;

const squareSize = 20;
const padding = 2;

var grid = Array.from(Array(width / squareSize), () => new Array(width / squareSize).fill(false));

var backgroundColor = '#282d47';
var aliveColor = 'green';
var deadColor = '#3a4166';

function drawGrid(context, grid) {
  var ogFillstyle = context.fillStyle;

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  offsetY = 0;
  offsetX = 0;

  while (offsetY + squareSize <= canvas.height) {
    while (offsetX + squareSize <= canvas.width) {
      if(grid[offsetY / squareSize][offsetX / squareSize]) {
        context.fillStyle = aliveColor;
      } else {
        context.fillStyle = deadColor;
      }
      context.fillRect(offsetX + (padding / 2), offsetY + (padding / 2), squareSize - padding, squareSize - padding);
      offsetX += squareSize;
    }
    offsetX = 0;
    offsetY += squareSize;
  }

  context.fillStyle = ogFillstyle;
}

