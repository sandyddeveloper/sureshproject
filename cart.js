document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem('cartCount') || 0;
    updateCartBadge(cartCount);
});


document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartBadge(cartCount);
    });
});


function updateCartBadge(count) {
    const badge = document.querySelector('.nav-link .badge');
    if (badge) {
        badge.textContent = count;
    }
}

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            const image = this.dataset.image;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find(p => p.name === name);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, image });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            Swal.fire('Added!', `${name} has been added to your cart.`, 'success');
        });
    });

