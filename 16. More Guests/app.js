var list = ['saad', 'ubaid', 'usman'];
// for(let i=0; i<list.length; i++){
//     console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n')
// }
var absent_guest = 'saad';
var new_guest = 'ali';
list[0] = new_guest;
for (var i = 0; i < list.length; i++) {
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n');
}
console.log("".concat(absent_guest, " is not coming to the party."));
console.log('Good News! we find big table so we are inviting 3 more guests.');
list.unshift('usama');
list.splice(2, 0, 'Tahir');
list.push('zubair');
for (var i = 0; i < list.length; i++) {
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n');
}
