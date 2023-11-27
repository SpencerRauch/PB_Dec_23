// This is a comment! 
// Let's talk about variables!

/* This is
a comment
on mulitple lines! */

//keyword var lets js know we're about to declare a variable
// my_var is the name of our variable
// 9 is the value of our variable
var myVar = 9;

// let, const  <-- we will use these later in the bootcamp

//data types

//string is a collection of characters

var myString = " this is my string";
var quote = ' And then he said, "I am cool" '
var contraction = " This won't work wrapped in single quotes"
// backslash can be used as an escape character so that we can use special chars without changing our code
var escaped = ' This won\'t be a problem'
// console.log(escaped)
var stringTwo = ' this is also a string';
var stringThree = `My var is ${myVar}` // this is a little extra and beyond what the platform has yet


//number floating point, integers
// all numbers in js are 64-bit floating point numbers
var myNum = 7;
var myDecimal = 7.11;

var mySum = myNum + myDecimal; //14.11

// console.log(stringTwo + mySum)
console.log(mySum + stringTwo)

//boolean true or false!
var bool = true;
var boolTwo = false;

//null and undefined
//undefined means it has not yet been defined

var x;
console.log(x)

// null means nothing

var username = null;