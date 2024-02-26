$(document).ready(function () {
  console.log("document ready");
  $("#board-container").html(renderBoard());

  renderCheckers();
});

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

function parity(num) {
  return num % 2 === 0 ? "even" : "odd";
}

function cellColor(rowNum, cellNum) {
  return parity(rowNum) == parity(cellNum) ? "blue" : "red";
}

function moveSelectedCheckerHere() {
  console.log("things");
  if (selectedChecker) {
    console.log(`move checker here`);
    let redCell = $(this);
    console.log(`red cell: `, redCell);
    let id = redCell.attr("id");
    console.log(`id: `, id);
    let idParts = id.split("-");
    console.log(`idParts = `, idParts);

    selectedChecker.row = Number(idParts[1]);
    selectedChecker.cell = Number(idParts[2]);
    console.log(`the checker I'm moving is `, selectedChecker.color);
    if (selectedChecker.color == `red` && selectedChecker.row == 1) {
      console.log(`I'm moving a red checker to the blue home row`);
      selectedChecker.isKing = true;
    } else if (selectedChecker.color == `blue` && selectedChecker.row == 8) {
      console.log(`I'm moving a blue checker to the red home row`);
      selectedChecker.isKing = true;
    }

    selectedChecker = undefined;
    renderCheckers();
  } else {
    console.log(`select a checker, foo!`);
  }
}

function clearBoard() {
  $(`.red.cell`).html(``);
  $(`.red.cell`).unbind("click");
  $(`.out-of-play`).html(``);
}
