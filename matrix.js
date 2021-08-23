const w = parseInt(prompt("Ширина матрицы"));
const h = parseInt(prompt("Высота матрицы"));

function matrixA(w, h) {
  let result = new Array(h).fill("").map(() => new Array(w).fill());

  let counter = 1,
      startCol = 0,
      endCol = w - 1,
      startRow = 0,
      endRow = h - 1;

  while(startCol <= endCol && startRow <= endRow) {
    for(let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
      startRow++;

    for(let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
      endCol--;

    for(let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++
    }
      endRow--;

    for(let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
      startCol++;
  }

  return result;
}

console.log(matrixA(w, h))


const ww = parseInt(prompt("Ширина матрицы"));
const hh = parseInt(prompt("Высота матрицы"));

function matrixB(ww, hh) {
  let result = new Array(hh).fill().map(() => new Array(ww).fill());

  let counter = 1,
      startCol = 0,
      endCol = ww - 1,
      startRow = 0,
      endRow = hh - 1;

  while(startRow <= endRow) {
    for(let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
  }

  return result;
}

console.log(matrixB(ww, hh));