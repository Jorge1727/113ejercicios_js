//Conseguir
//Call the processArg function with an argument of 7 and assign its return value to the variable processed55.

//Resolución
// Setup
let processed55 = 0;
valueEj55a.append("Antes: " + processed55);

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed55 = processArg(7); 

valueEj55b.append("Después: " + processed55);
