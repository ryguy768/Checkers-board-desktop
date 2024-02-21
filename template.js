function renderCell(rowNum, cellNum) {
  if (determineColor(rowNum, cellNum) === "blue") {
    // determine the cells color
    // Red Cell
    let cellString = `<div id="cell-${rowNum}-${cellNum}" class="cell red">`;
    if (rowNum <= 3) {
      cellString = cellString + renderChecker("blue");
    } else if (rowNum >= 6) {
      cellString = cellString + renderChecker("red");
    } else {
      cellString = cellString + renderChecker("red", "hidden");
    }
    cellString = cellString + `</div>`;
    return cellString;
  }
  // Blue Cell
  else return `<div id="cell-${rowNum}-${cellNum}" class="cell blue"></div>`;
}
function renderChecker(color, hidden) {
  return `<div class="checker ${color}-checker" ${hidden}></div>`;
}
function parity(num) {
  if (num % 2 === 0) return "even";
  else return "odd";
}

function determineColor(rowNum, cellNum) {
  if (parity(rowNum) === parity(cellNum)) return "red";
  else return "blue";
}

function renderRow(rowNum) {
  console.log(`drawing row number ${rowNum}`);
  var rowString = "";
  rowString = rowString + `<div id="row-${rowNum}" class="row">`;
  for (var cellNum = 1; cellNum <= 8; cellNum++) {
    rowString = rowString + renderCell(rowNum, cellNum);
  }
  rowString = rowString + `</div>`;
  return rowString;
}

function renderBoard() {
  return `
 ${renderRow(1)}
 ${renderRow(2)}
 ${renderRow(3)}
 ${renderRow(4)}
 ${renderRow(5)}
 ${renderRow(6)}
 ${renderRow(7)}
 ${renderRow(8)}
 
  `

}
