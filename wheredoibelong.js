function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return (a-b)
    })
    for (let i = 0; i < arr.length;i++) {
        if (arr[i] >= num) {
            console.log(i)
        }
    }
    console.log(arr.length)
  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([5, 3, 20, 3], 5)
  