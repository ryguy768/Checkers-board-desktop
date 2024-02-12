function toggle(cell) {
    console.log('toggling cell:', cell);
    let blueChecker = cell.children[0];
    let redChecker = cell.children[1];

    if (!blueChecker.hidden && redChecker.hidden) {
        blueChecker.hidden = true;
        redChecker.hidden = false;
    } else if (blueChecker.hidden && !redChecker.hidden) {
        blueChecker.hidden = true;
        redChecker.hidden = true;
    } else {
        blueChecker.hidden = false;
        redChecker.hidden = true;
    }
}
