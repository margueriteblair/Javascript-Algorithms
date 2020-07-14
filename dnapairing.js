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