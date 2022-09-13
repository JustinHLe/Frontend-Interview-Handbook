/*
    This keyword in javascript is determined at the time a function is called by inspecting what invoked it.
*/

// Rule 1: If new keyword is used when invoking a function, this will create a brand new object

/*
function MyNew(){
    console.log(this)
    this.a = 5
    console.log(this)
}

new MyNew()
*/

// Rule 2: If apply, call, or bind is used to invoke a function, this will reference the object that is passed
// as a parameter

/*
function fn(param){
    console.log(this)
    console.log(param)
}

fn.call({a: 5}, 10, 20)
fn.apply({b: 5}, [15])

fn.bind({c: 5})() 
*/

//this works since bind returns a function and we call that function immediately with placing 
// parathenses to the right of the bind method

// Rule 3: If a function is called as a method, meaning it was invoked by an object,
// this will reference the object that invoked the method

/*
var MyObj = {
    name: "jstin",
    fn() {
        console.log(this)
    }
}

MyObj.fn()
*/

/*
 Rule 4: If a function is invoked as a free invocation function meaning it was called without an object, new, or without
 apply, bind, or call this will reference the window.

 The reasoning behind this is that when a function is not attached to any objects it will become attached as a method
 of the global/window object

 every function created in the window will be created as a method of the window

*/

/*
function windowFn(){
    console.log(this)
}
*/

// If multiple of rules are applied at once, the higher rule wins e.g. Rule 2 will take precedence over Rule 3

/*

Rule 5: Rule 5 ignores all rules above. For arrow functions this will refer to this 
this of its surrounding scope at the time it's created

*/

// const obj = {
//     value: 'abc',
//     createArrowFn: function() {
//         console.log(this)
//         return () => console.log(this);
//     },
//     arrowFn: () => {
//         console.log(this)
//     }
// };

/*
    this within an arrow function will be bound to the this of the outer function
    arrowFn method - there is no outer function so this will be bound to the global object
*/
// const arrowFn = obj.createArrowFn();
// arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }
// obj.arrowFn()
// console.log(this)

// obj.createArrowFn()()

// let bound = obj.createArrowFn.bind({name: "hi"})
// console.log(bound()()) // will be bounded to the this of the outer function which is the object we passed in

// obj.createArrowFn().bind({location: "sd"}) //will be bound to the obj using the dot notation

    