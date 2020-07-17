function rot13(str) {
    str = str.split("");
    console.log(str)
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   //  console.log(alphabet[18-13], alphabet[4+13], alphabet[17-13], alphabet[17-13]);
   //  console.log(str[0].replace(str[0], alphabet[18-13]))
    for (let i = 0; i < str.length; i++){
      if (alphabet.indexOf(str[i]) + 13 > 25 && alphabet.indexOf(str[i]) !== -1) {
       str[i] = alphabet[alphabet.indexOf(str[i]) - 13]
      } else if (alphabet.indexOf(str[i]) + 13 <= 25 && alphabet.indexOf(str[i]) !== -1)
      str[i] = alphabet[alphabet.indexOf(str[i]) + 13] 
    }
    str = str.join("")
     console.log(str)
     return str;
   }
   
   
   rot13("SERR PBQR PNZC");
   