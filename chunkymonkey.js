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
  
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)


function chunkArrayInGroups2(arr, size) {
    const chunkedArray = [];
    let index = 0;
    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, size+index))
        index+=size;
    }
    console.log(chunkedArray)
}
// chunkArrayInGroups2(["a", "b", "c", "d"], 2);
// chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
  
function chunkArrayInGroups3(arr, size) {
    if (arr.length <= size) {
        console.log(arr)
    } else {
        console.log(arr.slice(0, size), ...chunkArrayInGroups3(arr.slice(size), size))
    }
}

chunkArrayInGroups2(["a", "b", "c", "d"], 2);
chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
