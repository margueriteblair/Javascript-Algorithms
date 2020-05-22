// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let newStr = str.toLowerCase().split(" ")
    console.log(newStr);
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1)
    }
      console.log(newStr.join(" "))
  }
titleCase("I'm a little tea pot")  
titleCase("sHoRt AnD sToUt")

function titleCase2(str) {
    let newStr = str.toLowerCase().split(" ")
    console.log(newStr);
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1)
    }
    console.log(newStr.toString());
}

// titleCase2("sHoRt AnD sToUt"); //this version of the code returns "Short,And,Stout"

function titleCase3(str) {
    let newStr = str.toLowerCase().split(" ");
    for (i = 0; i < newStr.length; i++) {
        finalStr = (str.replace(newStr[i][0],newStr[i][0].toUpperCase()));
        console.log(finalStr);
        } 
    }
//  titleCase3("I'm a little tea pot"); //this one does each one at a time 

function titleCase4(str) {
    str=str.toLowerCase();
    let newWord = "";

    for (let i = 0; i < str.length; i++) {
        newWord = newWord + str[i]
        if (str[i] === " ") {
            newWord = newWord + str[i+1].toUpperCase()
            i++
        }
    }
    console.log(newWord);
}

// titleCase4("I'm a little tea pot") 