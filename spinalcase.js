function spinalCase(str) {
    let regex = /[\-_|\s|[A-Z][a-z]+]/g
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    //str = str.split(regex);
    //str = str.join("-")
    str = str.replace(/\s|\_/g, "-").toLowerCase();
    console.log(str)
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap")
  spinalCase("The_Andy_Griffith_Show")
  