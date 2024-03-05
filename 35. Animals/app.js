// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//list of animal with common characteristics.
var animals = ['Dog', 'Cat', 'Cow'];
//Printing the name of each Animal using a for of loop.
console.log("List of Animals.");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var i = animals_1[_i];
    console.log(i);
}
//Print a message about each Animal.
console.log("\nStatements about each Animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var i = animals_2[_a];
    if (i === 'Dog') {
        console.log("A ".concat(i, " is lovely pet."));
    }
    else if (i === 'Cat') {
        console.log("A ".concat(i, " would be a good companion at home."));
    }
    else if (i === 'Cow') {
        console.log("A ".concat(i, " is an adorable pet"));
    }
}
//common charactristics.
console.log("\nWhat these Animals have in common:");
console.log("Any of these Animals could be a great pet!");
