function sumSquareDifference(n) {
    let squareSum = 0;
    let sumOfSquares = 0;
    for (let i = 0; i <= n; i++) {
      squareSum += i
    }
    squareSum = squareSum*squareSum //this is the largest of the two
    for (let i = 0; i <=n; i++) {
      sumOfSquares += Math.pow(i, 2)
    }
    console.log(sumOfSquares)
    return squareSum - sumOfSquares;
  }
  
  sumSquareDifference(10);
  