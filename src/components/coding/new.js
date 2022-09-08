function Person(saying){
    this.saying = saying
}

Person.prototype.talk = function(){
    console.log("I am talking")
}


var guy = myNew(Person, "Hi this is a guy")
console.log(guy)
guy.talk()


function myNew(...args){
    let obj = {} //create new object
    obj.__proto__ = args[0].prototype //assign parent object to the newly created object
    // Object.setPrototypeOf(obj, args[0].prototype)
    
    const [firstElem, ...rest] = args //destructure first element from remaining arguments
    Person.apply(obj, [...rest]) //call constructor function with arguments

    return obj
}