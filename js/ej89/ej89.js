// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const object = {
      "alpha":"Adams",
        
      "bravo": "Boston",
      "charlie": "Chicago",
        
      "delta": "Denver",
        
      "echo": "Easy",
  
      "foxtrot":"Frank"
    };
  
    valueEj89a.append(JSON.stringify(object));
    
    // Only change code above this line
    result= object[val];
    return result;
}

  //si ponemos charlie
  valueEj89b.append(phoneticLookup("charlie"));