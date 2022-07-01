const player = document.querySelector('#player')
const playerSpan = player.querySelector('span')
const boxes = document.querySelectorAll('.box')

play1V1Btn.addEventListener('click', e => {
    carouselContainer.style.display = 'none'
    OneVSOneGameScreen.style.display = 'flex'
    OneVSOneGameScreen.style.flexDirection = 'column'
    OneVSOneGameScreen.style.alignItems = 'center'
    OneVSOneGameScreen.style.gap = '2em'
    initiallizeGame()
})

function initiallizeGame () {
    playerSpan.textContent = 'X'
    boxes.forEach(box => box.style.backgroundColor = 'red')

}

document.addEventListener("touchmove", function (e) {e.preventDefault()}, {passive:false}
);