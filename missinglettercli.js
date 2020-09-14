const readLine = require('readline');
const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question("What is your phrase to compare?", (answer) => {
    console.log(`Your missing letter is: ${missingLetter(answer)}`)
})

function missingLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) === 2) {
          return String.fromCharCode(str.charCodeAt(i) - 1);
        } 
      }  
}

