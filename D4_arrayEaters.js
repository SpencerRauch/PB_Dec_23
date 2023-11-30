/* GREEDY MONSTER!

You're a monster wrangler, tasked with feeding a monster. The monster unfortunately doesn't know when to stop!

Add to the code below to make sure the monster stops when it consumes 1000 calories or more.

Stretch goal: 
    Make it so the monster stops eating when it reaches 1000 or more calories 
    OR when it eats three snacks, whichever happens first.

Topics to review if stuck: conditionals -- break 

*/


function feedTheMonster(food){
    var snacksInBag = food.length;
    var snacksEaten = 0; //keeps track of how many snacks have been removed from the bag
    var caloriesConsumed = 0; // keeps track of how many calories the monster has consumed

    for (var i = 0; i < snacksInBag; i++){
        caloriesConsumed += food.pop();
        snacksEaten++;
        //Your additions should go here <--------
    }
    var msg = "The monster ate ";
    msg += snacksEaten;
    msg += " snacks for a total of ";
    msg += caloriesConsumed;
    msg += " calories -- there are ";
    msg += food.length;
    msg += " snacks left in the bag";
    
    return msg;
}

//values in the snackBags represent calories, the monster pulls one out from the end each time
var snackBag1 = [100, 300, 300, 200, 400];
var snackBag2 = [200, 500, 800, 900, 100];
var snackBag3 = [1000,1000,1000,1000];

console.log(feedTheMonster(snackBag1));
//expected output: The monster ate 4 snacks for a total of 1200 calories -- there are 1 snacks left in the bag
//stretch goal: The monster ate 3 snacks for a total of 900 calories -- there are 2 snacks left in the bag

console.log(feedTheMonster(snackBag2));
//expected output: The monster ate 2 snacks for a total of 1000 calories -- there are 3 snacks left in the bag

console.log(feedTheMonster(snackBag3));
//expected output: The monster ate 1 snacks for a total of 1000 calories -- there are 3 snacks left in the bag