"use strict";
// Guesting a Guest List Array
let guestList = ["Amna", "Sana", "meera", 'noor'];
// Making Variable for those guest who cant come
let dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "cannot come");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "amir");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner. ");
// Adding a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index of array
guestList.push("Zain");
//  Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
