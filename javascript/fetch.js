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
    productColor.textContent = `Color: ${product.Color}`;

    const productImage = document.createElement("img");
    productImage.src = product.Image;

    // Lägg till alla element
    listItem.appendChild(productImage);
    listItem.appendChild(productType);
    listItem.appendChild(productColor);

    // Lägger till click event listener för att hantera klick på varje produkt
    listItem.addEventListener("click", () => {
      // omdirigera till produktsidan och skicka med JSON data som parametrar
      window.location.href = `../Pages/productPage.html?type=${product.Type}&color=${product.Color}&image=${product.Image}`;
    });

    productList.appendChild(listItem);
  });
  ProductListElement.appendChild(productList);
}

// Hämta products från servern när sidan laddas
fetch("http://localhost:3000/Products")
  .then((res) => res.json())
  .then((productServer) => {
    // Visa products från data.json
    displayProducts(productServer);
  })
  .catch((err) => console.log("error" + err));
