/*
    arrow functions simplify the creation of functions by negating the function keyword
    This within the arrow function is bound it its enclosing scope (scope that is one above it) meaning
    this in arrow function is the same this as its outer scope

    Arrow functions will be bound to the outer scope once the outer scope is initialized 
    (the outer scope if defined in a regular function is dependent on where the function is executed), 
    once it is bounded it cannot change even if we try to call the arrow function from a 
    different scope or with call apply or bind

*/