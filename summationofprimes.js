function primeSummation(n) {
    let primes = []
    for (let i = 1; i < n; i++) {
      if (isPrime(i)) {
        primes.push(i)
      }
    }
    let sum = primes.reduce((a, b) => {
      return a+b
    })
    console.log(sum)
    return sum
  }
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    if (num !== 0 && num!== 1) return num
  }
  
  primeSummation(17);
  