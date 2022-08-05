function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  return {x, y};
}

function updateGrid(position) {
  let xIndex = Math.floor(position.x / squareSize);
  let yIndex = Math.floor(position.y / squareSize);

  grid[yIndex][xIndex] = !grid[yIndex][xIndex];
}

function copyGrid(grid) {
  let gridCopy = [];
  for(const row in grid) {
    let rowCopy = [];
    for(const cell in row) {
      rowCopy.push(cell);
    }
    gridCopy.push(rowCopy);
  }

  return gridCopy;
}

