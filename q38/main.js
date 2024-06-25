"use strict";
// Describe  a function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling the function
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Berlin", "Garmany");
