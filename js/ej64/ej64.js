//Conseguir
//Add the greater than operator to the indicated lines so that the return statements make sense.

//Resolución
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  valueEj64.append(testGreaterThan(10));