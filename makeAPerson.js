
var Person = function(firstAndLast) {
    // return firstAndLast;

    var fullName = firstAndLast.split(" ");

    this.getFirstName = function(){
        return fullName[0];
    };
    this.getLastName = function(){
        return fullName[1];
    };
    this.getFullName = function(){
        return fullName.join(" ");
    };
    this.setFirstName = function(first){
        fullName[0] = first;
    };
    this.setLastName = function(last){
        fullName[1] = last;
    };
    this.setFullName = function(firstAndLast){
        fullName = firstAndLast.split(" ");
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();

