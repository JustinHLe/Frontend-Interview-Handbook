/*
    What's the difference between function Person(){} var person = Person() and var person = new Person()

    function Person(){} is simply just a function delcaration nothing happens except the function is hoisted to its lexical environment
    It's important to note that constructor functions usually begin with capital letters

    var person = Person() this is simply calling the function and assigning the return of the function the person variable if there is no new keyword
    infront of the Person() then no object will be created the function will simply execute

    var person = new Person() this will correctly create a new object and call the constructor Person()

    the new keyword will
    
    1. create a new object
    2. set the object's __proto__ to the constructor's prototype obj.__proto__ = Person.prototype
    3. Call constructor function with new object Person.apply(obj, [param1, param2, param3])
    4. return the object

*/