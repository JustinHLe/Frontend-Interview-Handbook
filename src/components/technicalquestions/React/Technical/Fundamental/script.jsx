import React, { ReactDOM } from "react";


/*
    create element takes three arguments
    the element
    the element's properties like className, style, href, placeholder
    The element's data
*/

// React.createElement("div", null, "Hi")
/*
    the create element method can take an array as its last arguments 
    which allows us to render multiple elements

    This is the reason why we can't return multiple elements in jsx
    we only can return one element but that one element can have multiple nested 
    inside it
*/

function App(){
    return React.createElement("div", null, [
        React.createElement("div", { style: { color: "red" } }, "hi")
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))