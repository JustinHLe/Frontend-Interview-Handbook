/*
    the spread operator spreads individual elements in an array or object out
*/

//add elements from an existing array into a new array

const arr1 = [1,2,3]
const arr2 = [...arr1, 4, 5, 6]
console.log(arr2)

//pass elements of an array as arguments to a function

function addThreeNumbers(a, b, c){
    console.log(a + b + c)
}
addThreeNumbers(...arr1)


//duplicate arrays 

const arr3 = [...arr1]
console.log(arr3)


//concatenate arrays
const arr4 = [...arr1, ...arr3]
console.log(arr4)


