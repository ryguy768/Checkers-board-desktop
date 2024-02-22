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

function renderCheckers() {
  console.log("rendering checkers");
  for (let i = 0; i < checkers.length; i++) {
    let checker = checkers[i];
    console.log(checker);
    $(`#cell-${checker.row}-${checker.cell}`).html(
      renderChecker(i, checker.color)
    );
  }
}

function renderChecker(i, color) {
  return `<div id="checker-$(i)" class="checker ${color}-checker"></div>`;
}

function selectChecker() {
  $(`.selected`).removeClass(`selected`);
  let checker = $(this);
  let id = checker.attr("id");
  console.log("selecting checker: ", checker);
  console.log(`the id of the checker you selected is ${id}`);

  let stringParts = id.split("-");
  console.log(`bacon = `, stringParts);

  let checkerIndex = stringParts[1];
  console.log(`checkerIndex == `, checkerIndex);

  selectedChecker = checkers[checkerIndex];
  console.log(`Finished selecting checker: `, selectedChecker);

  checker.parent().addClass(`selected`);
}
