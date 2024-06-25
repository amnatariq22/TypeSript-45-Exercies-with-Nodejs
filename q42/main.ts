// Difine the function to show magicians names

function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

// function to make magicians greats through .map() it will modify array 

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}

// Define an array of magicians names
let magicians_names = ["Harry poter", "Mark wilson", "Ricky jay"];

// Call make_great funcation to modify magiacian names
let great_magicians = make_great(magicians_names);

// Call show_magicain that show modified list of magicians 
show_magician(great_magicians);