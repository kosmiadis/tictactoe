const player = document.querySelector('#player')
const playerSpan = player.querySelector('span')
const boxes = document.querySelectorAll('.box')
let startingPlayer = 'X'

play1V1Btn.addEventListener('click', e => {
    carouselContainer.style.display = 'none'
    OneVSOneGameScreen.style.display = 'flex'
    OneVSOneGameScreen.style.flexDirection = 'column'
    OneVSOneGameScreen.style.alignItems = 'center'
    initiallizeGame()
})

function initiallizeGame () {
    playerSpan.textContent = startingPlayer
    startGame()
}

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            e.target.textContent = startingPlayer
            changePlayerOrder()
            playerSpan.textContent = startingPlayer
            checkIfWin(boxes)
        })
    })
}

function changePlayerOrder () {
    if (startingPlayer == 'X') {
        startingPlayer = 'O'
    }

    else if (startingPlayer == 'O') {
        startingPlayer = 'X'
    }
    console.log(startingPlayer)
}

function checkIfWin () {
    
}

//for stoping the screen moving when touchmove event occurs in mobile
document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);
