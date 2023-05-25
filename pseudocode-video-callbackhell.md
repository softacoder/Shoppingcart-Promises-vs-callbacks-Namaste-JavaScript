Example 1. 
setTimeout (function () {
console.log(“Javascript”);
}, 5000 )

// setTimeout: This is a built-in JavaScript function that allows you to delay the execution of a specific piece of code. It takes two parameters: a function to be executed and a time delay specified in milliseconds.
// (function () { ... }): This is an anonymous function defined within the setTimeout function. Anonymous functions are functions without a specific name and can be declared inline.
// console.log("Javascript");: This line is the code that will be executed after the specified time delay. In this case, it simply logs the string "Javascript" to the console. The console.log() function is used to output messages or data to the browser's console. 
// 5000: This is the time delay specified in milliseconds (5 seconds). After this delay, the code inside the anonymous function will be executed.


Example 2. 
Here it is displayed how callbacks become dependent on a string of callbacks. It is called callback hell.

const cart = [“shoes”, “pants”, “kurta”];

api.createOrder(cart, function() {
	
	api.proceedToPayment(function (){
		
		api.showOrderSummary(function(){

			api.updateWallet()
}

)

} )

})

// const cart = ["shoes", "pants", "kurta"];: This line declares a constant variable named cart and assigns it an array containing three elements: "shoes", "pants", and "kurta". This array represents the items in a shopping cart.
// api.createOrder(cart, function() { ... }): This line calls the createOrder function from an API, passing the cart array as a parameter. It also takes in an anonymous function as a callback, which will be executed once the order creation is complete. The specific implementation details of the createOrder function are not shown in the provided code snippet.
// api.proceedToPayment(function () { ... }): Inside the callback function of createOrder, the proceedToPayment function is called from the API. It also takes an anonymous function as a callback, which will be executed once the payment process is completed. Again, the details of the proceedToPayment function are not provided in the code snippet.
// api.showOrderSummary(function() { ... }): Inside the callback function of proceedToPayment, the showOrderSummary function is called from the API. Similar to the previous steps, it also takes an anonymous function as a callback, which will be executed once the order summary is displayed. The inner workings of the showOrderSummary function are not shown
// api.updateWallet(): Inside the callback function of showOrderSummary, the updateWallet function is called from the API. This function likely updates the user's wallet or payment information. No callback function is provided in this case.
// The code snippet demonstrates a series of asynchronous function calls, where each subsequent function is called as a callback within the previous function's callback. This sequence ensures that each step is executed in order, allowing for proper flow and dependency management in the program.

// This type of code is giving away the control of the code because we are dependent on the previous api. Called Inversion of Control









