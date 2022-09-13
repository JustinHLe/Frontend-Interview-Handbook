const func = require("../../../configs")

func.thisFunc.apply(func.obj, [1,2,3])

/*
    Apply is used on a function and will bind any instances of this within that function to the object that is passed into it
    also accepts an array of arguments which is passed into the function's parameters

*/