function nthPrime(n) {
    let primes = []
    let i = 0
    while (primes.length < n) {
      if (isPrime(i)) {
        primes.push(i)
      }
      i++
    }
    return primes[primes.length - 1]
  }
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    if (num !== 0 && num !== 1) return num
  }
  
  
  console.log(nthPrime(10001))
  