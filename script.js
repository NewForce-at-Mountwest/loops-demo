// What are loops? Why do we use them?


// What if we wanted to print all of these taco toppings out?

// Loops are really good for doing repetitive tasks quickly
// Print "FREE TACOS" 20 times

var counter = 1;

while(counter <= 5){
    console.log("FREE TACOS!!!", counter);
    // counter = counter + 1;
    counter++;
}



// Loop through the array of taco toppings and log each one to the console
var tacoToppings = ["beef", "cheese", "lettuce", "chillis", "sour cream", "guacamole", "extra cheese"]

// console.log(tacoToppings[0])
// console.log(tacoToppings[1])

// var i = 0;

// while(i< tacoToppings.length){
//     console.log(tacoToppings[i], i);
//     i++;
// }

// Print a unordered list of taco toppings and print it to the DOM
var HTMLString = "";
var listContainer = document.querySelector("#list-container");

for(var i = 0; i< tacoToppings.length; i++){
    if(tacoToppings[i] === "extra cheese"){
        tacoToppings[i] = tacoToppings[i].toLowerCase();
    }

    HTMLString = HTMLString + `<li>${tacoToppings[i]}</li>`;
    console.log("Here's the Html string inside the loop", HTMLString);
}

console.log("AAAnd here it is outside the loop", HTMLString);
listContainer.innerHTML = HTMLString;

var arrayOfPeople = ["Tommy", "Sydney", "Nick", "Josh"];

for(var i = 0; i<arrayOfPeople.length; i++){
    // high five arrayOfPeople[i]
}

// Add a conditional to see if the current taco topping is extra cheese. If so, convert it to uppercase (EXTRA CHEESE)

