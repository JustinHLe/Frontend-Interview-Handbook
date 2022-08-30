const obj = {
    vt_core_random: {
      user_details: {
        first_name: "xyz",
        last_name: "abc",
        groups: [
          {
            id: 1,
            group_type: "EXT"
          },
          {
            id: 2,
            group_type: "INT"
          }
        ],
        address_type: {
          city_name: "nashik",
          state: {
            code_name: "MH",
            name: "Maharashtra"
          }
        }
      }
    }
};

// let splitArr = [...key.split('_')]
// for(let i = 1; i < splitArr.length; i++){
//     splitArr[i] = splitArr[i].substring(0,1).toUpperCase() + splitArr[i].substring(1)
// }
// let camelCase = splitArr.join('')
// obj[camelCase] = obj[key]
// delete obj[key]

const convertToCamelCase = (obj) => {
    for(const key in obj){ 
        let splitArr = key.split('_')
        for(let i = 1; i < splitArr.length; i++){
            splitArr[i] = splitArr[i].substring(0,1).toUpperCase() + splitArr[i].substring(1)
        }
        let camelCase = splitArr.join('') //note var
        if(typeof obj[key] === 'object' && !Array.isArray(obj[camelCase])){
            obj[camelCase] = {...obj[key]}
        } else if (Array.isArray(obj[key])){
            obj[camelCase] = [...obj[key]]
        } else {
            obj[camelCase] = obj[key]
        }
        if(splitArr.length > 1){
            delete obj[key]
        }
        if(typeof obj[camelCase] === 'object' && !Array.isArray(obj[camelCase])){
            convertToCamelCase(obj[camelCase])
        }
        if(Array.isArray(obj[camelCase])){
            for(let i = 0; i < obj[camelCase].length; i++){
                if(typeof obj[camelCase][i] === 'object'){
                    convertToCamelCase(obj[camelCase])
                }
            }
        }
    }
    return obj
}

console.log(convertToCamelCase(obj).vtCoreRandom)

/*

{
  vtCoreRandom: { 
    userDetails: { 
        firstName: 'xyz', 
        lastName: 'abc',
        addressType: {
          cityName: "nashik",
          state: {
            code_name: "MH",
            name: "Maharashtra"
          }
        }
      } 
    }
}

*/