// Create and define some functions
function myFunction(a, b){
    return a + b;
}

function anotherFunction(a, b){
    console.log(a + b);
}

function lastFunction(a, b){
    alert(a * b);
}

//call the functions
var x = myFunction(5, 6);
const peaches = lastFunction(7, 9);

console.log("X = " + x);

//Call the anotherFunction with the parameters of x and 6. x comes from line 15 where we define x as the value of a + b.
anotherFunction(x, 6);


lastFunction(5, 6);