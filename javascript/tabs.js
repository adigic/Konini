// Add this script at the end of your HTML body
document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Get the list items inside the links ul
    var linksList = document.querySelector(".links");

    // Iterate through each list item
    linksList.querySelectorAll("li a").forEach(function (link) {
      // Check if the anchor tag href matches the current URL
      if (link.href === currentUrl) {
        // If match, set the id to 'active' to highlight the link
        link.id = "active";
      }
    });
  });