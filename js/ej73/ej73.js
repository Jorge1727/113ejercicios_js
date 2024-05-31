//Conseguir
//Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

//Resolución
function testSize(num) {
    // Only change code below this line
    if(num < 5){
        return "Tiny"
    }
    else if (num < 10){
        return "Small"
    }
    else if (num < 15){
        return "Medium"
    }
    else if (num < 20){
        return "Large"
    }
    else{
        return "Huge";
    }
    // Only change code above this line
  }
  
  valueEj73.append(testSize(12));