// Arrays and Loops ( NOTE: Arrays are 0 based, so instead of 1, 2, 3... to count the number of items its 0, 1, 2...)

//variableType variableName  = [ /*things in the array*/];

const cars = new Array("Saab", "Volvo", "BMW");

// example array with constants but you can use var or let too (don't have to write array in the name)

const fruitsArray = ['Apples', 'Oranges', 'Pears'];
let numberArray = [1, 2, 3, 4, 5];

console.log(fruitsArray); // prints the array as an array in the console
console.log(fruitsArray.toString()); // print only the values in the array as a string
console.log(numberArray.toString());

numberArray.push(6); // add a new item to the end of the array
console.log(numberArray.toString());


// syntax for splice 
// array.splice(index, howmany, item1, ....., itemX)

fruitsArray.splice(1,1); // remove Oranges from the array
console.log(fruitsArray.toString());

// NOTE: i stands for index. it can be any letter or word or whatever like a variable because it IS a variable. i just is a "placeholder" for whatever element i am looking at right now.

// var i = 0 - start with this particular item
// i < array.length - keep going until you go through the entire arrays
// i++ - pick up another lego / look at the next item (after you do what's in the curly braces)

for(var i=0; i<fruitsArray.length; i++){
    console.log(fruitsArray[i].toString()); // console.log the values of the array individually
}

// This is the long way of doing what we did in the for loop above
console.log(fruitsArray[0].toString());
console.log(fruitsArray[1].toString());