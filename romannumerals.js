function convertToRoman(num) {
    let decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var romanized = "";

  for (var i = roman.length-1; i >= 0; i--) {
    while (decimals[i] <= num) {
      romanized += roman[i];
      num -= decimals[i];
    }
  }
  console.log(romanized);
  return romanized;
};
  
  convertToRoman(4);