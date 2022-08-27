
Array.prototype.myReduce = function (cb, initialValue) {
    // your code here
    let arr = this 
    if(arr.length === 0 && initialValue.length === 0) throw "err"


    /*
        We can't check if initialValue is undefined or null, because
        users can pass undefined or null as an initialValue

        To check if there is an initial value or not use arguments.length which will equal
        the number of arguments passed into the function not the number of parameters the function takes

    */
    let index = arguments.length === 1 ? 1 : 0 
    /*
        if we dont have initialValue start at second index since we include the
        first already in our aggregate
        else we start at 0 since we need to add the first index to our initialValue

        Our aggregate starts at the first index if no initialValue is gven else 
        our aggregate starts at the initivalValue
    */
    let aggregate = arguments.length === 1 ? arr[0] : initialValue
  
    for(let i = index; i < arr.length; i++){
      aggregate = cb(aggregate, arr[i], i, arr)
    }
  
    return aggregate
  }
  
  const arr = [1,2,3,4,5,6]
  const reducer = (a, b) => a - b
  console.log(arr.myReduce(reducer, 1,2,3))