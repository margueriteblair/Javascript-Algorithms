function largestPrimeFactor(number) {
    // Good luck!
    let primeFactors = []
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        primeFactors.push(i)
      }
    }
    primeFactors = primeFactors.filter(num => isPrime(num))
    return (primeFactors.pop())
  
  }
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
  
    return num !== 1 && num !== 0
  }
  
  
  largestPrimeFactor(600851475143)
  