function myReplace(str, before, after) {
    let regex = /[A-Z]/
    if (arguments[1].match(regex)) {
      arguments[2] = arguments[2][0].toUpperCase() + arguments[2].slice(1);
      str = str.replace(arguments[1], arguments[2]);
      console.log(str)
    } else 
    str = str.replace(arguments[1], arguments[2]);
    
    return str;
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

  function myReplace2(str, before, after) {
    if (before[0].match(/[A-Z]/)) {
      after = after[0].toUpperCase() + after.slice(1);
        str = str.replace(before, after);
        console.log(str)
        return str;
    } else {
        str = str.replace(before, after);
        console.log(str)
        return str;
  
    }
  }
  
  myReplace2("He is Sleeping on the couch", "Sleeping", "sitting")

  function myReplace3(str, before, after) {
    let regex = /^[A-Z]/
    let splitWord = after.split('')
    let match = regex.exec(before)
    let word = ''
    if(Boolean(match) == true) {
      let letter = splitWord.shift().toUpperCase()
      splitWord.unshift(letter);
      splitWord = splitWord.join('')
      word = str.replace(before, splitWord)
    } else {
   word = str.replace(before, after)
  }
  return word;
  }
  console.log(myReplace3("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));