import { Sounds } from "./sounds.js"

export function Controls ({
    buttonStop,
    buttonPlay,
    buttonFlorest,
    buttonRain,
    buttonCoffe,
    buttonFireplace,
    minutesDisplay,
    body,
    dark,
    light,
  }) {


function play() {
    buttonPlay.classList.add('hide')
    buttonStop.classList.remove('hide')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
  }
  
  function startFlorestSong(){
    buttonFlorest.classList.add('active')
    buttonRain.classList.remove('active')
    buttonCoffe.classList.remove('active')
    buttonFireplace.classList.remove('active')
  }
  
  function startRainSong(){
    buttonRain.classList.add('active')
    buttonFlorest.classList.remove('active')
    buttonCoffe.classList.remove('active')
    buttonFireplace.classList.remove('active')
  }
  
  function startCoffeSong(){
    buttonRain.classList.remove('active')
    buttonFlorest.classList.remove('active')
    buttonCoffe.classList.add('active')
    buttonFireplace.classList.remove('active')
  }
  
  function startFirePlaceSong(){
    buttonRain.classList.remove('active')
    buttonFlorest.classList.remove('active')
    buttonCoffe.classList.remove('active')
    buttonFireplace.classList.add('active')
  }

  function addTime(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2,'0')
  }
  
  function subTime(){
    let minutes = Number(minutesDisplay.textContent)
  
    if (minutes > 5){
      minutesDisplay.textContent = String(minutes - 5).padStart(2,'0')
      } else{
        alert('Não é possivel diminuir mais o tempo')
      }
  }

  function changeThemeToDark(){
    light.classList.add('hide')
    dark.classList.remove('hide')
    body.classList.add('dark')
  }

  function changeThemeToLight(){
    light.classList.remove('hide')
    dark.classList.add('hide')
    body.classList.remove('dark')
  }

  return {
    play,
    reset,
    startFlorestSong,
    startRainSong,
    startCoffeSong,
    startFirePlaceSong,
    addTime,
    subTime,
    changeThemeToDark,
    changeThemeToLight
  }
}