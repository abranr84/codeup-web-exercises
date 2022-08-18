//concat
let firstName = "Abran";
let lastName = "Rodriguez";
let car1 = "Dodge Caravan GT";
let car2 = "Chevy Avalanche"
let car3 = "Ford Edge SEL";
let car4 = "Hyundai Sonata"
let streetAddress = "509 Denise Dr";
let city = "New Braunfels";
let state = "Texas";
let school = "Codeup";

function intro(){
    return `Hi my name is ${firstName} ${lastName}. I live at \n ${streetAddress} ${city}, ${state}. I just started going to ${school} for web development. I had two vehicles but on the second day I got into an accident. I was driving my ${car2} on the way home and someone lane changed to avoid an accident and collided into me. My ${car2} was totaled. I was fine after a day or two and now driving a rental, ${car4}. I don't like it. I'm hoping to buy a ${car3}.`
}

console.log(intro());