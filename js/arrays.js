// declaring an array literal:
// each item in an array is called an element

// let groceryList = [`bread`,`eggs`,`butter`,`milk`,];
//
// for(let i = 0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
// }

//Sort before also returns sorted
// let carsList = [`Avanlanche`,`Caravan`,`Edge`,`Outlander`,`Mirage`,];
//
// for(let i = 0; i < carsList.length; i++) {
//     if (i === carsList.length - 1) {
//         console.log(carsList[i]);
//     }
// }
// console.log(carsList.sort());
// console.log(carsList[0]);

// for(let i = 0; i < carsList.length; i++) {
//     if (i === carsList.length - 1) {
//         console.log("I have owned  a " + carsList[i]);
//     } else {
//         console.log("I have owned a " + carsList[i] + " and ");
//     }
// }

// let array = ["ab", "abcdefgh", "abcd"];
//
// array.sort(function(a, b){return b.length - a.length});
// console.log(JSON.stringify(array, null, `\t`));

// let texasCities = ["San Antonio", "houston", "Dallas", "El Paso"];
// for(let i = 0; i < texasCities.length; i++) {
//     if (i % 2 === 1){
//         console.log(texasCities[i] + " is an odd city");
//     }
//     console.log(texasCities[i]);
// }

// function outPutArray(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
//
// outPutArray(texasCities);

//Array Methods String Methods
//array.isArray
//forEach for loop for Arrays
//anonymous Function for forEach, also can use arrow functions
//forEach loop takes an anonymous function
// the function we pass to the foreach lop has up to three parameter
// The first parameter represents the array elements
// The second parameter represents the element index
// the third parameter represents the array itself
// the second and third parameters are optional

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// console.log(prices.sort());

// prices.forEach(function(price){
//     console.log(price)
// });

// prices.forEach(function(price, index){
//     console.log("item number " + (index + 1) + " costs " + price);
// });

// since the function is anonymous, we can use arrow syntax

// prices.forEach(price => {
//     console.log(price)});

// let numbers = [1, 2, 3, 4, 5];
//
// function first(){
//     return numbers.indexOf(2);
// }
//
// console.log(first(numbers));

//ARRAY METHODS

let groceryList = [`bread`,`eggs`,`butter`,`milk`,];

groceryList.push("potatoes");//Adds last to the array
console.log(groceryList);
groceryList.pop();//Take away last item
console.log(groceryList);

groceryList.unshift("sliced cheddar");//Beginning of the array
console.log(groceryList);

groceryList.shift();//Removes from beginning
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

groceryList[indexOfButter] = "peanut butter";
console.log(groceryList);

let bread = groceryList[0];
groceryList[0] = "avocadoes";
console.log(groceryList);

//Moving items in the middle -concat Method
//1
let firstHalfOfMyGroceryList = groceryList.slice(0, 2);
console.log(firstHalfOfMyGroceryList);
//2
let secondHalfOfMyGroceryList = groceryList.slice(2);
console.log(secondHalfOfMyGroceryList);
//3
firstHalfOfMyGroceryList.push("butter");
//4 concat arrays
groceryList = firstHalfOfMyGroceryList.concat(secondHalfOfMyGroceryList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());

prices.sort(function(a,b){
    return a-b;
});
console.log(prices);

groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

// let newList = [];
// for (let i = 0; i < groceryList.lenth; i++) {
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

groceryList.forEach((item,index, array) => {
    array[index] = item.toLowerCase();
})

groceryList = groceryList.join(' ').toLowerCase().split(' ').sort();
console.log(groceryList);

console.log(groceryList);

let quote = "All the world's a play";
quote = quote.toLowerCase();// Either here or
let quoteArray = quote.split(' ');
console.log(quoteArray);
quoteArray = quoteArray.reverse();
console.log(quoteArray);
quoteArray.join(' ').toLowerCase();// Here
console.log(quote);

let wishList =

function checkWishListPrices(wishList){
    for (let i = 0; i < wishList.length; i++) {
        if (wishList[i] > 50) {
            return false;
        }
    }
    return true;
}

console.log(checkWishListPrices(wishList));

function checkWishListTotal(wishList){
    let total = 0;
    for (let i = 0; i < wishList.length; i++){
        total += wishList[i];
    }
    return total <= 100;
}

console.log(checkWishListTotal(wishList));

function processWishList(wishList, testFunction1, testFunction2){
    return testFunction1(wishList) && testFunction1(wishList);
}

console.log(processWishList(wishList, checkWishListPrices, checkWishListTotal));

function zatannaMagic(string){
    let commandArray = string.toLowerCase().split(' ');
    for (let i = 0; i < commandArray.length; i++){
      commandArray[i] = (commandArray[i].split(' ').reverse().join(' '));
    }
    let command = commandArray.join(' ') + "!";
    return command.charAt(0).toUpperCase() + command.slice(1);
}

