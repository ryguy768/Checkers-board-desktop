function toggle(cell) {
    console.log('toggling cell:', cell);
    let greenChecker = cell.children[0];
    let blackChecker = cell.children[1];
    
    if (!greenChecker.hidden && blackChecker.hidden) {
        greenChecker.hidden = true;
        blackChecker.hidden = false;
    } else if (greenChecker.hidden && !blackChecker.hidden) {
        greenChecker.hidden = true;
        blackChecker.hidden = true;
    } else {
        greenChecker.hidden = false;
        blackChecker.hidden = true;
    }
}
