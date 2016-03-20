var Person1 = (function() {
    function Person(name) {
        this.getName = function() {
            return name;
        };
    }

    return Person;
}());


var Person2 = (function() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function() {
        return this.name;
    };

    return Person;
}());


var tim = new Person2("Tim")

tim.name

tim.getName();