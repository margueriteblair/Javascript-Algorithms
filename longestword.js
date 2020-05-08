// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let longestString = 0;
    strArray = str.split(" ");
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longestString) {
            longestString = strArray[i].length;
        }
        }

    console.log(longestString)

}
  findLongestWordLength("The quick brown fox jumped over the lazy dog");