function fiboEvenSum(n) {
    let fibonacci = [1, 2]
    for (let i = 1; fibonacci[i] < n; i++) {
      fibonacci.push(fibonacci[i] + fibonacci[i-1])
    }
    if (fibonacci[fibonacci.length-1] > n) {
      fibonacci.pop()
    }
    fibonacci = fibonacci.filter(fib => fib % 2=== 0)
    let sum = fibonacci.reduce((a, b) => {
      return a + b
    })
  
    return sum
  }
  
  fiboEvenSum(10);