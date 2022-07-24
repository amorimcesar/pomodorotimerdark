const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')

const buttonAddTime = document.querySelector('.add')
const buttonSubTime = document.querySelector('.sub')

const buttonFlorest = document.querySelector('#florest')
const volFlorest = document.querySelector('#volFlorest')
const buttonRain = document.querySelector('#rain')
const volRain = document.querySelector('#volRain')
const buttonCoffe = document.querySelector('#coffe')
const volCoffe = document.querySelector('#volCoffe')
const buttonFireplace = document.querySelector('#fireplace')
const volFireplace = document.querySelector('#volFireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const body = document.querySelector('body')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudioFlorest = new Audio("assets/Floresta.wav")
const bgAudioRain = new Audio("assets/Chuva.wav")
const bgAudioCoffe = new Audio("assets/Cafeteria.wav")
const bgAudioFirePlace = new Audio("assets/Lareira.wav")

export const elements = {
    buttonPlay,
    buttonStop,
    buttonAddTime,
    buttonSubTime,
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFireplace,
    minutesDisplay,
    secondsDisplay,
    body,
    dark,
    light,
    volFlorest,
    volRain,
    volCoffe,
    volFireplace,
    buttonPressAudio,
    kitchenTimer,
    bgAudioFlorest,
    bgAudioRain,
    bgAudioCoffe,
    bgAudioFirePlace,
  }
