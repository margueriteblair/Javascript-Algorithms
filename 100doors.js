function getFinalOpenedDoors(numDoors) {
    let arr = []
    for (let i = 1; i <= numDoors; i++) {
      arr.push({door: i, toggle: false})
    }
    for (let i = 1; i < numDoors; i++) {
      for (let j = i; j < numDoors; j+=i) {
        arr[j].toggle = !arr[j].toggle
      }
    }
    arr = arr.filter(item => item.toggle === true).map(door => door.door)
  
    console.log(arr)
    return arr
    // Good luck!
  }
  
  getFinalOpenedDoors(100)


  
  function getFinalOpenedDoors2 (numDoors) {
    let doors = [];
    for(let d = 1; d <= numDoors; d ++){
      let factors = CalculateFactors(d);
      if(factors.length % 2 !== 0){//Even factors, door close. Odd factor, door open.
        doors.push(d);//the final result is only an array with the doors open after 100 times making the exercise
      }
    }
    return doors;
  }
  
  function CalculateFactors(value){
      let factors = [];
      for(let i = value; i >= 1; i --){
          if(value % i === 0){
              factors.push(i);
          }
      }
      return factors;
  }