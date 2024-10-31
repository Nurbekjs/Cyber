const cartWrapper = document.querySelector('.cartWrapper');

window.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-cart')) {
        const cart = event.target.closest('.goods-grid')   
    
        const goodInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.goods_image').getAttribute('src'),
            title: cart.querySelector('.goods-desc').innerText,
            price: cart.querySelector('.goods-price').innerText,
            attribute: cart.querySelector('.goods-price').innerText
        }
    const ItemInCart = cartWrapper.querySelector(`[data-id="${goodInfo.id}"]`);
    if(ItemInCart){
        const counterEl = ItemInCart.querySelector('[data-counter]');
        counterEl.innerText = ++counterEl.innerText;
    }
    else{


    const cartItemHTML = `<div class="cart_good" data-id="${goodInfo.id}">
                                    <div class="cart_good_img"><img src="${goodInfo.imgSrc}" alt="Airpods Max"></div>
                                    <div class="cart_good_desc">
                                        <h2>${goodInfo.title}</h2>
                                        <p class="attribute">${goodInfo.attribute}</p>
                                    </div>
                                    <div class="cart_good_counter">
                                        <div class="items_control" data-action="minus">-</div>
                                        <div class="items_current" data-counter>1</div>
                                        <div class="items_control" data-action="plus">+</div>
                                    </div>
                                    <div class="cart_good_price">${goodInfo.price}</div>
                                    <div> &#36 </div>
                                    <div class="cart_good_remove" ><i class="fa-solid fa-xmark" data-remove></i></div>
                                </div>`;
        cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
        }
    }
})
window.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-remove')) {
        const cart = event.target.closest('.cart_good').remove();
    }
    cart_status();
    calcCart();
})
