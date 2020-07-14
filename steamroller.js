function steamrollArray(arr) {

    let flattened = arr.flat(Infinity)
    console.log(flattened);
    return flattened;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);