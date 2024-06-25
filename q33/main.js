"use strict";
// creating a Array 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Using for-loop
for (let oneNumer of numbers) {
    let ordinalEnding;
    if (oneNumer === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumer === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumer === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumer}${ordinalEnding}`);
}
