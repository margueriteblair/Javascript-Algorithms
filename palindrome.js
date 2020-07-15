function palindrome(str) {
    str = str.toLowerCase().replace(/\s|\_|\.|\,|\:|\-|\(|\)|\//g, "");
    console.log(str);
    if (str.length % 2 === 1) {
      let firstHalfLength = Math.floor(str.length/2);
      let firstHalf = str.slice(0, firstHalfLength)
      let secondHalf = str.slice(str.length-firstHalfLength).split("").reverse().join("");
      if (firstHalf === secondHalf) {
        return true;
      } else return false;
    } else if (str.length % 2 === 0) {
      let firstHalfLength = str.length/2;
      let firstHalf = str.slice(0, firstHalfLength);
      let secondHalf = str.slice(str.length-firstHalfLength).split("").reverse().join("");
          if (firstHalf === secondHalf) {
        return true;
      } else return false;
    } 
  }
  palindrome("0_0 (: /-\ :) 0-0")
  