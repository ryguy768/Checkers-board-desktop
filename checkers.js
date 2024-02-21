var selectedChecker = undefined;

var checkers = [
  { row: 1, cell: 2, color: "blue" },
  { row: 1, cell: 4, color: "blue" },
  { row: 1, cell: 6, color: "blue" },
  { row: 1, cell: 8, color: "blue" },
  { row: 2, cell: 1, color: "blue" },
  { row: 2, cell: 3, color: "blue" },
  { row: 2, cell: 5, color: "blue" },
  { row: 2, cell: 7, color: "blue" },
  { row: 3, cell: 2, color: "blue" },
  { row: 3, cell: 4, color: "blue" },
  { row: 3, cell: 6, color: "blue" },
  { row: 3, cell: 8, color: "blue" },
  { row: 6, cell: 1, color: "red" },
  { row: 6, cell: 3, color: "red" },
  { row: 6, cell: 5, color: "red" },
  { row: 6, cell: 7, color: "red" },
  { row: 7, cell: 2, color: "red" },
  { row: 7, cell: 4, color: "red" },
  { row: 7, cell: 6, color: "red" },
  { row: 7, cell: 8, color: "red" },
  { row: 8, cell: 1, color: "red" },
  { row: 8, cell: 3, color: "red" },
  { row: 8, cell: 5, color: "red" },
  { row: 8, cell: 7, color: "red" },
];

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
  `;
}

function renderRow(rowNum) {
  return `
    <div id="row-${rowNum}" class="row">
      ${renderCell(rowNum, 1)}
      ${renderCell(rowNum, 2)}
      ${renderCell(rowNum, 3)}
      ${renderCell(rowNum, 4)}
      ${renderCell(rowNum, 5)}
      ${renderCell(rowNum, 6)}
      ${renderCell(rowNum, 7)}
      ${renderCell(rowNum, 8)}
    </div>
  `;
}

function renderCell(rowNum, cellNum) {
  if (cellColor(rowNum, cellNum) === "blue") {
    return `
      <div id="cell-${rowNum}-${cellNum}" class="cell blue"></div>`;
  } else {
    return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`;
  }
}
function renderCheckers() {
  console.log("rendering checkers");
  for (let i = 0; i < checkers.length; i++) {
    let checker = checkers[i];
    console.log(checker);
    $(`#cell-${checker.row}-${checker.cell}`).html(
      renderChecker(checker.color)
    );
  }
}

function renderChecker(color) {
  return `<div class="checker ${color}-checker"></div>`;
}

function parity(num) {
  return num % 2 === 0 ? "even" : "odd";
}

function cellColor(rowNum, cellNum) {
  return parity(rowNum) == parity(cellNum) ? "blue" : "red";
}

function selectChecker() {
  let checker = $(this).children().first();
  console.log("selecting checker: ", checker);
  selectedChecker = checker;
}
