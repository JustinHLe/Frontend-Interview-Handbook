function inherits(derived, base) {
    // derived.prototype = new base()
    derived.prototype = Object.create(base.prototype)
    /*
        Note the difference between 
        derived.prototype = Object.create(base)
        derived.prototype = Object.create(base.prototype)

        create(base) will create a new object with all the properties and methods from the base function
        create(base.prototype) will create a new object with all the properties and methods from the base prototype
    */
};
var Person = function (name){
    console.log("ran")
    this.name = name
}

Person.prototype.sayName = function(){
    console.log("Hi my name is", this.name)
}

Person.prototype.shoutName = function(){
    console.log("Hi my name is", this.name, "!")
}

// var john = new Person("john")
// var bobby = new Person("bobby")

var Musician = function(name, instrument){
    Person.call(this, name)
    this.instrument = instrument
}

inherits(Musician, Person)

Musician.prototype.getInstrument = function(){
    console.log(this.instrument)
}

Musician.prototype.shoutName = function(){
    console.log("HI MY NAME IS", this.name)
}
var julia = new Musician("julia", "drums")
console.log(julia.sayName())
console.log(julia.getInstrument())
console.log(julia.shoutName())

var juan = new Musician("juan", "guitar")
console.log(juan.sayName())
console.log(juan.instrument)

/*
    Whats the difference between Object.create() 
    and new Object()

    Object create and new are basically the same in that they both create a new object dervied from the based object
    however the object create function doesnt run the constructor while new keyword does run the constructor
*/