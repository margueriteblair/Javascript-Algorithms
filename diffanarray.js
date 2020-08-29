function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) === false) {
        newArr.push(arr1[i])
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i]) === false) {
        newArr.push(arr2[i])
      }
    }
    console.log(newArr)
    return newArr;
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  function diffArray2(arr1, arr2) {
    //return the symmetric difference of the new array
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i])
      } 
    }
    for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i])
    } 
  }
  
    return newArr;
  }
  
  diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  function diffArray3(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    newArr = newArr.filter((i) => !arr1.includes(i) || !arr2.includes(i))
    console.log(newArr)
    return newArr;
  }
  
  diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  
