/*
    The rest operator will condense multiple elements into an array
*/


function multiple(mult, ...args){
    console.log(mult, args)

    /*
        Args is an array and accepts any number of arguments
        the arguments will become condensed into one single array 
        from the rest operator
    */
}

multiple(2, 3,4,5,6,7,8)

