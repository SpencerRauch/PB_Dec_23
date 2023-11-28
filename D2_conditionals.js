//Conditionals -- 
// condition is an expression that evaluates to a boolean

// if (condition) {    
//     // what to do if condition is true
// }
// else if (2nd condition) { // can have 0 to many of these statements    
//     // what to do if 2nd condition is true and the first condition is false
// }
// else {  // can have 0 or 1 of these statements    
//     // what to do if none of the previous conditions are met
// }

//Belt Grades at the Dojo
//Red, Black, Orange 
// Red Score greater than 8 and a time less than 5 (hours)
// Black Score greater than 9.5 and a time less than 5 (hours)
// Orange Score greater than 8 and a time less than 8 (hours)

var score = 8.3;
var time = 9;
if (score < 8){
    console.log("Good try, let's study up and try again!");
} else if (time > 5){
    console.log("Congrats on the Orange belt!");
} else if ( score >= 9.5){
    console.log("Great work on the black belt!");
} else {
    console.log("Red belt acheived! Good work!");
}

// ==, ===, >, <, >=, <=, !=
var string = "1"
var number = 1
if (string == number){ //double equals will attempt a conversion before comparing "1" == "1"
    console.log("They are the same according to JS")
} else {
    console.log("These are not equal, says JS")
}

if (string === number){ //triple equals attempts no such conversion
    console.log("They are the same according to JS")
} else {
    console.log("These are not equal, says JS")
}


var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);

var isSunny = true;
if (isSunny){
    console.log("No need for an umbrella")
}

// && (and) || (or)

//expression              value
// true && true            true
// true && false          false
// false && false         false
// true || true            true
// true || false           true
// false || false         false