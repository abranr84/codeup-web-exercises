// let slices = 4
// console.log(`There are ${slices} slices.`);
// while (slices > 0) {
//     console.log("I'll have a slice.");
//     slices = slices - 1;//shorthand slices--;
//     console.log(`Now there's ${slices} slices left`);
// }
// console.log("No more pizza.");

// let counter = 100;//checking
// while (counter >= 0) { //condition
//     console.log(counter);
//     counter--;//changing the value
// }

// let number = 5;//checking
// while (number > 200) { //condition
//     number = number * 2;//changing the value
//     //number *= 2; shorthand
//     console.log(number);
//     //If console.log(number) is above the changing value it'll stop before 200
// }

//Psuedo code
//Ask a user for input -- how much does something cost
//Assign the user input to a variable
//Declare a variable to hold the total cost
//Tell the user what the total is
//Get the user input for the next item's cost
//There needs to be a way for the user to say when there's no more items

//First draft:
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput!== "stop") {
//     userInput = prompt("Enter the price of your next item:");
//     if (userInput === "stop") {
//         alert("Your final total is " + total);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is now " + total);
//     }
// }

//let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

//Math properties

// let number = Math.ceil(Math.random() *6);
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${number}!`);



