function telephoneCheck(str) {
    let regex = /\d/g
    if (str.match(regex).length === 10 || str.match(regex).length === 11) {
      return true;
    } return false;
  }
  
  telephoneCheck("1(555)555-5555")
  telephoneCheck("27576227382")
  