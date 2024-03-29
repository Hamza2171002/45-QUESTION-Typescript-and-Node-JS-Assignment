// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//non empty array.
let userNames: string[]= ['admin','John','Myles','Stefan','Sidney'];

//functional case.

function greetUsers(usernames: string[]): void{
    if(usernames.length === 0){
        console.log('We need to find some users!');
        return;
    }
for(const username of usernames){
        if(username.toLowerCase() ===  'admin'){
            console.log('Hello admin, would you like to see astatus report?');
        }else{
            console.log(`Hello ${username}, thank you for logging in again!`)
        }
    }
}

console.log('For non-empty uernames:\n')
greetUsers(userNames)

//to make an array empty we just assigne an ampty array to userNames.

userNames = []
greetUsers(userNames);







