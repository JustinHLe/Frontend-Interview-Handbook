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
        /*
            Loop through all keys in the current object and convert it to camelcase
        */
        let splitArr = key.split('_')
        for(let i = 1; i < splitArr.length; i++){
            splitArr[i] = splitArr[i].substring(0,1).toUpperCase() + splitArr[i].substring(1)
        }
        let camelCase = splitArr.join('') //note var

        /*
            Once converted set a new property camelCase equal to the old value
            we must spread the operator because we want to point to a completely new object
        */
        if(typeof obj[key] === 'object' && !Array.isArray(obj[camelCase])){
            obj[camelCase] = {...obj[key]}
        } else if (Array.isArray(obj[key])){
            obj[camelCase] = [...obj[key]]
        } else {
            obj[camelCase] = obj[key]
        }

        /*
            If the splitArr length was greater than 1 than we created a new key and we could simply delete the old key
            however if splitArr was 1 we didn't need to split the current key so if we delete the key it will delete
            the new key we just created
        */
        if(splitArr.length > 1){
            delete obj[key]
        }

        /*
            if we find any keys that are objects simply recurse on that object
        */
        if(typeof obj[camelCase] === 'object' && !Array.isArray(obj[camelCase])){
            convertToCamelCase(obj[camelCase])
        }

        /*
            if we find any keys that are Arrays loop through each element and check if they are objects
            if they are recurse
        */ 
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

console.log(convertToCamelCase(obj).vtCoreRandom.userDetails.groups)

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