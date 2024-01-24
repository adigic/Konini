function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // check if the required fields are filled
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all the required fields");
    return;
  }
  alert("Form submitted successfully!");
}

// Add an event listener to trigger the opening animation after the page loads
document.addEventListener("DOMContentLoaded", function () {
  var contentLeft = document.querySelector(".content-left");
  contentLeft.classList.add("open");
});
