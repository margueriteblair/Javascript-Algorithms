function smallestCommons(arr) {
    arr = arr.sort(function(a, b) {
      return a-b;
    })
    for (let i = arr[0]+1; i < arr[1]; i++) {
      arr.push(i)
    }
    arr = arr.sort(function(a, b) {
      return a-b;
    })
  
    let lcm = arr[0]
    for (let i = 0; i < arr.length; i++) {
      let GCM = gcd(lcm, arr[i])
      lcm = lcm*arr[i]/GCM
    }
    return lcm;
      function gcd(x, y) {
      if (y === 0) return x;
      else return gcd(y, x % y);
    }
  }
  
  
  
  smallestCommons([1,5]);
  smallestCommons([23, 18])
  smallestCommons([5, 1])
  