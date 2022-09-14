const inputs = [...document.getElementsByTagName("input")]
const container = document.getElementsByClassName("container")[0]
const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", handleSubmit)

inputs.forEach(el => {
    el.addEventListener("keyup", handleBackwards)
    el.addEventListener("paste", handlePaste)
    el.addEventListener("keydown", checkInput)
})
var ctrlPressed = false


function handleSubmit(e) {
    e.preventDefault()
    let code = ""
    inputs.forEach((el, index, arr) => {
        code += el.value
    })
    if(code.length < 6){
        inputs.forEach((el, index, arr) => {
            if(el.value === ""){
                console.log(el)
                el.style.border = "1px solid red"
            }
        }) 
        return;
    }
    alert(code)
    e.target.reset()
    inputs[0].focus()
}
function handlePaste(e){
    console.log("paste")
    let paste = e.clipboardData.getData('text/plain');
    let parsedInput = paste.match(/[0-9]/g).join('').substring(0,6)
    inputs.forEach((el,index) => {
        if(parsedInput[index] !== undefined){
            el.value = parsedInput[index]
        }
    })
    if(parsedInput.length <= 6){
        inputs[parsedInput.length - 1].focus()
    }
} 
function checkInput(e){
    if(e.key === "Control"){
        ctrlPressed = true
    }
    /*
        If the key is not a number AND
        key is not backspace AND 
        key is not enter AND
        ctrlPressed = false
        dont add anything to input
    */
    if(ctrlPressed === true){
        if(e.key === 'v'){
            console.log("pasted")
            ctrlPressed = false
            return
        }
    }
    if(isNaN(e.key) && e.key !== "Backspace" && e.key !== "Enter"){
        e.preventDefault()
    }
}
function handleBackwards(e){
    if(e.key === "Backspace"){
        getPrevInput(e)
        return
    } 
    if(e.key.match(/[0-9]/g)){
        if(e.target.style.border === "1px solid red"){
            e.target.style.border = "1px solid black"
        }
        e.target.value = e.key
        getNextInput(e)
    }
}


function getNextInput(prev){
    inputs.forEach((el, index, arr) => {
        if(prev.target === el && index !== 5){
            console.log(arr[index + 1])
            arr[index + 1].focus()
        }
    })
}

function getPrevInput(prev){
    inputs.forEach((el, index, arr) => {
        if(prev.target === el && index !== 0){
            arr[index - 1].focus()
        }
    })
}