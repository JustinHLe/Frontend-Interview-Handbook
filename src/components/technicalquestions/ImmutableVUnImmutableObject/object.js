/*
    The main difference between an immutable obj and a mutable object is that 
    an immutable object is an object whose state cannot be modified after being created
    a mutable object is an object which can be modified after being created


    Number and String native objects are immutable
    Custom Objects built by the user and Math and Date are mutable
*/

let object = {}
Object.defineProperty(object, 'number', {
    value: 5,
    writable: false,
    configurable: false
})

/*
    this will create a new object with a key called number and value 5. We can read the object key number but when we try to make an update
    to the key number the key's value will not change
*/

Object.preventExtensions(obj)

/*
    Object prevent extensions will prevent new keys from being added to the object
*/

Object.seal(obj)

/*
    Object.seal is similar to preventExtensions in how it will prevent any new keys from being added 
    also will disable deleting of properties

    still allows object to be modified
*/

Object.freeze(obj) 

/*
    disable modifications disable deletions disable extensions
    freeze is the strongest method for keeping initial state of an object
*/

//Immutability can be achieved by using the methods from above and using the const variable