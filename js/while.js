// let i = i < 10
// let x = 7
//
// function showMultiplicationTable(x){
//     return x * i++;
// }
// console.log(showMultiplicationTable())


// let number = 2;

// while (number <= 65536){
//     console.log(number);
//     number *= 2;
//}

// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);
// In this example, the code in the do block will get executed once before the while condition is checked. The condition is then checked to decide if the loop should continue. For the above example, the do block will only get executed once






// let allCones = Math.floor(Math.random() * 51) + 50;
// let requestedCones = Math.floor(Math.random() * 5) + 1;
// let sold = allCones - requestedCones;
//
// do {
//     (`${allCones - requestedCones > 0}`);
//     alert(`${sold} cones sold...`);
//     alert(`I still have ${allCones - sold}.`);
// if
//     (allCones < requestedCones);
//     alert(`Cannot sell you ${allCones} cones I only have ${allCones - sold}...`);
// } while (allCones === 0);
//     alert(`Yay! I sold them all!`);
//
//Javier example
// let allCones = Math.floor(Math.random() * 51) + 50;
//
// do {
//     let conesWanted = Math.floor(Math.random() * 5) + 1;
//     if (conesWanted > allCones){
//         console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`)
//     } else {
//         console.log(`${conesWanted} sold...`)
//         allCones = allCones - conesWanted;
//     }
//         console.log(`${allCones} left.`)
// } while (allCones > 0);
// console.log(`Yay! I sold them all!`);

//Loop control variable
//initialize it to a starting value
// let count = 100;
//check the value of the loop control variable in a conditional test
// while (count >= 0){
//     console.log(count);
//change the value of the loop control variable
//     count = count -1
// }
//
// for(let count = 100; count >= 0; count = count -1){
//     console.log(count);
// }
//
// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }
//
// let i = 0;
// while (i < 100){
//     console.log(i);
//     i++;
// }
//
// for (i = 0; i < 100; i++){
//     console.log(i);
// }
// console.log("Outside the loop: " + i);

// let i = 1;
// while (i < 11){
//     console.log(i);
//     i++;
// }
// let number = 1;//checking
// while (number < 11) { //condition
//     number = number * 2;//changing the value
//     //number *= 2; shorthand
//     console.log(number);
//     //If console.log(number) is above the changing value it'll stop before 200
// }

//2

// const number = 7;
//
// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} x ${i} = ${result}`)
// }
// function showMultiplicationTable(){
//     return number;
// }
// console.log(showMultiplicationTable());

//3
// for (let i = 1; i <= 10; i++) {
//     let i = Math.ceil(Math.random() * 181) + 20;
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }

// 4 Found answer online
// let n = 9;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         string += i;
//     }
//     string += "\n";
// }
// console.log(string);

//Javier's examples pyramid
//String.prototype.repeat()
// for (i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }

// for(let i = 1; i <= 9; i++) {
//     let outputString = "";
//     for (let count = 0; count < i; count++) {
//         outputString = outputString + i;
//     }
//     console.log(outputString);
// }


//5
// for(let i = 100; i >= 5; i-=5) {
//     console.log(i);
// }
