document.addEventListener("DOMContentLoaded", function () {
  // Get the parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const color = urlParams.get("color");
  const image = urlParams.get("image");
  const id = urlParams.get("id");
  const price = urlParams.get("price"); // Assuming "price" is a parameter in the URL

  // Update the product page content based on the parameters
  updateProductPage(type, color, image, id, price);

  // Add to Cart button
  const addToCartButton = document.getElementById("addToCart");
  addToCartButton.addEventListener("click", function () {
    navigateToCart(type, color, image, id, price);
  });
});

function updateProductPage(type, color, image, id, price) {
  // Update product title
  const productNameElement = document.getElementById("productName");
  productNameElement.textContent = `${color} ${type}`;

  const productPriceElement = document.getElementById("productPrice");
  productPriceElement.textContent = `${price}kr`;

  // Update product image in the carousel
  const carouselInner = document.querySelector(".carousel-inner");

  // Find the existing active carousel item
  const activeItem = carouselInner.querySelector(".carousel-item.active");

  // Update the image source of the active item
  const activeImage = activeItem.querySelector("img");
  activeImage.src = image;

  activeImage.dataset.productId = id;
}

function navigateToCart(type, color, image, id, price) {
  const cartUrl = `../Pages/cartPage.html?type=${type}&color=${color}&image=${image}&id=${id}&price=${price}`;
  window.location.href = cartUrl;
}
