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

  

  function telephoneCheck3(str) {
    if (str.match(/\d/g).length === 10) {
      return true;
    } else if (str.match(/\d/g).length === 11 && str.match(/\d/g)[0] != 1) {
      console.log(false)
      return false;
    } else if (str.match(/\d/g).length === 11 && str.match(/\d/g)[0] == 1) {
      console.log(true)
      return true;
    } else if (str.match(/\d/g).length < 10 || str.match(/\d/g).length > 11) {
      return false
    }
  }
  
  telephoneCheck3("1 555)555-5555")
  telephoneCheck3("10 (757) 622-7382")
  
  