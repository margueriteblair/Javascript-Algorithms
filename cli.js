const readLine = require('readline')
const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(interface.question)

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


interface.question("What's your name?", (name) => {
    console.log(`Hello there, ${name}`);

    interface.question("What's your age?", (number) => {
        if (age >= 21) {
            console.log(`wahooo ${name}, drinks on us!`)
        } else {
            console.log(`Sorry, buddy. Here's a soda.`)
        }
    })
    
})
//translateSentence("hello my name is abe")

function pigLatinConcerted() {
    interface.question("Enter a word or phrase:", (str) => {
        console.log(`Your pig-latin phrase: ${translateSentence(str)}`);
        
        interface.question("Would you like to try again?\n(y/n)", (answer) => {
            answer = answer.trim().substring(0, 1).toLowerCase();

            if (answer === "y") {
                pigLatinConcerted();
            } else {
                interface.close();
            }
        })
    })
}
