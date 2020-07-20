function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i ++) {
      let orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(arr[i].avgAlt+earthRadius, 3)/ GM)))
      delete arr[i].avgAlt
      arr[i].orbitalPeriod = orbitalPeriod;
    }
  
    console.log(arr)
    return arr;
  }
  
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  