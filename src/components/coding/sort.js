
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

// let string1 = "cde"
// let string2 = "abc"
// if(string1 > string2){
//     return 1
// } 
// else if(string1 < string2){
//     return -1
// }
// return 0

/*
    When comparing two strings in javascript they are converted to unicode
    capitals and lowercases have different unicodes it would be wise to convert all chars to lowercase or all chars to uppercase than compare

    Once converted it will look at each character in the string and compare them, if the two strings are the same it will move forward and compare the next to chars
    
    compare a and c, c is greater in unicode string1 > string2 return 1, positive b first


    Assume unicode 
    a->0
    b->1
    c->2
    .... etc


    Sort also works on objects it can sort an object by its property
    for example 

    {
        b: 15
        c: "hi"
    },
    {
        a: 10,
        e: "aooo"
    }

*/

const arrobject = [
    {
        age: 15,
        say: "hi"
    },
    {
        age: 10,
        say: "aooo"
    }
]
//compare "h" and "a" h > a true 1
console.log(arrobject.sort((a,b) => {
    if(a.say > b.say){
        return 1
    }
    if(a.say < b.say){
        return -1
    }
    return 0
}))