const player = document.querySelector('#player')
const playerSpan = player.querySelector('span')
const boxes = document.querySelectorAll('.box')
let startingPlayer = 'X'


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
            changePlayerOrder()
            playerSpan.textContent = startingPlayer
            
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
    
}

//for stoping the screen moving when touchmove event occurs in mobile
document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);
