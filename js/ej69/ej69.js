//Conseguir
//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

//Resolución
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val >20) {
      return "Outside"
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  valueEj69.append(testLogicalOr(15));