const screens = []
const btnSound = new Audio('audio/btn-sound.mp3')

const body = document.body 

//carousel for starting menu and options
const carousel = document.querySelector('.carousel')

//screens
const startingMenu = document.querySelector('.starting-menu')
const OneVSOneGameScreen = document.querySelector('.oneVSone-game-screen')
const optionsScreen = document.querySelector('.options')

//buttons
const buttons = document.querySelectorAll('button')
const optionsBtn = document.querySelector('#options')

optionsBtn.addEventListener('click', e => {
    carousel.style.transform = 'translateX(-100vw)'
})

//inputs 
const themeInput = document.querySelector('#theme')
const soundInput = document.querySelector('#sound')

themeInput.addEventListener('input', e => {
    if (themeInput.value == 'dark') {
        body.setAttribute('class', 'dark')
    }

    if (themeInput.value == 'light') {
        body.setAttribute('class', 'light')
    }
})

soundInput.addEventListener('input', e => {
    if (soundInput.value == 'off') {
        buttons.forEach(button => {
            button.removeEventListener('click',  button)
        })
    }

    if (soundInput.value == 'on') {
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                btnSound.play()
            })
        })
    }
})


//options button
const backBtn = document.querySelector('#back')
backBtn.addEventListener('click', e => {
    carousel.style.transform = 'translateX(0%)'  
})

screens.push(startingMenu)
screens.push(OneVSOneGameScreen)


