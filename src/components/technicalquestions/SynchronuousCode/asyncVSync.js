/*
    Javascript is single threaded meaning everything in javascript happens linearly.
    When javascript compiles code it will read the code top down and will execute every line in order. 
    Javascript will wait for the line of code or block of code to finish executing before continuing on.

    This is the default nature of synchronuous code in javascript.

    Asychronuous code in javascript will handle code differently, javascript will always execute in a linearly manner, but 
    with asychronuous code we can execute a function or line of code and continue executing while we wait for the initial code to finish processing
    once the code has finished processing we can come back to the code later or once the call stack is completely cleared we can come back to the code.

    Typically making requests to a database will happen asychronuously since we don't want to block the page from loading while we retrieve data
*/