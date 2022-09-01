let obj = {
    a: "hi",
    b: "bye",
    c: 5,
    d: [1,2,3],
    e: () => {
        console.log("hi")
    },
    myFunc(){
        console.log("bye")
    }
}

//for in loop will print all the keys in an object
/*
    For in loops through inherited properties as well, 
    you must check if the property is a direct child by doing Object.hasOwnProperty(property)
*/
for (const key in obj){
    console.log(key)
    console.log(obj.hasOwnProperty(key)) //returns true since this object isn't inheriting from any others
}


Object.keys(obj).forEach(key => console.log(key)) //returns an array of keys which we can loop through  
/*
    only loop through enumerables
*/

Object.getOwnPropertyNames(obj).forEach(key => console.log(key)) //returns an array of keys which we can loop through
/*
    Loop through both enumerables and non enumerables
*/