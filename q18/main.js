"use strict";
//Making a Array of Countries and Print its Orignal Order
let countriesToVivit = ["China", "Dubai", "Brazil", "America"];
console.log("orignal Order:", countriesToVivit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVivit].sort());
// Show the Array in Still in its Orignal Order 
console.log("Still in Orignal Order:", countriesToVivit);
// Print the Array in Reversed Order without Modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVivit].reverse());
// Show the Array in Still in its Orignal Order 
console.log("Still in Orignal Order:", countriesToVivit);
// We have Changed the Orignal Array Order now
console.log("Orignal Array Reversed:", countriesToVivit.reverse());
// Print the Array to Show that its's Back to its Orignal order
console.log("Back to Orignal Order:", countriesToVivit.reverse());
// Print the array to Show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVivit.sort());
// We have Changed Again the Orignal Array Order Now
console.log("Orignal Array Reversed Again:", countriesToVivit.reverse());
