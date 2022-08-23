//concat
// let firstName = "Abran";
// let lastName = "Rodriguez";
// let car1 = "Dodge Caravan GT";
// let car2 = "Chevy Avalanche"
// let car3 = "Ford Edge SEL";
// let car4 = "Hyundai Sonata"
// let streetAddress = "509 Denise Dr";
// let city = "New Braunfels";
// let state = "Texas";
// let school = "Codeup";
//
// function intro(){
//     return `Hi my name is ${firstName} ${lastName}. I live at \n ${streetAddress} ${city}, ${state}. I just started going to ${school} for web development. I had two vehicles but on the second day I got into an accident. I was driving my ${car2} on the way home and someone lane changed to avoid an accident and collided into me. My ${car2} was totaled. I was fine after a day or two and now driving a rental, ${car4}. I don't like it. I'm hoping to buy a ${car3}.`
// }
//
// console.log(intro());
//
// const person = {
//     name: "John", age: 50
// }
// alert(person.name + " is " + person.age);
//
// let txt = "Hello World!";
// let x = txt.length;
// alert(x);
//
// let text = "We are Dem' \"Boys!\"";
//     alert(text);
// let emphasize = text.slice(7, 18).toUpperCase();
// alert(`I SAID WE ${emphasize}`);
//
// const fruits = ["Banana", "Orange", "Apple"];
//
// const d = new Date();
// alert(d);
// year = d.getFullYear();
// month = d.getMonth();
//
// d.setFullYear(2020);
//Math.random();
//Math.max(); Picks largest integer
//Math.round(); Rounds to nearest integer
//Math.sqrt(); Gets square root of integer

// let age = n;
// let voteable = (age < 18) ? "Too young" : "Old enough"; alert(votealbe); - Ternary

// function ifGreater(x, y){
//     if ( Math.round(x) > Math.round(y)) {
//         alert(`${x} is greater then ${y}.`);
//     } else {
//         alert(`${y} is greater than ${x}.`);
//     }
// }

// switch(fruits) {
//     case "Banana":
//         alert("Hello")
//         break;
//     case "Apple":
//         alert("Welcome")
//         break;
//            default:
//                alert("Neither");
// }

// const greet = (name) => { return "Hello " + name + "!"; }
// console.log(greet("Eric"));

// let numbers = [3, 5, 8, 9, 2];
//Old way
// function multiplyByTwo(number){
//     return number * 2;
// }
//
// let multipliedNumbers = numbers.map(multiplyByTwo);
// console.log(multipliedNumbers); //prints out: 6, 10, 16, 18, 4
//
// //Using ES6 arrow functions
// const multiplyByTwo = number => number * 2;
//
// let multipliedNumbers = numbers.map(multiplyByTwo);
// console.log(multipliedNumbers); //prints out: 6, 10, 16, 18, 4

// const divideByThree = number => number / 3;
// const sayHello = name => `Hello ${name}!`;
// const isGreater = (numb1, numb2) => numb1 > numb2 ? `${numb1} is greater than ${numb2}.` : `${numb2} is greater than ${numb1}.`;