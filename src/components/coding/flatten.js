const arr1 = [ 2, 3 , [ 4, 5, 6, [ 7 ], 8 ], 9] 
const arr2 =  [ 2, 3, 4, 5, [6] ]


console.log(flatten(arr2))


function flatten(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res.push(...flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}