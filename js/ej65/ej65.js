//Conseguir
//Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

//Resolución
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  valueEj65.append(testGreaterOrEqual(10));