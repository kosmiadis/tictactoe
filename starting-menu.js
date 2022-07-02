const screens = []
const btnSound = new Audio('audio/btn-sound1.mp3')


const body = document.body 

//carousel for starting menu and options
const carousel = document.querySelector('.carousel')
const carouselContainer = document.querySelector('.carousel-container')

//screens
const startingMenu = document.querySelector('.starting-menu')
const OneVSOneGameScreen = document.querySelector('.oneVSone-game-screen')
const optionsScreen = document.querySelector('.options')

//buttons
const buttons = document.querySelectorAll('button')
const optionsBtn = document.querySelector('#options')
const play1V1Btn = document.querySelector('#oneVsone')
const returnToMenuBtn = document.querySelector('#return')

window.addEventListener('load', e => {
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            btnSound.play()
        })
    })    
   
})

optionsBtn.addEventListener('click', e => {
    carousel.style.transform = 'translateX(-100vw)'
})



returnToMenuBtn.addEventListener('click', e => {
    carouselContainer.style.display = 'block'
    OneVSOneGameScreen.style.display = 'none'
    
    boxes.forEach(box => box.textContent = '')

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
    if (soundInput.value == 'on') {
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                btnSound.play()
            })
        })
    }

    if (soundInput.value == 'off') {
        buttons.forEach(button => {
            button.addEventListener('click', e => {
               btnSound.pause()
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


