// Making a Function
function make_shirt (size: string = "large", printmessage: string = "I Love TypeScript"){
    console.log(` Creating a ${size} shirt with the ${printmessage} prints on shirt`)

}

// Calling a function with by-default values
make_shirt()

// Calling a function now with Medium size and default messege
make_shirt("Medium")

// Calling a function now with small size and also Different Print Message
make_shirt("small", "I Love JavaScript");
