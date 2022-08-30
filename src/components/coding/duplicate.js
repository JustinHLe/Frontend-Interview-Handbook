/*
    Duplicate an array and append the duplicate to the back of the original arr
*/


function duplicate(arr){
    let index = arr.length - 1
    let element = 0
    while(index >= 0){
        arr.push(arr[element])
        element++
        index--
    }
    return arr

    // return [...arr, ...arr]
}   

console.log(duplicate([1,2,3,4,5,6,7,8,9]))