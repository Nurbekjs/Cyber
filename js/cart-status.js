function cart_status(){
    const cartWrapper = document.querySelector('.cartWrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector("#order_form")
    const cartGoodsAmount = document.querySelector('.cart_amount');

    if(cartWrapper.children.length > 0){
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none');
        cartAmount = cartWrapper.children.length;
        cartGoodsAmount.innerText = cartAmount;
    }
    else {
        cartEmpty.classList.remove('none');
        orderForm.classList.add('none');
        cartGoodsAmount.innerText = 0;

    }
}

