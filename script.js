let boxOne = document.querySelector(".box-1");
let boxTwo = document.querySelector(".box-2")

function generateRandomColor(){
    let hexCharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","C","d","e","f"]

    let color = "#"

    for(let i = 0 ; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);

        color = color + hexCharacters[randomNumber]
    }
    return color
}

function handleClick(){
    let randomColor = generateRandomColor()
    boxOne.style.backgroundColor = randomColor
}

function handleMouseMove(){
    let randomColor = generateRandomColor()
    boxTwo.style.backgroundColor = randomColor
}

boxOne.addEventListener("click",handleClick)
boxTwo.addEventListener("mousemove",handleMouseMove)