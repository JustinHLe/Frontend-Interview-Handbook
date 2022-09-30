const MyPromise = require("./MyPromise")
const FakePromise = require("./FakePromise")
const JLPromise = require("./JLPromise")

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

// promise2.then(console.log(5)).catch(err => {
//     console.log(err)
// })

// const fakePromise = new FakePromise((resolve, reject) => {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10)
//         if(random <= 5){
//             reject(`${random}`)
//         } else {
//             resolve(`${random}`)
//         }
//     }, 1000)
// })
// const newPromise1 = fakePromise.then(data => {
//     console.log("first", data)
//     return FakePromise.resolve("5")
// })
// const newPromise2 = newPromise1.then(data => {
//     console.log("second", data)
//     return data
// })

// const fakePromise2 = new FakePromise((res, rej) => {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10)
//         if(random <= 5){
//             rej(`${random}`)
//         } else {
//             res(`${random}`)
//         }
//     }, 1000)
// })

// fakePromise2.catch(data => {
//     console.log("success", data)
//     return JLPromise.resolve("5")
// }).catch(data => {
//     console.log("times two", data * 2)
// })


const promise1 = JLPromise.resolve(3);
const promise2 = 42;
const promise3 = new JLPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 100);
});

JLPromise.all([promise1, promise2, promise3]).then(values => {
    console.log(values)
})


//if we chain another then we will get the result from the first .then

/*
    {

    }
    Promise2 creates a new object with its __proto__ property pointing to the MyPromiseClass
    new calls constructor immediately

    let resolve = this.#onSuccess.bind(this)
    promise2 has all the methods and properties of MyPromise
    if we call #onSuccess without this, this isn't found in the constructor so we get an error saying function not defined
*/


// const defaultPromise = new Promise((reject, resolve) => {
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * 10)
//         if(random <= 5){
//             reject(`${random}`)
//         } else {
//             resolve(`${random}`)
//         }
//     }, 1000)
// })

// defaultPromise.then((data) => {
//     console.log("success", data)
//     return data * 3
// })
// .catch((data) => {
//     console.log("error", data)
//     return data * 2
// })
// .finally(() => {
//     console.log("finished")
//     return "5"
// })
// .then(data => {
//     console.log("post", data)
// })

