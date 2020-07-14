function findElement(arr, func) {
    let num = arr.find(elem => func(elem) === true)
    console.log(num)
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);