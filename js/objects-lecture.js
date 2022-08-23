// let currentWeather = {//object between the curly braces
//     humidity : 77,//properties
//     temp:82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }
//.notation
// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// //Another way to access properties - able to use variables []bracket notation
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);


//You can do anything to an object property that you can do to any other variable
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95){
//     console.log("It's kind of hot");
// } else {
//     console.log("It's cool today for Texas");
// }
//
// //Loop through an array using for in loop
// for (let property in currentWeather){
//     console.log(property + ": " + currentWeather[property]);
// }
//
// //Dynamically add new properties to existing objects
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);

//Arrays of objects
//An array with elements
//very common data structure

// let hourlyWeather = [
//     {//object without a name
//         time: "08:00",//properties
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];
//hourlyWeather[0] - in the console
//hourlyWeather[0].time - able to use . notation - in the console
//loop over an array of objects
//For loop
//Don't have to -1 since it is less than the length of the hourlyWeather
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }

//forEach
//Don't need to use the "i" counter
//forEach know to start at 0 - built in to the forEach
//simpler syntax
// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feels like ${forecast.feels_like}`);
// })
//
// //forEach arrow function
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feels like ${forecast.feels_like}`));

//Break out of forEach - complicate things and advantages are diminished
// hourlyWeather.forEach(function(forecast, index){
//     if (forecast.temperature > 80){
//         console.log("Too hot!");
//         return false;
//     }
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feels like ${forecast.feels_like}`);
// })

//Array of objects with objects inside

// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
//
// //in log
// // texasInfo[0].currentWeather.temp
//
// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);



// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8
// }
//fighter.attack();
//monster.attack();


//     attack: function(opponent){
//         console.log(opponent.name + " has " + opponent.hitPoints + " hit points.");
//         console.log(this.name + " attacks!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         opponent.hitPoints -= damage;
//         console.log(this.name + " does " + damage + " points of damage");
//         console.log(opponent.name + " now has " + opponent.hitPoints + " hit points.");
//     }
// }

//Can not use arrow functions as method definitions

// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage:6,
//     attack: function(){
//         console.log(this.name + " attacks!");
//     }
// }

//attack method is repeated - No bueno

//Let's create a controller object to handle anything players or game objects do that affects the state of the game. The controller  might handle taking user input and calculating the input's effect on the game.

//Next thing to change is console.log

// let controller = {
//     attack: function(attacker, defender){
//         let defenderHpBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHpBeforeAttack, damage);
//     }
// }
//
// //The view object handles output
//
// let view = {
//     displayAttackResults: function(attacker, defender, defenderHpBeforeAttack, damage){
//         console.log(`${defender.name} has ${defenderHpBeforeAttack} hit points.`);
//         console.log(`${attacker.name} attacks!`);
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         console.log(`${defender.name} now has ${defenderHpBeforeAttack - damage} hit points.`);
//         console.log("-----------");
//     }
// }
//
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
//
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8
//     },
//
//     monster: {
//         name: "Goblin",
//         hitPoints:8,
//         maxDamage: 6
//     }
// }
//
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);

//Creating objects
//define an empty object and create properties dynamically
// let goblin = {};
// goblin.name = "Goblin";

//create a function that returns objects

// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     }
// }

// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);

//use an object constructor
//constructor uses semicolons
// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
// //name is capitalized when adding
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
//
// controller.attack(model.hobgoblinCaptain, model.fighter);
//
// for (let property in model){
//     console.log(model[property].name);
// }

const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}

// let make = car.make;
// let carModel = car.model;
//
// console.log(make);
// console.log(carModel);

//Object deconstruction

const {make, model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

//No longer need to .notation with destruction in the pararmeter
const outputCarInfo = ({make, model, year, mileage} = car) => {console.log(`${year} ${make} ${model} with ${mileage}`)}
outputCarInfo(car);