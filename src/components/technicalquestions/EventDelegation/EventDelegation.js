/*
    Event delegation is the method of placing one event listener on the parent element
    instead of each individual child element.

    Whenever the event listener is triggered, the element which was clicked on will fire and capture all 
    inner elements and once it hits the most nested child it will propagate outwards

    The benefits of using event delegation is improved memory, dont need multiple variable

*/

const p = document.getElementsByClassName("p")
const child1 = document.getElementsByClassName("child1")
const child2 = document.getElementsByClassName("child2")
const child3 = document.getElementsByClassName("child3")
const gc1 = document.getElementsByClassName("grandchild1")
const gc2 = document.getElementsByClassName("grandchild2")

console.log(p[0])

/*
    this will fire whenever the parent is clicked on and whenever any child is clicked on 
    due to event bubbling, because of this we can place only one event listener on the parent and stop
    the propagation or perform a function at whatever element is clicked on within the current DOM tree.
*/
p[0].addEventListener("click" , () => {
    console.log("hi parent")
})

/*
    p[0].addEventListener("click" , () => {
        console.log("hi parent")
    }, {useCapture: boolean})

    the event listener will take 3 parameters, the event, the function which is performed when the event is triggered,
    and a boolean value which will tell the eventlistener to either capture or bubble, default is bubble

    if capture is true, the parent elements and sub parent elements will fire first and work its way downwards
    if capture is false, the child element will fire first and the parents will follow
*/
child1[0].addEventListener("click", () => {
    console.log("hi child1")
})

child2[0].addEventListener("click", () => {
    console.log("hi child2")
})

child3[0].addEventListener("click", () => {
    console.log("hi child3")
})

gc1[0].addEventListener("click", () => { //grandchild1 child2 parent
    console.log("hi gc1")
})

gc2[0].addEventListener("click", () => {
    console.log("hi gc2")
})