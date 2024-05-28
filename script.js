let cartItems = [];
let cartTotal = 0;

function toggleMenu() {
  const navLinksSub = document.getElementById('nav-links-sub');
  navLinksSub.style.display = navLinksSub.style.display === 'block'? 'none' : 'block';
}

function showSearchBar() {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = 'block';
}

function searchProducts() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const products = document.querySelectorAll('.product');
  const searchTerm = searchInput.value.toLowerCase();

  searchResults.innerHTML = '';

  products.forEach((product) => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      const searchResult = document.createElement('li');
      searchResult.textContent = productName;
      searchResults.appendChild(searchResult);
    }
  });
}

function addToCart(product) {
  const cart = document.getElementById('cart');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;

  cartItems.push({ name: productName, price: productPrice });
  cartTotal += parseFloat(productPrice.replace('$', ''));

  cartItemsList.innerHTML = '';

  cartItems.forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} - ${item.price}`;
    cartItemsList.appendChild(cartItem);
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);

  cart.style.display = 'block';
}
