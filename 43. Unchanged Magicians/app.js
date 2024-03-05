// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician_names = ["Herry Poter", "Teller", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
function make_great(magicians) {
    var great_magicians = magicians.map(function (i) { return "The Great ".concat(i); });
    return great_magicians;
}
//modify the array to add "the great" to each magician's names.
var great_magicians_names = make_great(magician_names);
//call the function to show the orignal magician's name.
console.log("Orignal Magicians:");
show_magicians(magician_names);
//call the function to show "The Great" Magician's names.
console.log("\nGrat Magicians:");
show_magicians(great_magicians_names);
