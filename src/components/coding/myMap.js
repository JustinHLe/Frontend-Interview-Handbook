// const arr = [1,2]
// const callback = function () {
//   return this.foo
// }
// const thisObj = {foo: 'bar'}
// console.log(arr.map(function(i, index) {
//     console.log(i)
//     return this.foo
// }))
// expect(arr.myMap(callback, thisObj)).toEqual(arr.map(callback, thisObj))

Array.prototype.myMap = function(cb, thisArg) { //map takes a callback and an object
    // your code here
    let arr = this 
    /*
        since Arrays are objects in javascript and we use the dot operator to invoke myMap, 
        this will point to whatever is on the left side of the dot
    */
    let res = [] //create a new array since map returns arr

    /*
        We can't use a for loop because a for loop will treat
        empty items as undefined and not skip over them, and a for loop can 
        be dynamic in size if we increase our size in the loop

        ForEach only works on enumerable items and ForEach has a static size
        which is set when the method is called, if we push items to the array in forEach method the new items
        will not be iterated over
    */
    arr.forEach((element, index, array) => {
        res[index] = cb.apply(thisArg, [element, index, arr])
        /*
            we can just do cb(element, index, arr), however if an object is passed into the map as a second parameter
            and the callback has this within it, we must use the apply or call method to append the object passed in
            and make this point to the object.

            if there is no This thisArg is basically irrelevant
        */
    })

    return res
}

const arr = [1,2,3]
const arr2 = [1,2,3]

const callback = (item, i, array) => {
    array[1] = 4
    array[2] = 6
    return item
  }

console.log(arr.myMap(callback))
console.log(arr2.map(callback))


