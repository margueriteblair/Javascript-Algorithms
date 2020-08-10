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




function sumPrimes2(num) {
  var res = 0;

  function getPrimes2(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; i++) {
      if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes2(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes2(10);

function sumPrimes3(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
//test here
sumPrimes3(10);
