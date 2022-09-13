/*
    Hoisting is a term refered to what happens when javascript variables are declared

    All javascript variables that are declared/initialized with var are hoisted to the top of their scope 
    (functional/global) This means that the variable can be accessed even before the initialization

    The variables are not actually moved javascript just parses the file and makes not of the declarations and their scopes

    Function declarations are hoisted up as well, however anonymous functions and functions assigned to a variable are not
    hoisted

    Variables declared with let and const are hoisted to the top of the scope, however they are not initialized or declared
    until they are read by the compiler 
    If const and let variables are accessed before they are read in the compiler they will throw a reference error
*/


// console.log(x) //ref error
console.log(y) //undefined
let x = 5
y = 10
console.log(y) // 10
var y = 5
console.log(y)
myFunc() //hoisted
// xFunc() //Ref error
console.log(xFunc) // undefined
function myFunc(){
    console.log("hoist brah")
}

var xFunc = function(){
    console.log("not hoisted brah")
}
let yFunc = function(){
    x=1
    console.log(x)
    var x = 15
    console.log(x)
}
yFunc()