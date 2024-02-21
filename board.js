$(document).ready(function () {
  console.log("document ready");
  $("#board-container").html(renderBoard());
  $(".red.cell").click(selectChecker);
  renderCheckers();
});

function toggle() {
  let checker = $(this).children().first();
  checker.toggle();
  if (!checker.is(":visible")) {
    switchColor(checker);
  }
}

function switchColor(checker) {
  if (checker.hasClass("red-checker")) {
    checker.removeClass("red-checker");
    checker.addClass("blue-checker");
  } else {
    checker.addClass("red-checker");
    checker.removeClass("blue-checker");
  }
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

function selectChecker() {
  let checker = $(this).children().first();
  console.log("selecting checker: ", checker);
  selectedChecker = checker;
}
