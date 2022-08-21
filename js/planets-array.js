(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log(planets.unshift("Sun"));//'Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    console.log(planets.push("Pluto"));//'Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    console.log(planets.shift("Sun"));//'Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    console.log(planets.pop("Pluto"));//'Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    console.log(planets.indexOf("Earth"));//'Finding and logging the index of "Earth" in the planets array.');

    console.log(planets.reverse());//"Reversing the order of the planets array.");
    console.log(planets);

    console.log(planets.sort());//"Sorting the planets array.");
    console.log(planets);
})();
