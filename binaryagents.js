function binaryAgent(str) {
    let binaryString = '';
    //str.split turns itinto an array where each index is its own binary entry corresponding to ascii
    str.split(' ').map(function(bin) {
    binaryString += String.fromCharCode(parseInt(bin, 2));
    });
    console.log(binaryString);
    return binaryString
  }
  
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
  
  function binaryAgent(str) {
    let binaryStr = "";
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
    binaryStr += (String.fromCharCode(parseInt(str[i], 2)))
    }
    console.log(binaryStr)
    return binaryStr;
  }
  //binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 011


  function binaryAgent3(str) {
    let binaryStr = '';
    str = str.split(" ")
    str.forEach((i) => binaryStr += String.fromCharCode(parseInt(i.toString(2), 2)))
    console.log(binaryStr)
    return binaryStr;
  }
  
  binaryAgent3("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");