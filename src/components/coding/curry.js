

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    // your code here
    return function curried(...arguments){ //accepts any new arguments
      if(arguments.length >= fn.length) return fn(...arguments) 
      /*
        if arguments length === callback length correct number of parameters found
        stop recursion and return callback function

        else return a new function that accepts any number of parameters
        and from that function return the curried function which holds the previous parameters + new paramters
      */
      return (...arguments2) => {
        return curried(...arguments, ...arguments2)
      }
    }
  }
  
//   function curry(fn){  
//     let params = []
//     return function curried(...args){
//         params = [...params, ...args]
//         if(params.length >= fn.length) return fn(...params)
//         return (...args2) => {
//             return curried(...args2)
//         }
//     }
//   }
/*
  The following code above doesn't work due to closures
  if we call
  let curried = curry(join)(1,2) 
  
  we return a function called curried that takes (1,2) as args and sets them to the arr params [1,2]
  then call
  curried(3)

  since the curried functions returns an anonymous function that takes in any number of args we take 3 and recursively
  return curried and set params to [1,2,3]
  and we return [1,2,3]
  then we call
  curried(4)

  curried(4) takes in 4 and appends to params since it cant find params in its current execution context it looks
  upwards and finds params and appends 4 to be [1,2,3,4]
  and since params >= fn.length we return fn(1,2,3,4) whch returns 1_2_3 and not last character
*/
  
  const join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`)
    return `${a}_${b}_${c}`
  }
  
  const curriedJoin = curry(join)
  
  // console.log(curriedJoin(1, 2, 3)) // '1_2_3'
  
  console.log(curriedJoin(1)(2, 3)) // '1_2_3'
  
  // curriedJoin(1, 2)(3) // '1_2_3'