
// const arr1 = [5,2,4,1,7,9]
// console.log(arr1.sort())
// const arr2 = ["hi", "a", "charlie", "delta", "november", "echo"]
// console.log(arr2.sort())
// const arr3 = [
//     {
//         x: 5,
//         y: 2
//     },
//     {
//         x: 10,
//         y: 16
//     }
// ]
// console.log(arr3.sort(compareFn))

const arr4 = [50,1,25,100,10, 9]

console.log(arr4.sort(compareFn))
/*
    The sort function in javascript compares elements as strings
    it will place 100 before 25 since "1" is greater than "2"

    In order to circumvent this the sort function can take a comparator function that compares
    every pair in the array 




    In the comparator it will sort the pair based on what is returned
    If the result is negative a is before b
    if result is 0 both stay in same place
    if result is positive b before a

*/



function compareFn(a, b) {
    console.log(a, b)
    return a - b
}

let string1 = "cde"
let string2 = "abc"
if(string1 > string2){
    return 1
} 
else if(string1 < string2){
    return -1
}
return 0