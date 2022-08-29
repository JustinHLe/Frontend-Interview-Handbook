/*
    Write something so 
    sum(1)(2)(3)(4) = 10

*/

function sum(...args){
    let sum = args[0] ? args[0] : 0
    let index = 0
    return function curried(...args2){
        sum += args2[index] ? args2[index] : 0
        index = args2[index] ? index = index + 1 : index = index
        return function innerCurry(...args3) {
            if(args3[0] === "end"){
                return sum
            }
            return curried(...args2, ...args3)
        }
    }
}
console.log(sum(1)(2)(3)()()("end"))

/*
    sum = 1
    index  = 0

    sum = 3
    index  = 1

    sum = 6
    index = 2

    sum = 10
    index = 3

*/