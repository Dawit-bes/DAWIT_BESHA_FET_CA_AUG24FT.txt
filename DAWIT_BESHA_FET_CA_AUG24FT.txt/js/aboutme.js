$(document).ready(function updateaboutme() {
  $("#aboutme1").text("I am cool!");

  $(".aboutme").text("I am Dawit Beshah the code master.");

  $("#aboutme1").click(function () {
    $("#aboutme1").css("background-color", "powderblue");
    $("#aboutme2").css("background-color", "powderblue");
    $("#aboutme1").css("color", "white");
    $("#aboutme2").css("color", "white");
  });
});
