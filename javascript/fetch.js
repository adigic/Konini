/*Global*/
let array = [];

function displayProducts(productArray) {
  const ProductListElement = document.getElementById("productList");

  const productList = document.createElement("ul");
  // Gå igenom varje produkt i listan
  productArray.forEach((product) => {
    // Skapa en Li för varje bok
    const listItem = document.createElement("li");

    // Skapa element för bokdetaljer (titel, genre, beskrivning, omslagsbild)
    const productType = document.createElement("h2");
    productType.textContent = `${product.Type}`;

    const productColor = document.createElement("p");
    productColor.textContent = `Color: ${product.Color}`;

    const productImage = document.createElement("img");
    productImage.src = product.Image;

    // Lägg till alla element i Li
    listItem.appendChild(productImage);
    listItem.appendChild(productType);
    listItem.appendChild(productColor);

    productList.appendChild(listItem);
  });
  ProductListElement.appendChild(productList);
}

// Hämta böcker från servern när sidan laddas
fetch("http://localhost:3000/Products")
  .then((res) => res.json())
  .then((productServer) => {
    // Visa de böcker från data.json
    displayProducts(productServer);
  })
  .catch((err) => console.log("error" + err));