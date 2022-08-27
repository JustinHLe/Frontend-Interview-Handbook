


Array.prototype.myFilter = function(cb, thisArg){
    let arr = this
    let res = []
    arr.forEach((element, index, array) => {
        if(cb.apply(thisArg, [element, index, arr])){
            console.log("here")
            res.push(element)
            /*
             res[index] = element 
            this doesnt work because if we skipped the first 3 indexes from our filter and res[3] is true
            it will insert into the condition and set res[3] = element and it assumes res[0], res[1], res[2]
            are all empty
            */
        }
    })
    return res
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
const result2 = words.myFilter(word => word.length > 6);
console.log(result);
console.log(result2)