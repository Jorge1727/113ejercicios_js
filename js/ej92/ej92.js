const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  valueEj92a.append(JSON.stringify(myStorage));
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

  valueEj92b.append(gloveBoxContents);