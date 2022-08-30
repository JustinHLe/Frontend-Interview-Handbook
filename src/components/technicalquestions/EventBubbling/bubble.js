/*
    Event bubbling is an effect of clicking on elements within the DOM. If there are multiple elements 
    nested within each other. If an element is clicked on depending on where that element lives in the current tree
    All parent elements from that element will be clicked on as well.

    For example 

    grandparent -> parent -> child -> subchild

    child is clicked on, parent, and grandparent will be clicked on as well
    subchild is clicked on, child, parent, and grandparent will be clicked on as well

    Event bubbling only happens if there are event listeners attached to the element, depending on the event listener
    it may trigger a cascade effect
*/

const p = document.getElementsByClassName("p")
const child1 = document.getElementsByClassName("child1")
const child2 = document.getElementsByClassName("child2")
const child3 = document.getElementsByClassName("child3")
const gc1 = document.getElementsByClassName("grandchild1")
const gc2 = document.getElementsByClassName("grandchild2")


p[0].addEventListener("click" , () => {
    console.log("hi parent")
})

child1[0].addEventListener("click", () => {
    console.log("hi child1")
})

child2[0].addEventListener("click", () => {
    console.log("hi child2")
})

child3[0].addEventListener("click", () => {
    console.log("hi child3")
})

gc1[0].addEventListener("click", () => { 
    console.log("hi gc1")
})

gc2[0].addEventListener("click", () => {
    console.log("hi gc2")
})