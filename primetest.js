function sumPrimes(num) {
    let sieve = [], i, j, primes = [];
    for (i = 2; i <= num; i++) {
        if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= num; j += i) {
            sieve[j] = true;
            }
        }
    }
    let sum = primes.reduce(function(a, b) {
      return a+b;
    })
    console.log(sum);
    return sum;
}

sumPrimes(10);
