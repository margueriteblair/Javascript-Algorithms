function repeatAString(string, num) {
    let newString = "";
    for (let i = num; i > 0; i--) {
        newString = newString + string;
    }
    console.log(newString);
}

//repeatAString("We love to code.", 4);

function repeatAString2(string, num) {
    string = string.repeat(num);
    console.log(string)
}

repeatAString2("hello", 4);