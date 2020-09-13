function addTogether() {
    if (arguments.length === 1 && Object.values(arguments).every(argument => typeof(argument) === "number")) {
      console.log("hi")
      return function(x) {
        return arguments[0] + x
      }
    } else if (arguments.length === 2 && Object.values(arguments).every(argument => typeof(argument) === "number")) {
      return arguments[0] + arguments[1]
    } else return undefined
  }
  
  
  addTogether(5)(7)