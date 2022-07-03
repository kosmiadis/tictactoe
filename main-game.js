const player = document.querySelector('#player')
const playerSpan = player.querySelector('span')
const boxes = document.querySelectorAll('.box')
let startingPlayer = 'X'
let boxesFull = 0

play1V1Btn.addEventListener('click', e => {
    carouselContainer.style.display = 'none'
    OneVSOneGameScreen.style.display = 'flex'
    OneVSOneGameScreen.style.flexDirection = 'column'
    OneVSOneGameScreen.style.alignItems = 'center'
    playerSpan.textContent = 'X'
    //boxes.forEach(box => box.style.color = 'rgb(6, 6, 66)')
    

})
startGame()
    

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            e.target.textContent = startingPlayer
            checkIfWin()
            changePlayerOrder()
            playerSpan.textContent = startingPlayer
            boxesFull++
            
        })
        
    })
}

function changePlayerOrder () {
    let change 
    if (startingPlayer == 'O') {
        change = 'X'
    }
    else {
        change = 'O'
    }
    startingPlayer = change
    
}

function checkIfWin () {

    for (let i=0; i<=6; i++) {
        checkVertical(startingPlayer)
        if (i==0) {
            checkHorizontal(i,startingPlayer)
        }

        if (i==3) {
            checkHorizontal(i,startingPlayer)
        }
        if (i==6) {
            checkHorizontal(i,startingPlayer)
        }
    }

    if (boxesFull == 8) {
        playerSpan.textContent = 'None Won!'
        returnToMenu()
    }
    
}

function checkHorizontal(i ,currentPlayer) {
    if (boxes[i].textContent == currentPlayer & boxes[i+1].textContent == currentPlayer & boxes[i+2].textContent == currentPlayer) {
        playerSpan.textContent = startingPlayer + ' ' + 'Won!'
        changeColor(boxes[i], boxes[i+1], boxes[i+2])
        returnToMenu()
    }
}

function checkVertical (currentPlayer) {

    if (boxes[0].textContent == currentPlayer & boxes[3].textContent == currentPlayer & boxes[6].textContent == currentPlayer) {
        changeColor(boxes[0], boxes[3], boxes[6], 'green')
        returnToMenu()
    }

    else if (boxes[1].textContent == currentPlayer & boxes[4].textContent == currentPlayer & boxes[7].textContent == currentPlayer) {
        changeColor(boxes[1], boxes[4], boxes[7], 'green')
        returnToMenu()
    }      

    else if (boxes[2].textContent == currentPlayer & boxes[5].textContent == currentPlayer & boxes[8].textContent == currentPlayer) {
        changeColor(boxes[2], boxes[5], boxes[8], 'green')
        returnToMenu()
    }

}

function changeColor (box1, box2, box3, color) {
    box1.style.color = color
    box2.style.color = color
    box3.style.color = color
}

function returnToMenu () {
    setTimeout(function returnToMenu () {
        carouselContainer.style.display = 'block'
        OneVSOneGameScreen.style.display = 'none'
        boxes.forEach(box => box.textContent = '')
    }, 2000)
    boxes.forEach(box => {
        box.style.backgroundColor = currentThemeColor

    })
    
}


//for stoping the screen moving when touchmove event occurs in mobile
document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);
