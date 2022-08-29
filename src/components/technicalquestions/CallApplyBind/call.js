const func = require("../../../configs")

func.thisFunc.call(func.obj, 1,2,3)

/*
    Call is used on a function and will bind any instances of this within that function to the object that is passed into it
    also accepts a number of arguments which will be passed into the function's parameters

*/