function telephoneCheck(str) {
    let regex = /\d/g
    if (str.match(regex).length === 10 || str.match(regex).length === 11) {
      return true;
    } return false;
  }
  
  telephoneCheck("1(555)555-5555")
  telephoneCheck("27576227382")

  function telephoneCheck2(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  telephoneCheck2("555-555-5555");
  