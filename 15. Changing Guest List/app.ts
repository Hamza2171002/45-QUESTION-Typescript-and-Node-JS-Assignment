let list :string[] = ['saad','ubaid','usman'];

for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n')
}

let absent_guest :string = 'saad';
let new_guest :string = 'ali';
list[0] = new_guest;

for(let i=0; i<list.length; i++){
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n')
}
console.log(`${absent_guest} is not coming to the party.`)