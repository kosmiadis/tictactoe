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
        returnToMenu()
        
    }
    
}


function returnToMenu () {
    
    setTimeout(function returnToMenu () {
        carouselContainer.style.display = 'block'
        OneVSOneGameScreen.style.display = 'none'
        boxes.forEach(box => box.textContent = '')
    }, 2000)

}


//for stoping the screen moving when touchmove event occurs in mobile
document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);
