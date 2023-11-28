var produceList = ["apples", "oranges", "jalapenos"];
//Array 2
var accountBalances = [5000, 10, 2500];
//Array 3
//arrays are zero indexed collections of elements
//                    0          1            2               3            4      5
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345];

//get count for auntsContact
console.log(auntsContact.length)
//use subscript syntax to access or reassign individual elements
console.log(auntsContact[4])
auntsContact[1] = 'Doe'

//adding and removing from arrays
// pop and push both operate at the end of the array
accountBalances.push(1000000)

//pop will return the element it removes
var tooSpicy = produceList.pop()
console.log(tooSpicy)

function jamesFunction(){
    var x = 5
    x = x*25
    console.log(x)
    return "Apple sauce"
}

var storedResult = jamesFunction()