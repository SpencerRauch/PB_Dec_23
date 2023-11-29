//For loops

// for ( 
//     var i = 0; // initialization -- declare any variables we need in our loop -- runs once at the beginning
//     i < 10; //condition -- the condition that must be true for the loop to iterate checked at the beginning of EACH ITERATION
//     i++ // final statement -- this runs once at the end of every iteration through the loop
//     ){
//     console.log(i) // code body runs after condition is checked and found to be true
// }

var num = 0;
num++ // this increases num by 1
num = num + 1 // this increases num by 1
num += 1 // this increases num by 1
num /= 3;
// console.log(num)

for (var i=0; i <= 10; i+=2){
    console.log(i)
}

for (var i=0; i <=10; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

for (var x=100; x > 0; x--){
    console.log(x)
}

// for (var x=100; x > 0; x++){ //infinite loop! ctrl + c or cmd + c to stop
//     console.log(x)
// }

// for(;;){ // all statements optional in a for loop
//     console.log("Forever loop!")
// }
var whileNum = 9

while (whileNum > 0){ // it is important in a while loop to be working towards breaking the condition
    //
    whileNum--
}