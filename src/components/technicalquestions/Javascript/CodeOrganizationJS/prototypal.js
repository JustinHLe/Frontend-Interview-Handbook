let human = {
    species: "human",
    /*
        creates a new object of itself and appends properties and methods to itself
    */
    create(obj){
        var instance = Object.create(this)
        Object.keys(obj).forEach(key => instance[key] = obj[key]) 
        // instance = {...obj} 
        /*
            Note the difference between 
            Object.keys(obj).forEach(key => instance[key] = obj[key]) 
            instance = {...obj} 

            We first create a new instance that is a child of the whatever this references with Object.create(this)
            instance = {...obj} will take the instance and point it to a completely new object and break the prototype chain
            
            Object.keys(obj).forEach(key => instance[key] = obj[key]) we loop through the keys of the object passed in and set it to the instance we created
            the instance will not point to a newly created object and maintain the prototype chain
        */
        console.log(instance.__proto__)
        return instance
    },
    saySpecies: function(){
        console.log(this.species)
    },
    sayName(){
        console.log(this.name)
    }
}

var musician = Object.create(human) //creates new musician object with all properties and methods of the human object


//add new properties and methods
musician.playInstrument = function(){ console.log(`plays... ${this.instrument}`)}


// var justin = Object.create(musician)
// justin.name = "justin"
// justin.instrument = "drums"

var musician = human.create({
    species: "alien",
    playInstrument(){
        console.log("playing", this.instrument)
    }
})
var justin = musician.create({
    name: "justin",
    instrument: "guitar"
})

console.log(justin.playInstrument())
// human.species = "alien"
// console.log(justin.species)

/*
    This works because of prototype inheritance when an object doesn't have a method or property it looks within its __proto__ method
    to get the parent object and looks for the methord or property in there and keeps taking the __proto__ method until it finds it or when __proto__ points to null

    If an object property cannot be found it returns undefined, if a function cannot be found and we call it, it throws an error

    If we instantiated an object already and change a property or method in the base object the instantiated object will now point to the newly changed variable
    this is similar to closures
*/