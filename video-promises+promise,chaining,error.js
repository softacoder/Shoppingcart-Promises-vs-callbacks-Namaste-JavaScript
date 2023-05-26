Example1.
const promise = createOrder(cart);
promise.then(function (orderId){
proceedToPayment(orderId);
});



Example2.
const cart = [“shoes”, “pants”, “kurta”]; 

createOrder(cart)
.then(function (orderId){
console.log(orderId);
return orderId;
})
.catch(function(err){
console.log(err.message);
})
.then(function(orderId){
return proceedToPayment (orderId);
})
.then(function(paymentInfo){
console.log(paymentInfo);
})
.catch(function(err){
console.log(err.message);
})
.then(function(orderId){
console.log(“No matter what happens, I will be called”);
})

// Producer

function createOrder(cart){
const pr = new promise(function(resolve, reject){
//createOrder
//validateCart
//orderId
if (!validateCart(cart)) {
const err = new Error(“Cart is not valid”);
reject(err); 
}
//logic for create order
const orderId = “1,2,3,4,5”;
if (orderId){
setTimeout(function(){
resolve(orderId); 
}, 5000);
}
}) ;
return pr;
}


function proceedToPayment(orderId) {
///
return new Promise (function(resolve, reject){
resolve (“Payment successful”);
});
}

function validateCart(cart) {
return true;
}

// if it is false the code is function validateCart(cart) {
//return false;
//}

