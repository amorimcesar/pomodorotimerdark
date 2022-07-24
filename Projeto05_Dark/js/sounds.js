import { elements } from "./elements.js"

const {
  buttonPressAudio,
  kitchenTimer,
  bgAudioFlorest,
  bgAudioRain,
  bgAudioCoffe,
  bgAudioFirePlace
} = elements

export function Sounds() {

  bgAudioFlorest.loop = true;
  bgAudioRain.loop = true;
  bgAudioCoffe.loop = true;
  bgAudioFirePlace.loop = true;
 
  function pressButton () {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function bgAudioFlorestStart() {
    bgAudioFlorest.play()    
  }

  function bgAudioFlorestPause() {
    bgAudioFlorest.pause()
  }

  function bgAudioRainStart() {
    bgAudioRain.play()
  }

  function bgAudioRainPause() {
    bgAudioRain.pause()
  }

  function bgAudioCoffeStart() {
    bgAudioCoffe.play()
  }

  function bgAudioCoffePause() {
    bgAudioCoffe.pause()
  }

  function bgAudioFirePlaceStart() {
    bgAudioFirePlace.play()
  }
  
  function bgAudioFirePlacePause() {
    bgAudioFirePlace.pause()
  }

  return {
    pressButton,
    timeEnd,
    bgAudioFlorestStart,
    bgAudioFlorestPause,
    bgAudioRainStart,
    bgAudioRainPause,
    bgAudioCoffeStart,
    bgAudioCoffePause,
    bgAudioFirePlaceStart,
    bgAudioFirePlacePause
  }
}