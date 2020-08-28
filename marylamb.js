let string = `Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz!`;
let lowerCase = string.toLowerCase();
let lettersArray = [];
const chunkedArray = [];

for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i].match(/\w/)) {
        lettersArray.push(lowerCase[i])
    }
}

lettersArray.sort();
lettersArray = lettersArray.join("");

for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] !== lettersArray[i-1]) {
        chunkedArray.push(lettersArray.substring(lettersArray.indexOf(lettersArray[i-1]), i))
    }
}
for (let i = 0; i < chunkedArray.length; i++) {
    console.log(`${chunkedArray[i][0]} count: ${chunkedArray[i].length} `);
}
