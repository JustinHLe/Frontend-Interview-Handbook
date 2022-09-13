
function thisFunc(params1, params2, params3) {
    console.log(this)
    this.params1 = params1
    this.params2 = params2
    this.params3 = params3
    console.log(this)
}
let bound = thisFunc.bind({a: 5}, 1, 2, 3)
bound()
/*
    Bind is the exact same thing as call except instead of calling the function immediately it will return a function that can be called at a later date
    this function will also have a reference to the object that was passed into it
*/