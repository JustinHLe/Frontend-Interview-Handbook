let shortArr = [1,2,3,4]
let longArr = [1,2,3,4,5,6,7,8,9]
let unsortedShortArr = [3,2,4,1]
let unsortedLongArr = [4,6,1,3,8,5,9,2,7]

let obj = {
    name: "Justin",
    age: 10,
    color: "blue",
    isVisible: false
}

function thisFunc(params1, params2, params3) {
    console.log(this)
    this.params1 = params1
    this.params2 = params2
    this.params3 = params3
    console.log(this)
}

exports.thisFunc = thisFunc
exports.obj = obj
exports.shortArr = shortArr
exports.longArr = longArr
exports.unsortedShortArr = unsortedShortArr
exports.unsortedLongArr = unsortedLongArr


