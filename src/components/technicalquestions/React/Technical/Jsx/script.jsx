
/*
    with JSX you can render other functions as well
    A jsx fragment will allow us to render multiple elements without 
    encapsulating them into a parent element
*/

function App(){
    return (
        <div>
            <Nav/> 
            <Home/>
            <button>Click</button>
            <button>Click</button>
            <p>0</p>
        </div>
    )
}

function Nav(){
    return (
        <div>
            <h1>Logo</h1>
            <h1>Contact</h1>
            <h1>About</h1>
        </div>
    )
}

function Home(){
    return (
        <div>
            <h2>Join My Home</h2>
            <p>Lower Text</p>
            <button>Consume our products</button>
        </div>
    )
}

/*
    Babel will transform the code above into this

    function App(){
        return React.createElement(div, null, [
                React.createElement(button, null "click")
                React.createElement(button, null "click")
                React.createElement(p, null "0")
        ])
        
    }

*/

ReactDOM.render(React.createElement(App), document.querySelector("#root"))

// also can do this

ReactDOM.render(<App/>, document.querySelector("#root"))