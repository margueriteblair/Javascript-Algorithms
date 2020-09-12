function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let missingLetter = "";
    let index = []
    if (alphabet.includes(str)) {
      return undefined;
    } else {
      for (let i = 0; i < str.length; i++) {
        index.push(alphabet.indexOf(str[i]))
        if (index[i]-index[i-1] === 2) {
          let alphabetIndex = index[i]
          missingLetter = alphabet[alphabetIndex-1]; 
        }
      } 
    }
  
    return missingLetter
  }
  
  //fearNotLetter("abcdefghjklmno")
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")

  function fearNotLetter2(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        console.log(String.fromCharCode(str.charCodeAt(i - 1) + 1));
        //return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      } 
    }
  }
  
  fearNotLetter2("abce");
  fearNotLetter2("abcdefghjklmno")

  function fearNotLetter3(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) === 2) {
        return String.fromCharCode(str.charCodeAt(i) - 1);
      } 
    }
  } 
  
  fearNotLetter3("abce");
  fearNotLetter3("abcdefghjklmno")

  function fearNotLetter4(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    if (alphabet.includes(str)) {
      return undefined;
    } else {
      for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i])-alphabet.indexOf(str[i-1]) === 2 && alphabet.indexOf(str[i-1]) != -1) {
    console.log(alphabet[alphabet.indexOf(str[i]) - 1])
    return (alphabet[alphabet.indexOf(str[i]) - 1])
        }
  
      }
    }
  }
  
  fearNotLetter4("bcdf")
  fearNotLetter4("abcdefghjklmno")
  fearNotLetter4("stvwx")
  