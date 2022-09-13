const inputs = [...document.getElementsByTagName("input")]
const container = document.getElementsByClassName("container")[0]
const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", handleSubmit)

inputs.forEach(el => {
    el.addEventListener("keyup", handleBackwards)
    el.addEventListener("paste", handlePaste)
})



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
}
function handlePaste(e){
    let paste = e.clipboardData.getData('text/plain');
    inputs.forEach((el,index) => {
        if(paste[index] !== undefined){
            el.value = paste[index]
        }
    })
    if(paste.length < 6){
        inputs[paste.length].focus()
    }
} 
function handleBackwards(e){
    if(e.key === "Backspace"){
        getPrevInput(e)
        return
    } 
    if(e.target.value !== "" && e.key.match(/[0-9]/g)){
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