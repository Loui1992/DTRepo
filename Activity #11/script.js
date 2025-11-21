const products = [
    { id: 1, name: "MacBook Pro", category: "laptop", price: 95000 },
    { id: 2, name: "iPhone 14", category: "phone", price: 60000 },
    { id: 3, name: "Samsung Galaxy", category: "phone", price: 45000 },
    { id: 4, name: "ASUS ROG Laptop", category: "laptop", price: 75000 },
    { id: 5, name: "iPad Air", category: "tablet", price: 38000 },
    { id: 6, name: "Lenovo Tablet", category: "tablet", price: 20000 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${prod.name}</h3>
            <p>Category: ${prod.category}</p>
            <p>Price: ₱${prod.price.toLocaleString()}</p>
        `;
        productList.appendChild(card);
    });
}

function applyFilterAndSort() {
    let filtered = [...products];

    // Filter
    if (categoryFilter.value !== "all") {
        filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    // Sort
    switch (sortOption.value) {
        case "price-asc":
            filtered.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            filtered.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilterAndSort);
sortOption.addEventListener("change", applyFilterAndSort);

displayProducts(products);