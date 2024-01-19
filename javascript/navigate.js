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
});

function navigateToGallery(category) {
  //Navigera till Gallerypage och skicka med vilken category som valts
  window.location.href = `../Pages/galleryPage.html?category=${category}`;
}
