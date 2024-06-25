// Define a function with a rest parameter that accept items arugments representing our sandwich

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n ");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Your Sandwich");
}

// Call the function 3 items with 3 different number of arugments 
makeSandwich("Bread","Chicken", "Cheese", "Eggs", "Ketchup"),

makeSandwich("Bread", "cheese");

makeSandwich("Bread", "cheese","Chicken ","Tomato", "Mayo", "Ketchup", "Lettuce");