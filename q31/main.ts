let userName = ["Uzma", "Ahad", "Amna", "Admin", "Noor"];

userName = []

if (userName.length === 0){
    console.log ("Your Array is Empty We need to find some users!")

} else{

// Using ForEach Loop on Array

       userName.forEach(oneUser =>{
         if(oneUser === "Admin"){
        console.log(` Hello ${oneUser}, would you like to see a status report?`)
      } else{
                console.log(`Hello ${oneUser}, Thank you for logging in again.`)
            }

}

)}