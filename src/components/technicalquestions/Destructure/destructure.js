/*
    Object destructuring in javascript is a term used to extract data from an object (arrays and objects) 
*/


//example of object destructure
const obj = {
    a: 5,
    b: 10
};

const { a, b } = obj
console.log(a, b)


//example of array destructure

const arr = [true, false, "hi", "hello", 3]
const [first, second, third] = arr
console.log(first, second, third)