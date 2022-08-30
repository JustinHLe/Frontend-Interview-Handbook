const input = document.getElementsByTagName("input")

/*
    The attribute is the initial content 
    The property is the current content

    Attributes are initial information we can put on HTML elements to help initialize the element
    Properties are the actual content of the HTML element

    Attributes are defined on HTML markup
    Properties are defined on the DOM
*/
console.log(input[0].getAttribute("value")) 
console.log(input[0].value)

console.log(input[0].getAttribute('value')); // gets the initial attribute
setTimeout(() => {
    console.log(input[0].value); // Gets the property after 3 seconds
},3000)