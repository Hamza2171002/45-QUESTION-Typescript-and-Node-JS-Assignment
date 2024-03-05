// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magician_names: string[] = ["Herry Poter", "Teller", "David Blaine", "Criss Angel"]

function show_magicians(magicians: string[]):void
{
    for(const i of magicians){
        console.log(i)
    }
}
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = magicians.map(i => `The Great ${i}`)
    return great_magicians
}
//modify the array to add "the great" to each magician's names.

const great_magicians_names: string[] = make_great(magician_names)



//call the function to show the orignal magician's name.

console.log("Orignal Magicians:")
show_magicians(magician_names)

//call the function to show "The Great" Magician's names.

console.log("\nGrat Magicians:")
show_magicians(great_magicians_names)