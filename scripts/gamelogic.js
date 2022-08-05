function getLivingNeighbors(grid, x, y) {
  let neighbors = 0;

  // Top row
  if (grid[y - 1] !== undefined) {
    if (grid[y - 1][x - 1] === true) {
      neighbors++;
    }
    if (grid[y - 1][x] === true) {
      neighbors++;
    }
    if (grid[y - 1][x + 1] === true) {
      neighbors++;
    }
  }

  // Middle row
  if (grid[y][x - 1] === true) {
    neighbors++;
  }
  if (grid[y][x + 1] === true) {
    neighbors++;
  }

  // Bottom row
  if (grid[y + 1] !== undefined) {
    if (grid[y + 1][x - 1] === true) {
      neighbors++;
    }
    if (grid[y + 1][x] === true) {
      neighbors++;
    }
    if (grid[y + 1][x + 1] === true) {
      neighbors++;
    }
  }

  return neighbors;
}

function getNextGridState(grid) {
  var nextState = copyGrid(grid);

  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[y].length; x++) {
      var neighbors = getLivingNeighbors(grid, x, y);

      if (grid[y][x] === true) {
        if (neighbors > 1 && neighbors < 4) {
          nextState[y][x] = true;
        } else {
          nextState[y][x] = false;
        }
      } else {
        if (neighbors === 3) {
          nextState[y][x] = true;
        } else {
          nextState[y][x] = false;
        }
      }
    }
  }

  return nextState;
}