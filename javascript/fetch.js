function displayProducts(productArray) {
  const ProductListElement = document.getElementById("productList");

  const productList = document.createElement("ul");
  // Gå igenom varje produkt i listan
  productArray.forEach((product) => {
    // Skapa en Li för varje product
    const listItem = document.createElement("li");

    // Skapa element
    const productType = document.createElement("h2");
    productType.textContent = `${product.Type}`;

    const productColor = document.createElement("p");
    productColor.textContent = `${product.Color}`;

    const productPrice = document.createElement("h5");
    productPrice.textContent = `${product.Price}:-`;

    // Skapa en div för img-elementet
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container"); // Add class name here.

    // Skapa en div för info-elementen
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container"); // Add class name here.

    const productImage = document.createElement("img");
    productImage.src = product.Image;
    // Lägg till img-element i imgContainer-div
    imgContainer.appendChild(productImage);
    // Lägg till element i infoContainer-div
    infoContainer.appendChild(productType);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    // Lägg till alla element
    listItem.appendChild(imgContainer);
    listItem.appendChild(infoContainer);

    // Lägger till click event listener för att hantera klick på varje produkt
    listItem.addEventListener("click", () => {
      // Redirect to the product page and send product data as parameters
      const queryParams = new URLSearchParams({
        type: product.Type,
        color: product.Color,
        image: product.Image,
        price: product.Price,
        id: product.id,
      });
      console.log(queryParams);
      //SKICKA PARAMETRAR TILL PRODUCTPAGE
      window.location.href = `../Pages/productPage.html?${queryParams.toString()}`;
    });

    productList.appendChild(listItem);
  });
  ProductListElement.appendChild(productList);
}

// Function to fetch products based on category
function fetchProductsByCategory(category) {
  return fetch(`http://localhost:3000/${category}`)
    .then((res) => res.json())
    .catch((err) => console.log(`Error fetching ${category}:`, err));
}

// Function to handle button click and fetch/display products
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

function updateCategoryTitle(category) {
  const categoryTitleElement = document.getElementById("categoryTitle");

  // Switch Categori titel
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
      // For other categories, use the category name as is
      categoryTitleElement.textContent = category;
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the category from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category) {
    // Fetch and display products for the selected category

    handleCategoryButtonClick(category);
  }
});
