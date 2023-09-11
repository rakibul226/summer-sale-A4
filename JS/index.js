
 let totalPrice = 0;
 const pButton = document.getElementById('purchase-btn')
function calculateTotalPrice(target){
    // const totalPrice = getElementValue('item')
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;    
    const cartItemContainer = document.getElementById("cart-item");
    cartItemContainer.appendChild(li);

    const itemPrice = target.childNodes[7].childNodes[1].childNodes[0].innerText;
    totalPrice = parseInt(totalPrice) + parseInt(itemPrice);
   
    const currentTotalPrice = document.getElementById('total-price');
    currentTotalPrice.innerText = totalPrice;
 
        //enable purchase  button  
        const totalProducts = totalPrice;
        const button = document.getElementById('activate-button');

        if (totalProducts >= 1) {
            pButton.removeAttribute('disabled');
        } else {
            pButton.setAttribute('disabled', 'true');
        }
        
        //enable coupon button
        if (totalProducts >= 200) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'true');
        }


  }



    //applying discount on code

    function applyDiscount() {

        
        const couponCode = document.getElementById('coupon-code').value;
        
        if (couponCode === 'SELL200') {
            
            const discountedPrice = totalPrice * 0.8; // 20% discount
            alert('Coupon code "SELL200" applied');

            const totalFinalAmount = document.getElementById('total-final');
            totalFinalAmount.innerText = discountedPrice;

            const totalDiscount = totalPrice - discountedPrice;
            const discountElement = document.getElementById('discounted-price');
            discountElement.innerText = totalDiscount;

            
        } else {
            alert('Invalid coupon code. Please try again.');
        }
    }
