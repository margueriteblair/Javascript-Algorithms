function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
      newArray.splice(n, 0, arr1[i])
      n++
    }
    console.log(newArray);
  
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice([1, 2, 3], [4, 5], 1)
  frankenSplice([1, 2], ["a", "b"], 1)

  function frankenSplice2(arr1, arr2, n) {
      arr2.splice(n, 0, arr1.slice());
      console.log(arr2);
  }
  frankenSplice2([1, 2, 3], [4, 5, 6], 1);

  //this one returns it with subarrays in it