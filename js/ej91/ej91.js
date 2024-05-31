const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Michael Jackson",
      "title": "thriller",
      "release_year": 1980,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": false
    }
  ];

valueEj91a.append("Array de objetos:   "+JSON.stringify(myMusic));
valueEj91b.append(JSON.stringify(myMusic[0]))
valueEj91c.append(JSON.stringify(myMusic[1]))
valueEj91d.append(JSON.stringify(myMusic[1]["artist"]))