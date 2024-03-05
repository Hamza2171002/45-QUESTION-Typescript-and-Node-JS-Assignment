// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//First vrsion: Where alien colour is Green.
console.log("1st version where alien colour is Green:");
var alien_colour = 'Green';
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("Unknow alien_colour.");
}
//Second version: Where alien colour is Yellow.
console.log("2nd version where alien colour is Yellow:");
alien_colour = 'Yellow';
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("Unknow alien_colour.");
}
//third version:where  alien colour is red.
console.log("3rd version where alien colour is Red:");
alien_colour = 'Red';
if (alien_colour === 'Green') {
    console.log("Congratulion! You just earned 5 points.");
}
else if (alien_colour === 'Yellow') {
    console.log("Congratulion! You just earned 10 points.");
}
else if (alien_colour === 'Red') {
    console.log("Congratulion! You just earned 15 points.");
}
else {
    console.log("Unknow alien_colour.");
}
