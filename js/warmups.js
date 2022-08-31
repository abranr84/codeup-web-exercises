//Write a function that accepts an array of numbers and returns its
//average.
//Bonus: if there are any non-numeric values in the array, return false. Numeric strings should count as numeric values.

// function average([input1,input2,input3]){
//     return (input1 + input2 + input3) / 3;
// }

// const arr = [];
//
// let sum = 0;
//
// arr.forEach(function(num){sum += num });
//
// average = sum / arr.length;
//
// console.log()

//Javier example
// let array = [5,10,15]; // Test array
//Start by solving the simplest problem
//forEach - cannot and an if in the loop
// function arrayAverage(array){
//     let total = 0;//Keep counter out of the loop
//     array.forEach(number => {total += number});
//     return total/array.length;
// }
//for loop - can and an if in the loop
// function arrayAverage(array){
//     if (array === undefined){return false;}
//     let total = 0;//Keep counter out of the loop
//     for (let i = 0; i < parseFloat(array.length); i++){
//         if (!isNumber(array[i])){return false;}
//         total += parseFloat(array[i]);
//     }
//     return total/array.length;
// }
//Is there a library with the function definition



//Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
//Bonus: if there are any values that are not strings, return false.

// function longestString([string1, string2, string3]) {
//     if (string1.length > string2 || string3) {
//         return string1;
//     } else {
//         return string2;
//     }
// }

//Javier example
// let stringArray = ["Jabba", "Darth Maul", "Hondo"];
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length){
//             longest = arrayOfStrings[i];
//         }//Do not put return here
//     }
//     //return goes here on for loops
// }
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
//         }//able to write code like this as well
//         return longest;
//     }

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i].students;
    }
    return total;
}

// function calculateTotalStudents(){
//     let totalStudents = 0;
//     for (i = 0; i < classes.class.students; i++){
//         result = totalStudents += [i];
//     }
//     return result;
// }

//Javier example
let numericArray = [8, 10, 20];

function arraySum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(arraySum(numericArray));

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

//function expression
// const convertToObject = function (nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

//arrow function
// const convertToObject = (nameOfClass, numberOfStudents) => {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

// console.log(convertToObject("Intro to Programming", 20));

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodsObject){
    let total = 0;
    for (let i = 0; i < neighborhoodsObject.schools.length; i++){
        total += neighborhoodsObject.schools[i].rating;
}
    return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
}
//control g to highlight multiple

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16


//what's the cost of each level? level * level * priceOfCan
//so I need a totalCost accumulator variable and some kind of variable that keeps track of what level I'm on and I need to keep looping until totalCost > bonus

function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while(totalCost < bonus){
        console.log("Total cost before increment: " + totalCost);
        console.log("Cost of level " + levels + " is " + levels ** 2 * price);
        totalCost += levels * levels * price;
        if (totalCost + ((levels + 1) ** 2 * price) > bonus){break;}
        levels++;
        console.log("Total cost after increment: " + totalCost);
        console.log("Cost of level " + levels + " is " + levels ** 2 * price);
    }
    return levels;
}

// Problem number 2:
//
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.

    let firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
let lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

function createNames(array1, array2) {
    var bucket =[]//counter
    for (let i = 0; i < array1.length; i++) {
        bucket.push({
            firstname: array1[i],
            lastname: array2[i]
        })

        }
    return bucket//return outside of loop
    }


//createNames(firstNames, lastNames) // returns...

    // [
    // {
    //     firstName: 'CJ',
    //     lastName: 'Cat'
    // },
    //     {
    //         firstName: 'Max',
    //         lastName: 'Feline'
    //     },
    //     {
    //         firstName: 'Claude',
    //         lastName: 'Kitten'
    //     },
    //     {
    //         firstName: 'Meowmeow',
    //         lastName: 'Calico'
    //     }
    // ]

// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:

//     ```
// {
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// ```

// The shape of the output should be the following:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
// }
//
// Regardless of the case of the first name and last name input, the output should be in all lower case.
// (edited)
// 4:53g
var fred = {
  firstName: 'Fred',
  lastName: 'Smith',
  email: 'fred@email.com',
  username: 'fred123',
  password: 'pass123'
}
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}

function getSimpleUser(object){
    return({
        firstName:
    })
}





