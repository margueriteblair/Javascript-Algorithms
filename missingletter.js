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

  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        console.log(String.fromCharCode(str.charCodeAt(i - 1) + 1));
        //return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      } 
    }
  }
  
  fearNotLetter("abce");
  fearNotLetter("abcdefghjklmno")