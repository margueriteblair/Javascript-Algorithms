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
  