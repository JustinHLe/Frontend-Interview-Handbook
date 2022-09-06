const stars = document.getElementsByClassName("fa-star")
const starContainer = document.getElementsByClassName("starContainer")[0]
const rating = document.getElementsByClassName("rating")[0]
let starArr = [...stars]
starContainer.addEventListener("mouseover", handleMouseOver)

function handleMouseOver(e){
    console.log(e)
    const text = rating.innerHTML
    if(e.target.className.includes("checked")){
        if(e.target.nextElementSibling.className.includes("checked")){
            e.target.nextElementSibling.classList.remove("checked")
        }
        const checked = document.getElementsByClassName("checked")
        rating.innerHTML = text.substring(0, text.length - 1) + checked.length
    } else {
        if(e.target.previousElementSibling !== null){
            //has previous star
            let currentStar = e.target
            while(currentStar !== null){
                currentStar.classList.add("checked")
                currentStar = currentStar.previousElementSibling
            }
            const checked = document.getElementsByClassName("checked")
            rating.innerHTML = text.substring(0, text.length - 1) + checked.length
        } else {
            e.target.classList.add("checked")

            rating.innerHTML = text.substring(0, text.length - 1) + 1
        }
    }
}
starContainer.addEventListener("mouseleave", handleMouseLeave)

function handleMouseLeave(e){
    starArr.forEach((el) => {
        el.classList.remove("checked")
    })
    rating.innerHTML = "Current Rating: 0"
}

starContainer.addEventListener("click", (e) => {
    const checked = document.getElementsByClassName("checked")
    starContainer.removeEventListener("mouseleave", handleMouseLeave)
    starContainer.removeEventListener("mouseover", handleMouseOver)

    handleMouseClick(e)
})

function handleMouseClick(e){
    console.log(e)
    const text = rating.innerHTML
    if(e.target.className.includes("checked")){
        if(e.target.nextElementSibling !== null && e.target.nextElementSibling.className.includes("checked")){
            let currentStar = e.target.nextElementSibling
            while(currentStar !== null){
                currentStar.classList.remove("checked")
                currentStar = currentStar.nextElementSibling
            }
            // e.target.nextElementSibling.classList.remove("checked")
        }
        const checked = document.getElementsByClassName("checked")
        rating.innerHTML = text.substring(0, text.length - 1) + checked.length
    } else {
        if(e.target.previousElementSibling !== null){
            //has previous star
            let currentStar = e.target
            while(currentStar !== null){
                currentStar.classList.add("checked")
                currentStar = currentStar.previousElementSibling
            }
            const checked = document.getElementsByClassName("checked")
            rating.innerHTML = text.substring(0, text.length - 1) + checked.length
        } else {
            e.target.classList.add("checked")

            rating.innerHTML = text.substring(0, text.length - 1) + 1
        }
    }
}