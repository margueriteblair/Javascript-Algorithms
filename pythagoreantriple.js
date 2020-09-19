function specialPythagoreanTriplet(n) {
    for (let a = 3; a < n; a++) {
      for (let b = 4; b < n; b++) {
        let c = n - a - b
        if (a+b+c===n && (Math.pow(a, 2)+Math.pow(b, 2) === Math.pow(c, 2))) {
          return a*b*c
        }
      }
    }
   }
   
   specialPythagoreanTriplet(24);