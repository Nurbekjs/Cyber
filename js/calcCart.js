function calcCart(){
    const cartGoods = document.querySelectorAll('.cart_good');
    const totalPriceEl = document.querySelector('.total_price')
    let totalPrice=0;

    cartGoods.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.cart_good_price');
        
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    totalPriceEl.innerText = totalPrice;
    
}

