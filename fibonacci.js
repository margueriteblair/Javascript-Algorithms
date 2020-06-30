function sumFibs(num) {
    let fibonacci = [1, 1];
    // [1, 1, 2, 3, 5, 8]
    let fibonacciOdd = [1];
    let i = 1;
    while (fibonacci[i] <= num) {
      fibonacci.push(fibonacci[i]+fibonacci[i-1])
      if (fibonacci[i]%2 === 1) {
        fibonacciOdd.push(fibonacci[i]);
      }
      i++;
    }
    let sum = fibonacciOdd.reduce(function(a, b) {
      return a + b;
    })
  
    return sum;
    
  }
  
  sumFibs(75025);