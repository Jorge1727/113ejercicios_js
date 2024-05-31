const myDog90 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp)? obj[checkProp] : "Not Found";
    // Only change code above this line
  }

valueEj90a.append(JSON.stringify(myDog90));
valueEj90b.append(checkObj(myDog90, "name"));
valueEj90c.append(checkObj(myDog90, "raza"));