function pairElement(str) {
    let dnaPairs = [];
    let chunkedDNAPairs = [];
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'G') {
        dnaPairs.push('G', 'C')
      } else if (str[i] === 'C') {
        dnaPairs.push('C', 'G')
      } else if (str[i] === 'A') {
        dnaPairs.push('A', 'T')
      } else if (str[i] === 'T') {
        dnaPairs.push('T', 'A')
      }
    }
    while (index < dnaPairs.length) {
      chunkedDNAPairs.push(dnaPairs.slice(index, 2+index));
      index+=2;
    }
    console.log(chunkedDNAPairs);
    return chunkedDNAPairs
  }
  
  pairElement("GCG");
  pairElement("ATCGA")

  function pairElement2(str) {
    let DNAPairs = []
    for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
      DNAPairs.push(["A", "T"])
      break;
      case "T":
      DNAPairs.push(["T", "A"])
      break;
      case "G":
      DNAPairs.push(["G", "C"])
      break;
      case "C":
      DNAPairs.push(["C", "G"])
      break;
    }
  
    }
    console.log(DNAPairs)
    return DNAPairs
  }
  
  pairElement2("GCG");

  function pairElement3(str) {
    let pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    }
  
    let pairsArr = str.split("").map(i => [i, pairs[i]])
    console.log(pairsArr)
    return pairsArr
  }
  
  pairElement3("GCG");
  
  