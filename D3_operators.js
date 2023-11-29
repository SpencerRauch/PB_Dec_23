// Remainder operator  %
var remainder = 9 % 5;
console.log(remainder)

var number = 22;

var isEven = number % 2 == 0;
console.log("Is the number even? " + isEven)

// rounding!

var num1 = 7.2
var num2 = 7.8
var num3 = -7.2
var num4 = -7.8

// Math library ... Math.floor() Math.ceil() Math.round()  Math.trunc()

//floor goes to the left in the number line
console.log("******FLOOR*******")
console.log(Math.floor(num1))
console.log(Math.floor(num2))
console.log(Math.floor(num3))
console.log(Math.floor(num4))
console.log("\n");

//ceil goes to the right in the number line
console.log("******CEIL*******")
console.log(Math.ceil(num1))
console.log(Math.ceil(num2))
console.log(Math.ceil(num3))
console.log(Math.ceil(num4))
console.log("\n");

//round
console.log("******round*******") //round cuts off at .5 
console.log(Math.round(num1))
console.log(Math.round(num2))
console.log(Math.round(num3))
console.log(Math.round(num4))
console.log("\n");

//trunc
console.log("******trunc*******") //trunc cuts off the decimal regardless of position on number line
console.log(Math.trunc(num1))
console.log(Math.trunc(num2))
console.log(Math.trunc(num3))
console.log(Math.trunc(num4))
console.log("\n");


