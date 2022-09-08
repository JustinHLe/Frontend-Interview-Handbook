let string1 = "myemail123@yahoo.com"
let string2 = "myemail123yahoo.com"
let string3 = "mye@mail@123@yahoo.com"
let string4 = "myemail123@.com"
let string5 = '" "@example.org'

function validEmail(email){
    if(!email.includes('@')) return false
    let split = email.split('@')
    if(split.length > 2){
        return false
    }
    if(split[0].match(/[A-Z,a-z,0-9]/g) == null || split[0].match(/[A-Z,a-z,0-9]/g).join('').length !== split[0].length){
        return false
    }
    let domain = split[1]
    let domainArr = domain.split('.')
    if(domainArr.length > 2) return false
    if(domainArr[0].length === 0) return false
    return true
}


console.log(validEmail(string1))
console.log(validEmail(string2))
console.log(validEmail(string3))
console.log(validEmail(string4))
console.log(validEmail(string5))