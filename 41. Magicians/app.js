// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Array of Magician's names.
var magician_names = ["Herry Poter", "Teller", "David Blain", "Cris Angle"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
// Call the function to show the Magician's names.
show_magicians(magician_names);
