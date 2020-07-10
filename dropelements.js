function dropElements(arr, func) {
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
        console.log(arr)
      }
    }
    return arr;
    
  }
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})

  function dropElements2(arr, func) {
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[0])) {
      } else if (func(arr[0]) !== true){
        console.log(arr, "before splice")
        console.log("_______")
        arr.splice(0, 1);
        console.log(arr)
      } 
    }
    return arr;
    
  }
  dropElements2([1, 2, 3, 4], function(n) {return n > 5;})