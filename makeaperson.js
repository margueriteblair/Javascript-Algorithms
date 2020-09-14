let Person = function(firstAndLast) {
    this.getFullName = function() {
      return firstAndLast;
    };
      this.getFirstName = function() {
      console.log(firstAndLast.split(" "))
      return firstAndLast.split(" ")[0];
      
    };
  
    this.getLastName = function() {
      return firstAndLast.split(" ")[1];
    };
  
    this.setFirstName = function(first) {
      firstAndLast = first + " " + firstAndLast.split(" ")[1];
      return firstAndLast;
    };
  
    this.setLastName = function(last) {
      firstAndLast = firstAndLast.split(" ")[0] + " " + last;
      return firstAndLast;
    };
  
    this.setFullName = function(name) {
      firstAndLast = name;
      return firstAndLast;
    };
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.setFullName('Haskell Curry'));


  //second make a person attempts
  var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast
  
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName = function() {
      return fullName.split(" ")[0]
    }
    this.getLastName = function() {
      return fullName.split(" ")[1]
    }
    this.setFirstName = function(first) {
      let nameArr = firstAndLast.split(" ")
      nameArr.splice(0, 1, first)
      fullName = nameArr.join(" ")
      return fullName
  };
    this.setLastName = function(last) {
      let nameArr = fullName.split(" ")
      nameArr.splice(1, 1, last)
      fullName = nameArr.join(" ")
      return fullName;
    }
    this.setFullName = function(newFullName) {
      fullName = newFullName;
    }
  }
  var bob = new Person('Bob Ross');
  bob.setFirstName("Haskell");
  
  