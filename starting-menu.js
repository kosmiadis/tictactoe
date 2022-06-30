const screens = []
//const btnSound = new Audio('audio/btn-sound.mp3')

//carousel for starting menu and options
const carousel = document.querySelector('.carousel')

//screens
const startingMenu = document.querySelector('.starting-menu')
const OneVSOneGameScreen = document.querySelector('.oneVSone-game-screen')
const optionsScreen = document.querySelector('.options')

//buttons
const buttons = document.querySelectorAll('button')
const optionsBtn = document.querySelector('#options')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        //btnSound.play()
    })
})
optionsBtn.addEventListener('click', e => {
    carousel.style.transform = 'translateX(-100vw)'
})


//options button
const backBtn = document.querySelector('#back')
backBtn.addEventListener('click', e => {
    carousel.style.transform = 'translateX(0%)'  
})

screens.push(startingMenu)
screens.push(OneVSOneGameScreen)


