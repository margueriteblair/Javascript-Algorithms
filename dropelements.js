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