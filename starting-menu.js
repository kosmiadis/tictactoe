const screens = []
const btnSound = new Audio('audio/btn-sound1.mp3')

const startingMenu = document.querySelector('.starting-menu')
const OneVSOneGameScreen = document.querySelector('.oneVSone-game-screen')
const optionsBtn = document.querySelector('#options')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        btnSound.play()
    })
})
optionsBtn.addEventListener('click', e => {
    
})
screens.push(startingMenu)
screens.push(OneVSOneGameScreen)

//screens.forEach(screen => console.log(screen))


