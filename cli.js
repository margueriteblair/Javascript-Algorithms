function translatePigLatin(str) {
    let vowels = /[a,e,i,o,u]/gi
    let varName = vowels.test(str[0])
    let varNombre = vowels.test(str)
    if (varName === true) {
        return str + 'way';
    } else if (varNombre != true) {
        return str + 'ay';
    }
    else {
        return str.substring(1, str.length) + str.substring(0, 1) + 'ay';
    } 
  }

function translateSentence(str) {
    console.log(str)
    const allWords = str.split(" ")
    for (let i = 0; i < allWords.length; i++) {
        const word = allWords[i]
        console.log('word', i, word)
        console.log('translated', translatePigLatin(word))
    }
}

translateSentence("hello my name is abe")