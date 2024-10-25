// Function to fetch all products from data.json and cache them
let allProducts = null; // Cache the products once fetched

function fetchAllProducts() {
  if (allProducts) {
    // If products are already cached, return them
    return Promise.resolve(allProducts);
  }
  return fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
      allProducts = data; // Cache the products
      return allProducts;
    })
    .catch((err) => console.log('Error fetching data.json:', err));
}

// Filter products by category
function filterProductsByCategory(products, category) {
  return category === 'Products'
    ? Object.values(products).flat() // Return all products if "Products" is selected
    : products[category] || []; // Return specific category or empty array if not found
}

// Display products function
function displayProducts(productArray) {
  const ProductListElement = document.getElementById("productList");
  ProductListElement.innerHTML = ""; // Clear existing products

  const productList = document.createElement("ul");

  // Iterate over each product
  productArray.forEach((product) => {
    const listItem = document.createElement("li");

    // Create elements for product data
    const productType = document.createElement("h2");
    productType.textContent = `${product.Type}`;

    const productColor = document.createElement("p");
    productColor.textContent = `${product.Color}`;

    const productPrice = document.createElement("h5");
    productPrice.textContent = `${product.Price}:-`;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const productImage = document.createElement("img");
    productImage.src = product.Image;
    productImage.alt = product.alt || "Product Image";

    imgContainer.appendChild(productImage);
    infoContainer.appendChild(productType);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);

    listItem.appendChild(imgContainer);
    listItem.appendChild(infoContainer);

    listItem.addEventListener("click", () => {
      const queryParams = new URLSearchParams({
        type: product.Type,
        color: product.Color,
        image: product.Image,
        price: product.Price,
        id: product.id,
      });
      window.location.href = `../Pages/productPage.html?${queryParams.toString()}`;
    });

    productList.appendChild(listItem);
  });

  ProductListElement.appendChild(productList);
}

// Fetch products by category and display them
function fetchProductsByCategory(category) {
  return fetchAllProducts()
    .then((data) => filterProductsByCategory(data, category))
    .catch((err) => console.log(`Error fetching ${category}:`, err));
}

// Handle button click to fetch and display products by category
function handleCategoryButtonClick(category) {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = "";

  updateCategoryTitle(category);

  fetchProductsByCategory(category)
    .then((products) => displayProducts(products))
    .catch((error) =>
      console.error(`Error fetching or displaying ${category}:`, error)
    );
}

// Update the category title
function updateCategoryTitle(category) {
  const categoryTitleElement = document.getElementById("categoryTitle");
  switch (category.toLowerCase()) {
    case "products":
      categoryTitleElement.textContent = "Alla Produkter";
      break;
    case "dresses":
      categoryTitleElement.textContent = "Klänningar";
      break;
    case "skirts":
      categoryTitleElement.textContent = "Kjolar";
      break;
    case "shirts":
      categoryTitleElement.textContent = "Skjortor";
      break;
    case "tops":
      categoryTitleElement.textContent = "Toppar";
      break;
    default:
      categoryTitleElement.textContent = category;
      break;
  }
}

// Event listeners for category buttons
document
  .getElementById("allProductsButton")
  .addEventListener("click", () => handleCategoryButtonClick("Products"));
document
  .getElementById("dressesButton")
  .addEventListener("click", () => handleCategoryButtonClick("Dresses"));
document
  .getElementById("skirtsButton")
  .addEventListener("click", () => handleCategoryButtonClick("Skirts"));
document
  .getElementById("shirtsButton")
  .addEventListener("click", () => handleCategoryButtonClick("Shirts"));
document
  .getElementById("topsButton")
  .addEventListener("click", () => handleCategoryButtonClick("Tops"));

// Load products by category on page load
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category") || "Products";
  handleCategoryButtonClick(category);
});
