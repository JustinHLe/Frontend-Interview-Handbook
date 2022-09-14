

function duplicate(arr){
    let obj = {}
    arr.forEach((el) => {
        if(obj[el] === 1){
            obj[el]++
        } else {
            obj[el] = 1
        }
    })

    let res = []

    for(const key in obj){
        if(obj[key] === 1){
            res.push(key)
        }
    }
    return res
}
console.log(duplicate([5,3,4]))