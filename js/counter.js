let counter;
window.addEventListener('click', function(event){
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.cart_good');
    counter = counterWrapper.querySelector('[data-counter]');
    }
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }
    if(event.target.dataset.action === 'minus'){
        
        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        }
    
}
})