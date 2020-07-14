function confirmEnding(str, target) {
    if (str.substr(-target.length) === target) {
        console.log(true);
    } else console.log(false);
}

confirmEnding("Bastian", "n");

function confirmEnding2(str, target) {
    if (str.slice(str.length - target.length) === target) {
        console.log(true);
    } else console.log(false);
}
confirmEnding2("Bastian", "n");

function confirmEnding3(str, target) {
    if (str.endsWith(target)) {
      return true;
    } else return false;
  }
  
  confirmEnding3("Bastian", "n");

  function confirmEnding4(str, target) {
    return str.endsWith(target) ? true : false;
  
  }
  
  confirmEnding4("Bastian", "n");
  
