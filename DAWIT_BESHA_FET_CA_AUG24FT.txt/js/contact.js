$(document).ready(function contactinformation() {
  $("#newbutton").click(function () {
    var email = prompt("Enter your email");
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter correct email.");
      return;
    }
    if (email) {
      $("#contactDetails .col-md-4:nth-child(1) p").text(email);
    }

    var telephone = prompt("Enter your phone number");
    if (telephone) {
      $("#contactDetails .col-md-4:nth-child(2) p").text(telephone);
    }
    var address = prompt("Enetr your address");
    if (address) {
      $("#contactDetails .col-md-4:nth-child(3) p").text(address);
    }
  });
});
