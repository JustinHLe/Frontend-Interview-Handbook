/*
    Both run a callback function on every element on the array

    ForEach runs a callback function on every element but does not return a new array
    
    Map will "map" the return from the callback function to a new element and returns a new array with all the mapped elements

*/

const arr = require("../../../configs")

let newArr = arr.longArr.map((element, index, array) => {
    return element * 2
})

console.log(newArr)

arr.longArr.forEach((element, index, array) => {
    console.log(element * 2)
})
console.log(arr.longArr)

/*
    Map is preferred when we want to create a brand new array with elements
    ForEach is preferred when we want to run an operation on elements and not modify the original array
*/

