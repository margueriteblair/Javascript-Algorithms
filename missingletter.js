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