//Conseguir
//The compareEquality function in the editor compares two values using the equality operator.
//Modify the function so that it returns the string Equal only when the values are strictly equal.

//Resolución
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  valueEj61.append(compareEquality(10, "10"));