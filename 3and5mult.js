function multiplesOf3and5(number) {
    let arr = [];
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i)
      }
    }
    let sum = (arr.reduce((a, b) => {
      return a + b
    }))
    // Good luck!
    return sum;
  }
  
  multiplesOf3and5(1000);