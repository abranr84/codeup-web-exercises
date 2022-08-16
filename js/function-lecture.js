//The parts of a function
//1. function keyword
//2. The name of the function
//3. Parentheses (Some functions do not need parameters.)
//4. If there is more than one parameter, the list is comma seperated.
//5. Curly braces contain the function body
//6. The function body contains the code that runs when the function is invoked
//7. [optional but common] return statement
function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

// SCOPES
//1. Functions create scope (Inside the function has local)

// Not ideal way to code a function.
//Here number has global scope
let number = 20;
function localOrGlobal(){
    console.log(number);
}

// We do not get an error cause they have different scopes. Local(First)shadows the Global(Second).

let number = 20;

//function declaration
function localOrGlobal(){
    let number = 10;
    console.log(number);
//It's supposed to be local but takes global due to not having (let) in front of it. To avoid "use strict";
    anotherNumber = 23;
}
localOrGlobal();
console.log(number);
console.log(anotherNumber);

//localOrGlobal();
//console.log(number);
//console.log(anotherNumber);


//function expression

//Will not get hoisted
bark();
const bark = function(){
    console.log("woof!");
}
// declaration
//Hoisted
yap();

function yap(){
    console.log("yip yip");
}

//arrow functions

//function declaration
function add(num1, num2){
    return num1 + num2;
}
//function expression
const add = function(num1, num2){
    return num1 + num2;
}

//arrow function -- if it only returns something, you don't need a return keyword
//Arrow does not get Hoisted
const add = (num1, num2) => num1 + num2;

//if there is only one parameter, you don't need parentheses around the parameter

const addTen = number => number + 10;

//if there are no parameters, you use empty parentheses

const helloWorld = () => "Hello World";