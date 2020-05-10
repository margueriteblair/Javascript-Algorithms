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

