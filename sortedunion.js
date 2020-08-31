function uniteUnique(arr) {
    let argsArr = Array.from(arguments);
    let unique = [];
    for (let i = 0; i < argsArr.length; i++) {
      for (let j = 0; j < argsArr[i].length; j++) {
        if (unique.includes(argsArr[i][j]) === false) {
          unique.push(argsArr[i][j]);
        } 
      }
    }
    console.log(unique)
    return unique;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  function uniteUnique2(arr) {
    let args = Array.from(arguments);
    let myNewArr = args.flat();
    let unique = [...new Set(myNewArr)]
    console.log(unique)
    return unique;
  }
  
  uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  function uniteUnique3(arr) {
    let totalArr = ((Object.values(arguments)).flat())
   
     return([...new Set(totalArr)])
   }
   
   uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]);
   