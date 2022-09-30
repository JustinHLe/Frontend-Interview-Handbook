//design a chatbox

const obj = {
    name: "justin",
    type: "person",
    address: {
        street: "123 street street",
        number: "1234",
        state: "CA",
        country: {
            code: "USA",
            name: "United States"
        }
    },
    contact: {
        phone: {
            work: "(555) 555 - 5555",
            personal: "(777) 777 - 7777"
        },
        email: "user1@example.com"
    }
}   

//getData(key, object)
function getData(target, obj){
    for(const key in obj){
        if(key === target) return obj[key]

        if(obj[key] instanceof Object && target.split('.').length > 1 && target.split('.')[0] === key){
            let arr = target.split('.')
            arr.shift()
            let x = getData(arr.join('.'), obj[key])
            return x
        }
    }
}

// console.log(getData("name", obj))
// console.log(getData("address.country.code", obj))
console.log(getData("contact.phone.work", obj))