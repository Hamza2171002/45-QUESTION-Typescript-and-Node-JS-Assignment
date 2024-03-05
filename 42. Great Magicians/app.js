// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_names = ["Herry Poter", "Teller", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
function make_great(magicians) {
    var great_magicians = magicians.map(function (i) { return "The great ".concat(i); });
    return great_magicians;
}
//Modify the Array to add "The Great" Magician's names.
var great_magicians_names = make_great(magician_names);
//call the function to show the Magician's names.
console.log("\nGreat Magicians:");
show_magicians(great_magicians_names);
