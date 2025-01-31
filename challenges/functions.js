// ==== Callbacks ====  


/* Step 1: Create a higher-order function that accepts a callback
* Create a higher-order function named consume that can take 3 parameters.
* The first two parameters can accept any argument
* The last parameter accepts a callback 
* In the body of the function return the callback with the two parameters that you created
*/


function consume(param1, param2, callback){
  console.log("My favorite song is " + param1 + " from " + param2 );
  return callback(param1, param2);
}

var music = function(track){
  console.log('Devil ' + " also from " +(track) + " is another of my favorites");
};
consume("Monsters", "Shinedown", music);

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(x, y){
  return x + y;
}

function multiply(x,y){
  return x * y;
}

function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}


// /* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Closures allow the `nestedfunction()` to access the variable within the `myFunction()`

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

