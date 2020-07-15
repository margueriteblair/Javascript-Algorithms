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