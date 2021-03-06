$(".btn").click(function() {
  let textArea = $(".form-control")
  if (textArea.val() === "" || !validateEmail(textArea.val())) {
    textArea.addClass("red-border");
    $(".error-image").removeClass("d-none");
    $(".error-message").removeClass("d-none");
  } else {
    textArea.removeClass("red-border");
    $(".error-image").addClass("d-none");
    $(".error-message").addClass("d-none");
  }
});

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
