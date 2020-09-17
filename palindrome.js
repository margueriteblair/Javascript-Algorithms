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

  function palindrome2(str) {
    str = str.toLowerCase().split("");
    str = str.filter(char => char.match(/[a-z0-9]/)).join("")
    console.log(str)
    if (str.length % 2 === 0) {
      for (let i = 0; i < str.length/2;i++) {
        for (let j = str.length-1; j >= str.length/2; j--) {
          // console.log(str[i], str[j])
          if (str[i] === str[j]) {
            console.log(true)
          } else {
            console.log(false);
          }
        }
      }
    } else {
        for (let i = 0; i < Math.floor(str.length/2);i++) {
        for (let j = str.length-1; j >= Math.ceil(str.length/2); j--) {
          // console.log(str[i], str[j])
          if (str[i] === str[j]) {
            console.log(true)
          } else {
            console.log(false);
          }
  
    }
  
  }
  }
  }
  palindrome2("almostomla")

  function palindrome3(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
      if (str[i] !== str[len - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  