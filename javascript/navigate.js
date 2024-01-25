// DROPDOWN Categorys NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("allProductsButton")
    .addEventListener("click", () => navigateToGallery("Products"));
  document
    .getElementById("dressesButton")
    .addEventListener("click", () => navigateToGallery("Dresses"));
  document
    .getElementById("skirtsButton")
    .addEventListener("click", () => navigateToGallery("Skirts"));
  document
    .getElementById("shirtsButton")
    .addEventListener("click", () => navigateToGallery("Shirts"));
  document
    .getElementById("topsButton")
    .addEventListener("click", () => navigateToGallery("Tops"));

  //Buttons Recommended landingPage
  document
    .getElementById("dressesButton2")
    .addEventListener("click", () => navigateToGallery("Dresses"));
  document
    .getElementById("shirtsButton2")
    .addEventListener("click", () => navigateToGallery("Shirts"));
  document
    .getElementById("skirtsButton2")
    .addEventListener("click", () => navigateToGallery("Skirts"));
  document
    .getElementById("topsButton2")
    .addEventListener("click", () => navigateToGallery("Tops"));

  // hamburgerMenu
  document
    .getElementById("allProductsButton3")
    .addEventListener("click", () => navigateToGallery("Products"));
  document
    .getElementById("dressesButton3")
    .addEventListener("click", () => navigateToGallery("Dresses"));
  document
    .getElementById("skirtsButton3")
    .addEventListener("click", () => navigateToGallery("Skirts"));
  document
    .getElementById("shirtsButton3")
    .addEventListener("click", () => navigateToGallery("Shirts"));
  document
    .getElementById("topsButton3")
    .addEventListener("click", () => navigateToGallery("Tops"));
});

function navigateToGallery(category) {
  //Navigera till Gallerypage och skicka med vilken category som valts
  window.location.href = `../Pages/galleryPage.html?category=${category}`;
}
