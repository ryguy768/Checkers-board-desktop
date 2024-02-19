$(document).ready(function () {
    console.log("document ready");
    $(".red.cell, .blue.cell").click(toggle);
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
  