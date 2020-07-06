function convertHTML(str) {
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "&":
        str[i] = "&amp;"
        break;
        case "<":
        str[i] = "&lt;";
        break;
        case ">":
        str[i] = "&gt;";
        break;
        case '"':
        str[i] = '&quot;'
        break;
        case "'":
        str[i] = '&apos;';
        break;
      }
    }
    str = str.join("")
    console.log(str)
    return str;
  }
  
  
  convertHTML("Hamburgers < Pizza < Tacos");