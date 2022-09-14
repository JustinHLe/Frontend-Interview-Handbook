const inputs = [...document.getElementsByTagName("input")]
const container = document.getElementsByClassName("container")[0]
const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", handleSubmit)

inputs.forEach(el => {
    el.addEventListener("keyup", handleInput)
    el.addEventListener("paste", handlePaste)
    el.addEventListener("keydown", checkInput)
    el.addEventListener("input", onInput)
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
                el.style.border = "1px solid red"
            }
        }) 
        return;
    }
    alert(code)
    e.target.reset()
    inputs[0].focus()
}
function onInput(e){
    if(e.inputType === "insertFromPaste" && isNaN(e.target.value)){
        e.target.value = ""
    }
}
function handlePaste(e){
    let startingPoint
    let cnt = 0
    let paste = e.clipboardData.getData('text/plain');
    if(paste.match(/[0-9]/g) === null) return
    let parsedInput = paste.match(/[0-9]/g).join('').substring(0,6)
    inputs.forEach((el,index) => {
        if(el === document.activeElement) {
            startingPoint = index
        }
        // if(parsedInput[index] !== undefined){
        //     el.value = parsedInput[index]
        // }
    })
    for(let i = startingPoint; i < inputs.length; i++){
        if(parsedInput[cnt] !== undefined){
            inputs[i].value = parsedInput[cnt]
            cnt++
        }
    }
    if(startingPoint + parsedInput.length <= 6){
        inputs[startingPoint + parsedInput.length - 1].focus()
    } else {
        inputs[inputs.length - 1].focus()
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
            ctrlPressed = false
            return
        } 
    }
    if(isNaN(e.key) && e.key !== "Backspace" && e.key !== "Enter"){
        e.preventDefault()
    } 
    if(e.key === "Backspace"){
        if(e.target.value !== ""){
            e.target.value = ""
        } else {
            getPrevInput(e)
            return
        }
    } 
}
function handleInput(e){
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