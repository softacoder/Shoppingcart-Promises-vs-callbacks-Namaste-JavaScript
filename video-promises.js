Example1.
const promise = createOrder(cart);
promise.then(function (orderId){
proceedToPayment(orderId);
});
