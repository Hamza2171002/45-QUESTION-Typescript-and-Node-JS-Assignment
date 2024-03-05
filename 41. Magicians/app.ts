// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//Array of Magician's names.

const magician_names: string[] = ["Herry Poter","Teller","David Blain", "Cris Angle"]

function show_magicians(magicians: string[]): void
{
    for (const i of magicians){
        console.log(i)
    }
}

// Call the function to show the Magician's names.

show_magicians(magician_names)