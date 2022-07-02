const player = document.querySelector('#player')
const playerSpan = player.querySelector('span')
const boxes = document.querySelectorAll('.box')

play1V1Btn.addEventListener('click', e => {
    carouselContainer.style.display = 'none'
    OneVSOneGameScreen.style.display = 'flex'
    OneVSOneGameScreen.style.flexDirection = 'column'
    OneVSOneGameScreen.style.alignItems = 'center'
    initiallizeGame()
    startGame()
})

function initiallizeGame () {
    playerSpan.textContent = 'X'

}

//for stoping the screen moving when touchmove event occurs in mobile
document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);

function startGame() {
    boxes.forEach(box => {
        box.addEventListener('click', e => {
            e.target.textContent = 'X'
        })
    })
}
