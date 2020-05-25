// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let chunkedArray = []
    let copiedArray = [...arr]
    for (let i = 0; i < arr.length/size; i++) {
        chunkedArray.push(copiedArray.splice(0, size))
    }

    // console.log(copiedArray)
    console.log(chunkedArray)
}
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

// let array = 
// array.splice(0, 3)
// console.log(array)
  
