/*
    A promise in javascript is a class. This class can be instantiated to make promise instances. A promise instance is an object and will 
    produce some result in the future. The result can be the resolved value or a reason that it's not resolved.
    A promise is an object that "promises" to return some value sometime in the future. 

    A promise contains three states fulfilled, rejected, and pending. 

    To handle the result returned from a promise a callback handler can be attached. (then or catch).
    The callback handler will return a new promise


    Advantages of a promise compared to callbacks
    - avoid callback hell (too many nested functions)
    - make asychronuous code easy to read with .then
    - error handling
    - handle all async code in one method promise.all()

    Disadvantages
    - a little more complex to use compared to regular callbacks
    - not compatible with older browsers
*/

/*
    A polyfill in javascript is a piece of code which is used when some modern functionality is not available on older browsers. For example, some older browsers
    may not handle promises and a polyfill is required.
*/  