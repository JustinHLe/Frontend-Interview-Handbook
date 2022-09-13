/*
    Explain prototypal inheritance in javascript

    Every object in javascript has a __proto__ property except objects created with Object.create(null)
    The __proto__ property will reference the object's parent or "prototype"

    When a property or method is not found in an object javascript will access the __proto__ property and search 
    all objects/methods in its prototype and if not found in the prototype it will access the prototype's __proto__ property
    and seach in there and so on until it reaches the prototype of null.

*/

function Parent(){
    this.name = "justin"
    // this.greet = function (){
    //     console.log("bye")
    // } this will create a greet function for all the instantiated objects 
    // since there is now a greet method in every object the greet prototype will no longer need to be used
    //since javascript can find the greet method in the child
}

Parent.prototype.greet = function (){
    console.log("Hi: " + this.name)
}
Parent.prototype.x = 5
const obj = new Parent()

obj.say = function(){
    console.log("hi child func")
}
obj.greet() 
console.log(obj.x)

/* 
greet is not a method of the child obj so it looks in the __proto__ and finds the greet method
in the objects prototype
*/
