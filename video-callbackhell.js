// Example 1. 
setTimeout (function () {
    console.log(“Javascript”);
    }, 5000 )
    
    
    
    // Example 2. 
    // Here it is displayed how callbacks become dependent on a string of callbacks. It is called callback hell.
    
    const cart = [“shoes”, “pants”, “kurta”];
    
    api.createOrder(cart, function() {
        
        api.proceedToPayment(function (){
            
            api.showOrderSummary(function(){
    
                api.updateWallet()
    }
    
    )
    
    } )
    
    })
    