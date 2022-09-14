
// fetch('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=100')
// .then(res => {
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

async function fetchData(){
    let obj = {}
    const res = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=100')
    const data = await res.json()

    data.forEach(num => {
        if(obj.hasOwnProperty(num)){
            obj[num]++
        } else {
            obj[num] = 1
        }
    })
    console.log(obj)
    let xAxis = document.getElementsByClassName("x-axis")[0]
    for(const key in obj){
        let x = document.createElement(`span`)
        let content = document.createTextNode(key)
        x.style.position = "relative"
        x.appendChild(content)
        xAxis.appendChild(x)
    }
    let yAxis = document.getElementsByClassName("y-axis")[0]
    for(let i = 0; i < 4; i++){
        let y = document.createElement(`span`)
        let content = document.createTextNode(i * 10)

        y.appendChild(content)
        yAxis.appendChild(y)
    }

    let xElements = [...document.getElementsByClassName('x-axis')[0].children]
    xElements.forEach((el) => {
        let bar = document.createElement("div")
        let yHeight = yAxis.offsetHeight
        applyStyles(bar)
        applyHeight(bar, yHeight, el, obj)
        el.appendChild(bar)
    })

}

function applyStyles(bar){
    bar.style.position = "absolute"
    bar.style.bottom = "calc(100% + 4px)"
    bar.style.left = "50%"
    bar.style.transform = "translate(-50%)"
    bar.style.width = "40px"
    bar.style.backgroundColor = "grey" 
}
function applyHeight(bar, yHeight, el, obj){
    // // console.log(yHeight) //500 / 3 = 166
    // console.log(el.innerHTML, obj[el.innerHTML]) // 
    bar.style.height = `${166 * (obj[el.innerHTML]/100) * 10}px`
    // if(obj[el.innerHTML] >= 0 && obj[el.innerHTML] <= 10){
    //     //166
    //     bar.style.height = `${166 * (obj[el.innerHTML]/100) * 10}px`
    // }
    // if(obj[el.innerHTML] > 10 && obj[el.innerHTML] <= 20){
    //     //332
    //     bar.style.height = `${166 * (obj[el.innerHTML]/100) * 10}px`
    // }
    // if(obj[el.innerHTML] > 20 && obj[el.innerHTML] <= 30){
    //     //498
    //     bar.style.height = `${166 * (obj[el.innerHTML]/100) * 10}px`
    // }
}
fetchData()