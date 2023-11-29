// What is a function? 
// a block of code you can call upon as much as you want! 
//a self contained block of code that performs specific tasks
// functions are invoked (called) to run
// every function will return something, even if that something is undefined
// function can take input -- parameters / arguments
// the function keyword declares we are about to define a function

//function defintion
function myFunction(/**parameters go here */) {
    console.log("Hello from our function!")
}

//function call
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();


// countUp(1,10)

// a function CALL is replaced by a functions RETURN
var result = countUp(99,90)
console.log(result)

// function definitions will float to the top of your code
function countUp(start, stop){
    var countArray = []
    if (start > stop){ //waterfall method of swapping values
        var temp = start;
        start = stop;
        stop = temp;
    }
    for (var i = start; i < stop; i++){
        countArray.push(i)
    }
    return countArray
    console.log("Will this run??!?")
}
