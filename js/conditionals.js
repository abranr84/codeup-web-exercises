"use strict";

//Lecture
// let flavor = prompt("Welcome to Codeup ice cream. What flavor do you like?");

// flavor = flavor.toLowerCase();
//
// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert("One vanilla coming right up!");
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. :(");
// }

// let decision = confirm("Are you sure you want to close this page?");
// alert(decision);
// if (decision) {
//     alert("Ok, closing the page.");
// } else {
//     alert("Ok, keeping the page open.")
// }

// Shorthand
// (decision)?alert("Closing the page."):alert("Keeping the page open.");
// ? is like the if
// : is like the else
//
// let number = prompt("Enter a number:");
//
//
//
// function divisibleByFive(number){
//     if (number % 5 === 0 && number !== null && number !==""){
//         alert("That number is divisible by 5.");
//     } else {
//         alert("That number is not divisible by 5.");
//     }
// }

// function divisibleByFive(number){
//     number % 5 === 0 ? alert("That number is divisible by 5.") : alert("That number is not divisible by 5.");
//     or
// function divisibleByFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5." : "That number is not divisible by 5.");
// }

// divisibleByFive(number);
//
// Same thing
// divisibleByFive(prompt("Enter a number:"));

// function alertMVPCustomer(purchaseTotal){
//     if(purchaseTotal > 1000){
//         alert("MVP1")
//     }
// }

// alertMVPCustomer(1001);
//
// function isMVP(purchaseTotal){
//     return purchaseTotal > 1000;
// }
//
// let customer1Purchase = 1001;
//
// if(isMVP(customer1Purchase)){
//     alert("MVP!")
// }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//     function analyseColor(input) {
//     if (input === "blue") {
//         return ("Blue is my favorite color too!")
//     } else if (input === "green") {
//         return ("I like green as well.")
//     } else {
//         return ("I don't know anything about that color.")
//     }
// }
    // prompt("What is your favorite color?");
    // let color ="Blue" || "Green"
    //     if (color === "Blue") {
    //         alert( color + " is my favorite color too!"); }
    // else if (color === "Green") {
    //      alert("That is my second favorite color");
    // } else {
    //     alert("That's interesting.")
    //     }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor() {
//     return randomColor;
// }

// console.log(analyzeColor());

// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let analyzeColor = prompt("What is your favorite color?")
//
// switch(analyzeColor) {
//     case "Blue":
//         alert("Blue is my favorite color too!");
//         break;
//     case "Green":
//         alert("I also like Green, it is my second favorite.");
//         break;
//     default:
//         alert("That's cool.");
//         break;
// Went a step a ahead so this is also for the next TODO}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalBill) {
    if (luckyNumber === 0) {
        return (luckyNumber, totalBill - 0)
    } else if (luckyNumber === 1) {
        return (luckyNumber, totalBill * .1)
    } else if (luckyNumber === 2) {
        return (luckyNumber, totalBill * .25)
    } else if (luckyNumber === 3) {
        return (luckyNumber, totalBill * .35)
    } else if (luckyNumber === 4) {
        return (luckyNumber, totalBill * .50)
    } else if (luckyNumber === 5) {
        return (luckyNumber, totalBill - totalBill)
    }
}

console.log(calculateTotal(0,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What is your total bill?");
// alert("Your lucky number is " + luckyNumber);
// let discountNumber = prompt("What is your lucky number?");
// alert("Bill before discount is " + totalBill + ".");
// alert("Bill after discount is " + calculateTotal(luckyNumber, totalBill) + ".");

//Example
// let bill = prompt("Please enter your total bill;");
// alert("Your lucky number was " + luckyNumber + "\n" + "Your price before discount was $" + bill + "\n" + "Your price after discount is $" + calculateTotal())

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// function isNumber(value){
//     return !((isNaN(value)) || typeof value === "boolean");
// }
//
// function numberIsEvenOrOdd(number){
//     return number % 2 === 0 ? number + " is even." : number + " is odd.";
// }
//
// function numberPlus100(number){
//     return number + " plus 100 equals " + (number + 100);
// }
//
// function negativeOrPositive(number){
//     return number < 0 ? number + " is negative." : number + " is positive.";
// }
//
// function getNumber(){
//     if (confirm("Do you want to pick a number?")) {
//         return parseFloat(prompt("Enter a number"));
//     }
// }
//
// function analyzeNumber(number) {
//     if (number === undefined) {
//         return false;
//     }
//     if (isNumber(number)) {
//         alert(numberIsEvenOrOdd(number));
//         alert(numberPlus100(number));
//         alert(negativeOrPositive(number));
//     } else {
//         alert("Incorrect input data type.")
//     }
// }
//
// analyzeNumber(getNumber());

// let answer;
// if (confirm("Would you like to choose a number?") === true) {
// let choice = prompt("What number?")
// } else if (prompt % 2 === 0 && prompt > 0) {
//     alert("Your number is even.");
//     alert("Your number plus 100 is " + ( prompt + 100) + ".");
//     alert("Your number is positive.");
// } else if (prompt % 3 === 0 && prompt < 0) {
//     alert("Your number is odd.")
//     alert("Your number plus 100 is " + ( prompt + 100) + ".");
//     alert("Your number is negative.");
// } else if (prompt ) {
//     alert("Ok, maybe next time.");
// }



// switch(number) {
//     case number % 2 === 0 && number > 0:
//         alert("Your number is Even. " + "Your number plus 100 is " + (number + 100) + "Your number is positive." );
//         break;
//     case number % 2 === 0 && number < 0:
//         alert("Your number is Even. " + "Your number plus 100 is " + (number + 100) + "Your number is negative.");
//         break;
//     case number % 3 === 0 && number > 0:
//         alert("Your number is Odd. " + "Your number plus 100 is " + (number + 100) + "Your number is positive.");
//         break;
//     case number % 3 === 0 && number < 0:
//         alert("Your number is Odd. " + "Your number plus 100 is " + (number + 100) + "Your number is negative.");
//         break;
//     default:
//         number = 0;
//         break;
// }

//Example
//     function isNumber(value){
//         return !(isNaN(value) || typeof value === "boolean");
// }
//
// function oddOrEven(number){
//         return number % 2 === 0 ? number + " is even." : number + " is odd."
// }
//
// function numberPlus100(number){
//         return number + " plus 100 equals " + (number + 100);
// }
//
// function negativeOrPositive(number){
//         return number < 0 ? number + " os a negative number. " : number + " is a positive number.";
// }
//
//
// function getNumber() {
//     if (confirm("Do you want to enter a number?")) {
//         return parseFloat(prompt("Enter a number:"));
//     }
// }
//
// function analyzeNumber(number){
//     if ( number === undefined){
//         return false;
//     }
//     if (isNumber(number)) {
//         alert(oddOrEven(number));
//         alert(numberPlus100(number));
//         alert(negativeOrPositive(number));
//     } else {
//         alert("Incorrect input data type.");
//     }
// }
//
// analyzeNumber(getNumber());

//console.log(getNumber());