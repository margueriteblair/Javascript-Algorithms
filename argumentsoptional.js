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


  function addTogether2() {
    var checkNum = function(num) {
      if (typeof num !== "number") {
        return undefined;
      } else return num;
    };
  
    if (arguments.length > 1) {
      var a = checkNum(arguments[0]);
      var b = checkNum(arguments[1]);
      if (a === undefined || b === undefined) {
        return undefined;
      } else {
        return a + b;
      }
    } else {
      var c = arguments[0];
      if (checkNum(c)) {
        return function(arg2) {
          if (c === undefined || checkNum(arg2) === undefined) {
            return undefined;
          } else {
            return c + arg2;
          }
        };
      }
    }
  }
  
  addTogether2(2, 3);