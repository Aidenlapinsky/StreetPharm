let cart = [];

function addToCart(element, drug, price) {
    const quantity = prompt("How many grams/eighths/ounces do you want?", "1");
    if (quantity > 0) {
        const cartItem = {
            drug: drug,
            quantity: quantity,
            price: price,
            total: price * quantity
        };
        cart.push(cartItem);
        const cartItemElement = document.createElement("li");
        cartItemElement.textContent = `${drug}: ${quantity} grams/eighths/ounces - $${price} each - $${price * quantity} total`;
        document.getElementById("cart-list").appendChild(cartItemElement);
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].total;
    }
    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

function showSearchBar() {
    document.getElementById("search-bar").style.display = "block";
}

function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const products = document.getElementsByClassName("product");
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            const productElement = products[i].cloneNode(true);
            searchResults.appendChild(productElement);
        }
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].total;
        }
        alert(`You have successfully checked out for $${total}.`);
        cart = [];
        document.getElementById("cart-list").innerHTML = "";
        updateTotalPrice();
    }
}

function toggleMenu() {
    document.getElementById("nav-links-sub").classList.toggle("active");
}
