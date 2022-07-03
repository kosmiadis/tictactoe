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
        if (i==0) {
            checkHorizontal(i,startingPlayer)
            checkVertical(i, startingPlayer)
        }

        if (i==3) {
            checkHorizontal(i,startingPlayer)
            checkVertical(i, startingPlayer)
        
        }
        
        if (i==6) {
            checkHorizontal(i,startingPlayer)
            checkVertical(i, startingPlayer)
        
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
        changeBoxColor(boxes[i], boxes[i+1], boxes[i+2])
        returnToMenu()
    }
}

function checkVertical (i, currentPlayer) {
    if (boxes[i].textContent == currentPlayer & boxes[i+3].textContent == currentPlayer & boxes[i+6]) {
        playerSpan.textContent = startingPlayer + ' ' + 'Won!'
        changeBoxColor(boxes[i], boxes[i+3], boxes[i+6])
        returnToMenu()
    }
}

function changeBoxColor (box1, box2, box3) {
    box1.style.backgroundColor = 'green'
    box2.style.backgroundColor = 'green'
    box3.style.backgroundColor = 'green'

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
