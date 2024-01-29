document.addEventListener("DOMContentLoaded", function () {
  // Get the parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const color = urlParams.get("color");
  const image = urlParams.get("image");
  const id = urlParams.get("id");
  const sale = urlParams.get("sale");
  const price = urlParams.get("price"); // Assuming "price" is a parameter in the URL

  // Update the product page content based on the parameters
  updateProductPage(type, color, image, id, price, sale);

  // Add to Cart button
  const addToCartButton = document.getElementById("addToCart");
  addToCartButton.addEventListener("click", function () {
    navigateToCart(type, color, image, id, price, sale);
  });
});

function updateProductPage(type, color, image, id, price, sale) {
  // Update product title
  const productNameElement = document.getElementById("productName");
  productNameElement.textContent = `${color} ${type}`;

  const productPriceElement = document.getElementById("productPrice");
  productPriceElement.textContent = `${price}kr`;

  const productSaleElement = document.getElementById("productSale");
  productSaleElement.textContent = `${sale}kr`;

  // Update product image in the carousel
  const carouselInner = document.querySelector(".carousel-inner");

  // Find the existing active carousel item
  const activeItem = carouselInner.querySelector(".carousel-item.active");

  // Update the image source of the active item
  const activeImage = activeItem.querySelector("img");
  activeImage.src = image;

  activeImage.dataset.productId = id;

  // Check if productSaleElement is null
  if (sale === null) {
    // If productSaleElement doesn't exist, hide it
    productSaleElement.style.display = "none";
  } else {
    // Create a style element
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    // Define the CSS rules
    var css = `
#productPrice {
  color: rgb(0, 0, 0);
  position: relative;
  display: inline-block;
}
#productPrice::before,
#productPrice::after {
  content: "";
  width: 100%;
  position: absolute;
  right: 0;
  top: 50%;
}
#productPrice::before {
  border-bottom: 1px solid rgb(0, 0, 0);
  -webkit-transform: skewY(-10deg);
  transform: skewY(-10deg);
}
#productPrice::after {
  border-bottom: 1px solid rgb(0, 0, 0);
  -webkit-transform: skewY(10deg);
  transform: skewY(10deg);
}
`;

    // Append the CSS rules to the style element
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      styleElement.appendChild(document.createTextNode(css));
    }

    // Append the style element to the document head
    document.head.appendChild(styleElement);
  }
}

function navigateToCart(type, color, image, id, price) {
  const cartUrl = `../Pages/cartPage.html?type=${type}&color=${color}&image=${image}&id=${id}&price=${price}`;
  window.location.href = cartUrl;
}
