function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Boolean(arr[i]) === false) {
        arr.splice(arr.indexOf(arr[i]), 1)
  }
}
console.log(arr)
} 
  bouncer([7, "ate", "", false, 9]);
  bouncer([false, null, 0, NaN, undefined, ""])
  bouncer([null, NaN, 1, 2, undefined])
