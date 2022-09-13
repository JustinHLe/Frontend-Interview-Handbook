/*
    IIFE in javascript represents an immediately invoked function expression.

    A function expression is similar to a function declaration except we can create the function without the name 
    and assign the expression to a variable
*/

// function func(){
//     console.log("hi") // function declaration
// }

// const myFunc = (param) => console.log("hi") //function expression
// const myFunc2 = function (param) { console.log("hi2") }//function expression


/*
    Explain why function foo(){} () doesn't work as an IIFE and what needs to be changed

    Javascript parser will assume the function is a function declaration and read the line in two steps

    function foo(){ first

    }
    () second

    Javascript will assume that the paratheneses in the second line are calling a function but no function is found
    because the first statement is a function declaration, it will throw an error

    To fix this we can add paratheneses around the function foo to make it a function expression
*/

let myVar = 10
var myVar2 = 20
let func = (function foo() {
    console.log(this)
    console.log("hi"); 
    let x = 5
    console.log(myVar)
    console.log(myVar2)
});

// (function foo() {
//     console.log("hi"); 
//     let x = 5
//     console.log(myVar)
//     console.log(myVar2)
// })()
func.call({a: 5})



/*
    an IIFE creates their own scope and variables defined inside it cannot be accessed outside of it,
    however variables defined outside an IIFE can be accessed within it

    if this is defined in an IIFE binding,calling, and applying will bind the value of this to the object passed into it
*/