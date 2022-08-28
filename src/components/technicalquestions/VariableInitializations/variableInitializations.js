/*
    An undeclared variable is when we try to access a variable or assign to a variable without creating the variable first
    with either let, var, or const

    for example x = 5, x is undeclared since x wasn't declared first with let, var, or const

    undefined variables are defined but not initialized to any values yet
    functions that return nothing will automatically return defined

    for example 
    let x
    console.log(x) //undefined

    let x = function(){
        console.log("hi")
    }
    console.log(x()) //undefined

    Null variables are explicity set to null, it's different from undefined because undefined the variables
    are implicity set to undefined we did not explicity set them to anything

    For null we explicity told the compiler to set the variable to be nothing
*/
