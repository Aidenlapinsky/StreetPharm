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
        cartItemElement.textContent = `${quantity} grams of ${drug} - $${price * quantity}`;
        cartItemElement.addEventListener("click", () => {
            removeFromCart(cartItemElement, cartItem);
        });
        document.querySelector(".cart ul").appendChild(cartItemElement);
    }
}

function removeFromCart(element, cartItem) {
    const index = cart.indexOf(cartItem);
    cart.splice(index, 1);
    element.remove();
}

function search(drugList) {
    const searchTerm = document.querySelector("#search-input").value.toLowerCase();
    const results = document.querySelector(".search-results");
    results.innerHTML = "";
    for (const drug of drugList) {
        if (drug.toLowerCase().includes(searchTerm)) {
            const drugElement = document.createElement("li");
            drugElement.textContent = drug;
            drugElement.addEventListener("click", () => {
                showDrugOptions(drugElement, drug);
            });
            results.appendChild(drugElement);
        }
    }
}

function showDrugOptions(element, drug) {
    const prices = {
        "Grams": 50,
        "Eighths": 25,
        "Ounces": 7.14
    };
    const options = document.createElement("div");
    options.className = "drug-options";
    for (const option in prices) {
        const price = prices[option];
        const button = document.createElement("button");
        button.textContent = `Buy ${option}`;
        button.addEventListener("click", () => {
            addToCart(element, drug, price);
        });
        options.appendChild(button);
    }
    element.appendChild(options);
}

function hideDrugOptions(element) {
    const options = element.querySelector(".drug-options");
    if (options) {
        options.remove();
    }
}

const drugList = ["Cannabis", "LSD", "Methamphetamine", "Cocaine", "Heroin", "Ecstasy", "MDMA", "Mushrooms", "Shrooms", "Peyote"];
const navLinksSub = document.querySelector("#nav-links-sub");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
    search(drugList);
});

document.querySelectorAll(".nav-links li").forEach(link => {
    link.addEventListener("mouseover", () => {
        navLinksSub.classList.add("active");
    });
    link.addEventListener("mouseout", () => {
        navLinksSub.classList.remove("active");
    });
});

document.querySelectorAll(".drug-list li").forEach(drug => {
    drug.addEventListener("mouseover", () => {
        showDrugOptions(drug, drug.textContent);
    });
    drug.addEventListener("mouseout", () => {
        hideDrugOptions(drug);
    });
});
