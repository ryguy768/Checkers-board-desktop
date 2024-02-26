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
  clearBoard();
  $(`.red.cell`).click(moveSelectedCheckerHere);
  for (let i = 0; i < checkers.length; i++) {
    let checker = checkers[i];
    console.log(checker);
    if (checker.row && checker.cell) {
      $(`#cell-${checker.row}-${checker.cell}`).html(
        renderChecker(i, checker.color)
      );
      $(`#cell-${checker.row}-${checker.cell}`).unbind("click");
    } else {
      console.log(`put `, checker, ` into out of play`);
      $(`#out-of-play-${checker.color}`).append(
        `<div class="cell">${renderChecker(i, checker.color)}</div>`
      );
    }
  }
  $(".checker").click(selectChecker);
}

function renderChecker(i, color) {
  if (checkers[i].isKing) {
    return `
            <div id="checker-${i}" class="checker ${color}-checker" bacon="${i}">
                <i class="fas fa-crown"></i>
            </div>
        `;
  } else
    return `<div id="checker-${i}" class="checker ${color}-checker" bacon="${i}"></div>`;
}

function selectChecker() {
  let checker = $(this);
  if (checker.hasClass(`selected`)) {
    console.log(`this checker was already selected`);
    remove();
    return;
  }

  $(`.selected`).removeClass(`selected`);

  let checkerIndex = checker.attr("bacon");
  console.log(`checkerIndex == `, checkerIndex);

  selectedChecker = checkers[checkerIndex];
  console.log(`Finished selecting checker: `, selectedChecker);

  checker.addClass(`selected`);
}

function remove() {
  console.log(`removing this...`, selectedChecker);
  selectedChecker.row = undefined;
  selectedChecker.cell = undefined;
  selectedChecker = undefined;
  renderCheckers();
}
