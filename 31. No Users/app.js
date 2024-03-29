// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//non empty array.
var userNames = ['admin', 'John', 'Myles', 'Stefan', 'Sidney'];
//functional case.
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see astatus report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again!"));
        }
    }
}
console.log('For non-empty uernames:\n');
greetUsers(userNames);
//to make an array empty we just assigne an ampty array to userNames.
userNames = [];
greetUsers(userNames);
