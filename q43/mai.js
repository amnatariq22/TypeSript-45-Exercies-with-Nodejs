"use strict";
// Difine the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians greats through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let magician_names = ["Harry poter", "Mark wilson", "Ricky jay"];
// Making a copy of Orignal array through .slice() function
let copy_magician_names = magician_names.slice();
// Modify the copied array to include " The Great" with thier names 
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays Original amd copied 
// Original
console.log("\nOrignal Array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);