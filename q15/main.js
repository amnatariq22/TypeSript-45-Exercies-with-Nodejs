"use strict";
let guestList = ["Amna", "Sana", "meera", 'noor'];
let dontCome = guestList[0];
console.log(dontCome, "cannot come");
guestList.splice(0, 1, "amir");
guestList.forEach(guest => console.log(`Salam ${guest} Would you like to Dinner with me?`));
