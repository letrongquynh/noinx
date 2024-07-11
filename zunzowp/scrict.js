// const productElement = document.querySelector(".product")
// const Name = productElement.dataset.name
// const Price = productElement.dataset.price

function Add1() {
    const productElement = document.querySelector(".product")
    const name = productElement.dataset.name
    const price = productElement.dataset.price
    const cartItems = document.getElementById('cart-items');
    let cartItem = document.querySelector(`.cart-item[data-name="${name}"]`);
    if (cartItem) {
        let quantity = cartItem.querySelector('.item-quantity');
        let newQuantity = parseInt(quantity.innerText) + 1;
        quantity.innerText = newQuantity;
        let itemTotal = cartItem.querySelector('.item-total');
        itemTotal.innerText = `$${(newQuantity * price)}`;
    } else {
        cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-name', name);
        cartItem.innerHTML = `
            <span class="item-name">${name}</span>
            <span class="item-quantity">1</span> × <span class="item-price">$${price}</span>
            <span class="item-total">$${price}</span>
            <button class="remove-item">Remove</button>
            <button class="remove-all-item">Remove all</button>
        `;
        cartItems.appendChild(cartItem);

        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeCart(name, price);
        });
        cartItem.querySelector('.remove-all-item').addEventListener('click', () => {
            removeAllCart(name, price);
        });
    }
}
function Add2() {
    const productElement = document.querySelector(".product")
    const name = productElement.dataset.name
    const price = productElement.dataset.price
    const cartItems = document.getElementById('cart-items');
    let cartItem = document.querySelector(`.cart-item[data-name="${name}"]`);
    if (cartItem) {
        let quantity = cartItem.querySelector('.item-quantity');
        let newQuantity = parseInt(quantity.innerText) + 2;
        quantity.innerText = newQuantity;
        let itemTotal = cartItem.querySelector('.item-total');
        itemTotal.innerText = `$${(newQuantity * price)}`;
    } else {
        cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-name', name);
        cartItem.innerHTML = `
            <span class="item-name">${name}</span>
            <span class="item-quantity">2</span> × <span class="item-price">$${price}</span>
            <span class="item-total">$${price * 2}</span>
            <button class="remove-item">Remove</button>
            <button class="remove-all-item">Remove all</button>
        `;
        cartItems.appendChild(cartItem);

        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeCart(name, price);
        });
        cartItem.querySelector('.remove-all-item').addEventListener('click', () => {
            removeAllCart(name, price);
        });
    }
}


function removeCart(name, price) {
    const cartItem = document.querySelector(`.cart-item[data-name="${name}"]`);
    if (cartItem) {
        let quantity = cartItem.querySelector('.item-quantity');
        let newQuantity = parseInt(quantity.innerText) - 1;
        if (newQuantity > 0) {
            quantity.innerText = newQuantity;
            let itemTotal = cartItem.querySelector('.item-total');
            itemTotal.innerText = `$${(newQuantity * price).toFixed(2)}`;
        } else {
            cartItem.remove();
        }
    }
}

function removeAllCart(name, price) {
    const cartItem = document.querySelector(`.cart-item[data-name="${name}"]`);
    if (cartItem) {
        let quantity = cartItem.querySelector('.item-quantity');
        let newQuantity = parseInt(quantity.innerText) - parseInt(quantity.innerText) ;
        if (newQuantity > 0) {
            quantity.innerText = newQuantity;
            let itemTotal = cartItem.querySelector('.item-total');
            itemTotal.innerText = `$${(newQuantity * price).toFixed(2)}`;
        } else {
            cartItem.remove();
        }
    }
}

