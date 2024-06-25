"use strict";
//Creating a Array
let userName = ["Uzma", "Ahad", "Amna", "Admin", "Noor"];
// Using ForEach Loop on Array
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(` Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, Thank you for logging in again.`);
    }
});
