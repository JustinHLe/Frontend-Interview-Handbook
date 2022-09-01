const arr = [1,2,3,4,5]


//regular loops

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


// forEach Method

arr.forEach((item, index) => {
    console.log(item)
})


//for of loop

for(let elem of arr){
    console.log(elem)
}

/*
    main benefit for using for of loop is that we can break or continue within the loop and we dont need the index to access an element
*/