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

  function smallestCommons2(arr) {
    let small = Math.min(...arr);
    let big = Math.max(...arr);
    let lcm = big; //LCM starts off as being the largest
    for (let i = big-1; i >= small; i--) { //you start your for loop off at lcm-1
      if (lcm % i !== 0) {
        lcm += big; //5+5
        i = big; //i stays as a constant in this case
      }
    }
    console.log2(lcm)
    return lcm;
  }
  
  
  
  
  smallestCommons2([1,5]);
  
  
  
  

  