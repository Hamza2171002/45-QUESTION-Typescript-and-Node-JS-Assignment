// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magician_names: string[] = ["Herry Poter", "Teller","David Blaine","Criss Angel"]

function show_magicians(magicians: string[]): void
{
    for(const i of magicians){
        console.log(i)
    }
}
function make_great(magicians: string[]): string[]{
    const great_magicians: string[] = magicians.map(i=>`The great ${i}`)
    return great_magicians
}

//Modify the Array to add "The Great" Magician's names.
const great_magicians_names: string[] = make_great(magician_names)

//call the function to show the Magician's names.

console.log("\nGreat Magicians:")
show_magicians(great_magicians_names)
