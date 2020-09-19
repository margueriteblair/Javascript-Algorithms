function smallestMult(n) {
    let max = n
    let lcm = max
    for (let i = max-1; i > 0; i--) {
      if (lcm % i !== 0) {
        lcm += max
        i = max
      }
    }
    console.log(lcm)
    return lcm;
  }
  
  smallestMult(20);