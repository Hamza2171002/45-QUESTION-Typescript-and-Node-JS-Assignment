// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//First version (run the if block)
console.log("\n 1st versiom of code:");
var alien_colour = 'Yellow';
if (alien_colour == 'Yellow') {
    console.log("Congratulation! You just earned 5 point for shooting the alien.");
}
else {
    console.log("Congratulation! You just earned 10 point for shooting the alien.");
}
//second version (run the else block)
console.log("\n 2nd version of the code:");
alien_colour = 'Purple';
if (alien_colour == 'Yellow') {
    console.log("Congratulation! You just earned 5 point for shooting the alien.");
}
else {
    console.log("Congratulation! You just earned 10 point for shooting the alien.");
}
