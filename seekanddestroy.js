function destroyer(arr) {
    let args = Array.from(arguments)
    args = args.splice(1) //args is an array with the two+ arguments
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    arr = arr.filter(Boolean);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  function destroyer2(arr) {
    let destroy = (Object.values(arguments).splice(1))
    arr=arr.filter(i => !destroy.includes(i))

    return arr;
  }
  destroyer2([1, 2, 3, 1, 2, 3], 2, 3);
   