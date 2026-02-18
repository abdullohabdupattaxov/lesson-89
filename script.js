const cardContainer = document.querySelector(".cards");

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error("Serverda xatolik bor");
    }

    const products = await response.json();
    renderProducts(products);

  } catch (error) {
    cardContainer.innerHTML = `<p style="color:red;">Xatolik: ${error.message}</p>`;
  }
}

function renderProducts(products) {
  cardContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">$${product.price}</p>
      <p>${product.category}</p>
    `;

    cardContainer.appendChild(card);
  });
}

getProducts();


