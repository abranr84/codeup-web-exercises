

// let userChoice = prompt("Enter an odd number"));
//
// for (let i = 1; i <= 49; i++) {
//     if (userChoice % 2 === 0) {
//         alert("Invalid input.");
//         break;
//     }
//     if (userChoice === 27)  {
//         console.log(`Yikes! Skipping number: 27`)
//         continue;
//     }
//     if (i % 2 !== 0) {
//         console.log(`Here is an odd number: ${i}`);
//     }
// }

//Joshua's help
// function breakAndContinue() {
// let usersNumber;
//     while (true) {
//         usersNumber = prompt("Give me and odd number between 1 and 50!");
//         if (usersNumber % 2 === 0) {
//             alert("Please Enter an Odd number!");
//         } else {
//             console.log(`Number to skip is: ${usersNumber}`);
//             break;
//         }
//
//     }
//
//     for (let i = 1; i < 50; i += 2) {
//         if (i == usersNumber) {
//             console.log(`Yikes! Number to skip is: ${usersNumber}`)
//             continue;
//         }
//         console.log(`Here is an Odd number: ${i}`)
//         //continue;
//     }
// }
// breakAndContinue();



// Example
// let string = "";
// for (let i = 0; i < 8; i++) {
//     let word = prompt("Let's make a sentence! Enter a word: ");
//     if (word === "curse") {
//         console.log("That word is not allowed")
//         continue;
//     }
//             string =+ "" + word;
//     console.log("Your sentence is: " + string);
// }

//Javier's example

// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean");
// }

    // while (true) {
    //     let oddNumber = prompt("Please enter an Odd number:");
    //     if (oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)) {
    //         console.log("Number to skip is: " + oddNumber);
    //         console.log( );
    //         for(let i =1; i < 51; i+= 2){
    //             if (i == oddNumber){
    //                 console.log("Yikes! Skipping number " + oddNumber)
    //                 continue;
    //             } else {
    //                 console.log("Here is an odd number: " + 1);
    //             }
    //         }
    //         break;
    //     }
    // }
