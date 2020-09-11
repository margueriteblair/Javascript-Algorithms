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