$(document).ready(function () {
  var isFontIncreased = false;

  $("#accessToggle").click(function () {
    if (isFontIncreased) {
      $("p").css("font-size", "16px");
      $(this).text("Toggle Font Size");
    } else {
      $("p").css("font-size", "19.2px");
      $(this).text("Revert font-size");
    }
    isFontIncreased = !isFontIncreased;
  });
});
