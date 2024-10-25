function displaysaleProducts(productArray) {
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

    // Skapa div för priser
    const productPriceContainer = document.createElement("div");
    productPriceContainer.classList.add("product-price");

    const productSale = document.createElement("h5");
    productSale.textContent = `${product.Sale}:-`;

    // Set the color to red
    productSale.style.color = "red";

    const productPrice = document.createElement("h5");
    productPrice.textContent = `${product.Price}:-`;

    // Cross over original price
    productPrice.classList.add("angled-line-through");

    // Lägg till element i product-price div.
    productPriceContainer.appendChild(productSale);
    productPriceContainer.appendChild(productPrice);

    // Skapa en div för img-elementet
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    // Skapa en div för info-elementen
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const productImage = document.createElement("img");

    // Sätt src-attributet för img-elementet
    productImage.src = product.Image;

    // Sätt alt-attributet för img-elementet (förutsatt att "alt" finns i JSON)
    productImage.alt = product.alt || "Sale Product Image";

    // Lägg till img-element i imgContainer-div
    imgContainer.appendChild(productImage);

    // Lägg till element i infoContainer-div
    infoContainer.appendChild(productType);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPriceContainer);

    // Lägg till alla element
    listItem.appendChild(imgContainer);
    listItem.appendChild(infoContainer);

    // Lägger till click event listener för att hantera klick på varje produkt
    listItem.addEventListener("click", () => {
      // omdirigera till produktsidan och skicka med JSON data som parametrar
      window.location.href = `../Pages/productPage.html?type=${product.Type}&color=${product.Color}&image=${product.Image}&price=${product.Price}&sale=${product.Sale}`;
    });

    productList.appendChild(listItem);
  });

  ProductListElement.appendChild(productList);
}


// Hämta products från servern när sidan laddas
fetch("/salePage.json")
  .then((res) => res.json())
  .then((data) => {
    // Visa products från data.json
    displaysaleProducts(data.Sale);
  })
  .catch((err) => console.log("error" + err));

// npx json-server --watch data.json --port 3000 // <-- Starta servern
