/*
    closures are a result of a function and the lexical environment in which they are declared
    
    A lexical environment consists of the 
    environment record - the place where the variable and functions are stored
    reference to the outer environment - a reference to the outer lexical envirnoment

    lexical environemnt is basically an object all variables and functions are basically 
    properties of the object

    closures basically means a function has access to variables declared outside of the function
    even if the outer function has already returned

    Closures is a term meaning javascript will search through all properties and methods
    within the lexical environment to find whatever it needs to, if it cannot find it, it takes a reference to the
    outer object and looks for it in there and continues to null

    Free variables are variables that are neither locally declared nor passed
    as a parameter
*/

let data = "hi"
/*
    lexical environment = {
        data: "hi"
        outer: null //since we are in the global context
    }
*/


function makeCounter() {
    let count = 0;

    return function() {
        return ++count;
    };
}
let counter = makeCounter(); //returns function which increments count
// console.log(counter()) 
/*
    cant find count in current lexical environment, references makeCounterEnvironment
    finds Count which is 0 and updates its value to 1 in that lexical environment
*/
// console.log(counter())
/*
    cant find count in current lexical environment, references makeCounterEnvironment
    finds Count which is 1 and updates its value to 2 in that lexical environment
*/
// console.log(counter())
/*
    cant find count in current lexical environment, references makeCounterEnvironment
    finds Count which is 2 and updates its value to 3 in that lexical environment
*/


  /*
    lexical environment = {
        data: "hi",

        makeCounter(){
            count: 0
            function(){
                count++
                outer: makeCounter
            }
            outer: global
        }
        outer: null
    }
  */


var v = 1;

var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  return () => {
    console.log(v)
  }
};

let x = f2()
console.log(x()) 


/*
    Note the difference between scope and closure, when f1() is called within f2()
    it does not take the value of 2

    It will execute the code in f1() which is console.log(v)
    because of closures it checks its initial envirnoment which does not have v in it
    and then checks its outer envirnoment at the time it was declared

    we happen to find v = 1 in the outer so we console log v

    closures will return the first variable it finds, if there are multiple variables with the same 
    name it will return the first instance of that variable in the first lexical environment it can find it in

*/