const input = document.getElementsByTagName('input')
const defaultText = document.getElementsByClassName('default')
const debounceText = document.getElementsByClassName("debounce")
const throttleText = document.getElementsByClassName("throttle")
console.log(input[0])
var timeout


const updateDebounceText = debounce((text) => {
  debounceText[0].textContent = text
}, 1000)
const updateThrottleText = throttle((text) => {
  throttleText[0].textContent = text
}, 1000)
input[0].addEventListener('input', (e) => {

  defaultText[0].textContent = e.target.value
  updateDebounceText(e.target.value)
  updateThrottleText(e.target.value)
    // console.log(e.target.value)
    // const fetchData = async () => {
    //     const myData = await fetch(`https://picsum.photos/200/300`)
    //     console.log(myData)
    // }
    // if(timeout){
    //     window.clearTimeout(timeout)
    // }
    // timeout = setTimeout(() => {
    //     fetchData()
    // }, 3000)
})
/*
  Throttle will fire once when the user enters input and after every given interval
  Given an interval of 1 second, throttle will concatenate all strings that were added within that one second 
  and fire them

  dont create a new instance of the timer until one second has passed
*/
/*
  When throttle is called we immediately call our callback function and tell the throttle that we should begin throttling meaning start the timeout
  If user enters more input during the throttle we append to our current string

  Once the throttle is called if our current string is NOT empty we call our callback and reset our current string
  and we throttle again 
  Within that timeframe of throttle being called again initialized is still true we will keep adding the args to the current string
  Once the throttle is called again if our currentString is empty then we stop throttling else we recurse and try again.

  Once the throttle is called and our current string is empty we stop throttling

  Throttle should always initially call the callback function immediately and start throttling. 
  Once the throttling has started it will keep recursing if user keeps giving input. If user stops input
  then we should stop the throttle.

  If the throttle restarts we should call the callback function immediately and start throttling. etc....
*/
function throttle(func, interval){
  let current
  let initialized
  const timeoutfunc = () => {
    if(current === undefined || current === ""){
      initialized = false
    } else {
      console.log("here")
      func(current)
      current = ""
      setTimeout(timeoutfunc, interval)
    }
  }
  return function (...args){
    if(initialized === true){
      current = args
      return
    }
    func(...args)
    initialized = true

    setTimeout(timeoutfunc, interval)
  }
}
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
  