const MyPromise = require("./MyPromise")
const FakePromise = require("./FakePromise")
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10)
//         if(random <= 5){
//             reject("less than 5")
//         } else {
//             resolve("greater than 5")
//         }
//     }, 1000)
// })


// promise.then((data) => {
//     console.log(data)
// })
// .catch(err => { console.log(err) })


// const promise2 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10)
//         if(random <= 5){
//             reject(`value: ${random}`)
//         } else {
//             resolve(`value: ${random}`)
//         }
//     }, 1000)
// })

// promise2.then((data) => {
//     console.log("processing data", data)
//     return data
// }).then((data)=>{
//     console.log("processing data again", data)
// })


const fakePromise = new FakePromise((resolve, reject) => {
    setTimeout(() => {
        let random = Math.floor(Math.random() * 10)
        if(random <= 5){
            reject(`${random}`)
        } else {
            resolve(`${random}`)
        }
    }, 1000)
})
const newPromise1 = fakePromise.then(data => {
    console.log("first", data)
    return FakePromise.resolve("5")
})
const newPromise2 = newPromise1.then(data => {
    console.log("second", data)
    return data
})
/*
    {

    }
    Promise2 creates a new object with its __proto__ property pointing to the MyPromiseClass
    new calls constructor immediately

    let resolve = this.#onSuccess.bind(this)
    promise2 has all the methods and properties of MyPromise
    if we call #onSuccess without this, this isn't found in the constructor so we get an error saying function not defined
*/

