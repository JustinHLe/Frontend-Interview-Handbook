const input = document.getElementsByTagName('input')
console.log(input[0])
var timeout


input[0].addEventListener('input', (e) => {
    console.log(e.target.value)
    const fetchData = async () => {
        const myData = await fetch(`https://picsum.photos/200/300`)
        console.log(myData)
    }
    if(timeout){
        window.clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
        fetchData()
    }, 3000)
})


function debounce(func, wait) {
    /*
        Declare timeout variable this variable will still be accessible even after
        the function returns due to closures
    */
    var timeout 

    /*
        debounce function returns another function which takes in a set amount of arguments
        if there is a timeout already declared then window will clear 
        else we set the timeout variable from the closure to a new instance of timeout

        if the return function is called again it checks for timeout if there is a timeout
        it gets cleared and timeout is reset 

        even if timeout has already ended timeout is still pointing to the setTimeout instance
        so if the function gets called again it will clear the timeout effectively doing nothing
        since the previous already ended
    */
    return function(...args){
      if(timeout){
        window.clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        func(args)
      }, wait)
    }
  }
  