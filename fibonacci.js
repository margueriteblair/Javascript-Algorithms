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

  function sumFibs2(num) {
    let fibonacci = [1, 1]
    let i = 1;
    while (fibonacci[i] <= num) {
      fibonacci.push(fibonacci[i] + fibonacci[i-1])
      i++
    }
   if (fibonacci[fibonacci.length-1] > num) {
     fibonacci.pop()
   }
    fibonacci = fibonacci.filter(i => i%2===1)
    fibonacci = fibonacci.reduce((a,b) => {
      return a+b;
    })
    return fibonacci
  }
  
  sumFibs2(1000)
  