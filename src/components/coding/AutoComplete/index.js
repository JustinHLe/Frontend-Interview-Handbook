const inputBox = document.getElementsByClassName("input")[0]
const modal = document.getElementsByClassName("modallookup")[0]


var interval
inputBox.addEventListener("input", handleInput)






function handleInput(e){
    if(e.target.value.length > 0){
        modal.style.display = "flex"
        if(interval){
            window.clearTimeout(interval)
        }
        interval = setTimeout(() => {
            if(e.target.value.length === 0){
                console.log("empty params")
                return
            }
            console.log(e.target.value)
            fetchData()
        }, 1000)
    } else {
        modal.style.display = "none"
    }
}

// function debounce(data, wait){
//     console.log(data)
// }

async function fetchData(){
    const response = await fetch(
        'https://parseapi.back4app.com/classes/Capitals?limit=50',
        {
          headers: {
            'X-Parse-Application-Id': '6a2NWTwXRlwc1BynCf46kYZG1VeWp170GYjZIeXK', // This is the fake app's application id
            'X-Parse-Master-Key': 'WEYdiGWSz0gt91skfDe03wX9yqikQTpiVc9Vn2An', // This is the fake app's readonly master key
          }
        }
    );
    const data = await response.json(); // Here you have the data that you need
    console.log(data)
}