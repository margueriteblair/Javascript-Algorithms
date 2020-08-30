let string1 = "Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz";
let lowerCaseStr = string1.toLowerCase();
let splitString = lowerCaseStr.split('').sort().filter((item) => item.match(/\w/))
//console.log(splitString);
letterArray = [];
splitString = splitString.join("");
for (let i = 0; i < splitString.length; i++){
    // if (  splitString.includes(splitString[i]) &&  splitString[i] == splitString[i]) {
    //  let subArrString = []   
    //  subArrString.push([splitString[i]])
    if (splitString[i] !== splitString[i+1]) {
        letterArray.push(splitString.substring(splitString.indexOf(splitString[i+1]), i));
    }
       // console.log(subArrString)
    //}
//gives me each individual letter individually
//    console.log(splitString[i])
}
console.log(letterArray)

// gives me a log of all word alphabetically
//console.log(splitString);


