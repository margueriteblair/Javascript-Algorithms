function truncateString(string, number) {
    if (string.length > number) {
        let truncString = string.slice(0, number);
        console.log(truncString + "...");
    } else console.log(string)
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function truncateString2(str, num) {
    console.log(str.length>num ? str.substr(0, num) + "..." : str);
  }
  
  truncateString2("A-tisket a-tasket A green and yellow basket", 8);