document.addEventListener("DOMContentLoaded", function () {
  // Get the parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const color = urlParams.get("color");
  const image = urlParams.get("image");
  const id = urlParams.get("id");
  const price = parseFloat(urlParams.get("price")); // Convert price to a float

  // Update the product page content based on the parameters
  updateCartPage(type, color, image, id, price);

  // Add event listeners for quantity buttons
  const increaseQuantityButton = document.getElementById(
    "increaseQuantityButton"
  );
  const decreaseQuantityButton = document.getElementById(
    "decreaseQuantityButton"
  );

  increaseQuantityButton.addEventListener("click", increaseQuantity);
  decreaseQuantityButton.addEventListener("click", decreaseQuantity);
});

function increaseQuantity() {
  const quantityDisplay = document.getElementById("quantityDisplay");
  const quantityDisplay2 = document.getElementById("quantityDisplay2");
  const quantityDisplay3 = document.getElementById("quantityDisplay3");
  let quantity = parseInt(quantityDisplay.textContent);
  quantity++;
  quantityDisplay.textContent = quantity;
  quantityDisplay2.textContent = quantity;
  quantityDisplay3.textContent = quantity;

  updateTotalPrice();
}

function decreaseQuantity() {
  const quantityDisplay = document.getElementById("quantityDisplay");
  const quantityDisplay2 = document.getElementById("quantityDisplay2");
  const quantityDisplay3 = document.getElementById("quantityDisplay3");
  let quantity = parseInt(quantityDisplay.textContent);
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
    quantityDisplay2.textContent = quantity;
    quantityDisplay3.textContent = quantity;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  const quantityDisplay = document.getElementById("quantityDisplay");
  const productPriceElement = document.getElementById("productPrice");

  const quantity = parseInt(quantityDisplay.textContent);
  const initialPrice = parseFloat(productPriceElement.dataset.initialPrice);

  const totalPrice = initialPrice * quantity;

  const totalPrice1 = document.getElementById("price");
  totalPrice1.textContent = `${totalPrice} SEK`;

  const totalPrice3 = document.getElementById("price3");
  totalPrice3.textContent = `${totalPrice} SEK`;
}

function updateCartPage(type, color, image, id, price) {
  // Update product title
  const productNameElement = document.getElementById("productName");
  productNameElement.textContent = `${color} ${type}`;

  const productPriceElement = document.getElementById("productPrice");
  productPriceElement.textContent = `${price}kr`;

  const productPriceElement2 = document.getElementById("totalSum");
  productPriceElement2.textContent = `${price}SEK`;

  // Update the image source of the active item
  const productImageElement = document.getElementById("img");
  productImageElement.src = image;

  // Store the initial price in a data attribute
  productPriceElement.dataset.initialPrice = price;

  // Store the product ID in a data attribute
  productImageElement.dataset.productId = id;

  // Calculate and set the initial total price based on quantity
  const quantityDisplay = document.getElementById("quantityDisplay");
  const quantity = parseInt(quantityDisplay.textContent);
  const totalPrice = price * quantity;
  const totalPriceElement = document.getElementById("price");
  totalPriceElement.textContent = `${totalPrice}kr`;
}
