

function curry(cb){
    return function(...args){
        return function(...args2){
            return cb(parseInt(args), parseInt(args2[0]))  
        }
    }
}


function add(a,b){
    return a + b
}
var curriedAdd = curry(add)
var addFive = curriedAdd(5) //add 5 to all elements in the array

let arr = [0,1,2,3,4,5]

let res = arr.map(addFive) //implicitly call addFive and pass in all parameters of map

console.log(res)