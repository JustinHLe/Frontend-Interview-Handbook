let a = {
    name: "ade",
    last: "segun",
    dead: {
      name: "ade",
      last: "segun",
    },
    eaten: true,
    data:[1,2,3,{a: "hi", b: [1,2, {c: 3}, [1,2]]}]
  };
  
let b = {
    name: "ade",
    last: "segun",
    dead: {
      name: "ade",
      last: "segun",
    },
    eaten: true,
    data: [1,2,3,{a: "hi", b: [1,2, {c: 3}, [1,2]]}]
};


function deepEqual(obj1, obj2){
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length) return false //checks if number of keys are the same

    for(let i = 0; i < keys1.length; i++){
        if(!keys2.includes(keys1[i])) return false //check if keys are the same
    }

    let valueMatch = true //compare key values
    keys1.forEach((key) => {
        if(obj1[key] !== obj2[key] && (typeof obj1[key] !== "object" && typeof obj2[key] !== "object")){
            valueMatch = false
        }
        else if(typeof obj1[key] === "object" && typeof obj2[key] === "object"){
            valueMatch = deepEqual(obj1[key], obj2[key])
        } 
        
    })

    return valueMatch
}

console.log(deepEqual(a, b))