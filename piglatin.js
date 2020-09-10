function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

  function translatePigLatin2() {
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

translatePigLatin2("consonant");

function translatePigLatin(str) {
  if (!str[0].match(/[aeiou]/)) {
    str = str.substring(str.indexOf(str.match(/[aeiuo]/))) + str.substring(0, str.indexOf(str.match(/[aeiuo]/))) + "ay"
    console.log(str)
    return str;
  } else if (str[0].match(/[aeiou]/)) {
    str = str + "way"
    return str;
  }
}

translatePigLatin("glove")