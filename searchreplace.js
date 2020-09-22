// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after)

function myReplace(str, before, after) {
    str = str.split(" ")
    if (before[0].match(/[A-Z]/)) {
        after = after[0].toUpperCase() + after.substring(1)
        str.splice(str.indexOf(before), 1, after)
        console.log(str.join(" "))
    } else {
        after = after.toLowerCase()
        str.splice(str.indexOf(before), 1, after)
        console.log(str.join(" "))
    }
    // console.log(str.indexOf(before))

    //console.log(str.join(" "))
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  myReplace("I think we should look up there", "up", "Down")