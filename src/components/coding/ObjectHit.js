const input = [
    {
      value: 'Miss1',
      children: [
        { value: 'Miss2' },
        { value: 'Hit1', children: [ { value: 'Miss3' } ] }
      ]
    },
    {
      value: 'Miss4',
      children: [
        { value: 'Miss5' },
        { value: 'Miss6', children: [ { value: 'Hit2' } ] }
      ]
    },
    {
      value: 'Miss7',
      children: [
        { value: 'Miss8' },
        { value: 'Miss9', children: [ { value: 'Miss10' } ] }
      ]
    },
    {
      value: 'Hit3',
      children: [
        { value: 'Miss11' },
        { value: 'Miss12', children: [ { value: 'Miss13' } ] }
      ]
    },
    {
      value: 'Miss14',
      children: [
        { value: 'Hit4' },
        { value: 'Miss15', children: [ { value: 'Miss16' } ] }
      ]
    },
];

/*
    return any objects that have Hit within it in a near arr
*/

/*
    Create return array called res. 
    We loop through every object in the array. 
        We create a second loop to loop through every key in the object
            if the key's value is not an object or array we push the obj to our return
            if the object is an array we recursively call findTarget
                in the recursion we do the same thing as before but the array of objects we returned is not the parent object
                is the object within the recursion
                Once the recursive calls returns we should get an array of objects if the array is not empty we found a hit
                so we push the global object into the return
*/
function findTarget(arr){
    let res = []    
    for(const el of arr){
        for(const key in el){
            if(!Array.isArray(el[key]) && typeof el[key] !== "object"){
                if(el[key].toLowerCase().includes("hit")){
                    res.push(el)
                }
            }
            if(Array.isArray(el[key])){
                let ret = findTarget(el[key])
                if(ret.length !== 0){
                    res.push(el)
                }
            }
        }
    }


    return res
}

console.log(findTarget(input))






























var res = input.filter(function f(o) {
    if (o.value.includes("Hit")) return true
  
    if (o.children) {
      return (o.children = o.children.filter(f)).length
    }
})

console.log(res)