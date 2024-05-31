//Conseguir
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.

//Resolución
function nextInLine(arr, item) {
    // Only change code below this line
      arr.push(item);
      let resultado=arr[0];
      arr.shift();
  
      return resultado;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  
  // Display code
  valueEj56a.append("Before: " + JSON.stringify(testArr));
  valueEj56b.append("Item eliminado: " + nextInLine(testArr, 6));
  valueEj56c.append("After: " + JSON.stringify(testArr));