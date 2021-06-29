import React from 'react'

import LogoSVG from '../LogoSVG/LogoSVG'
import WrongLetters from '../WrongLetters/WrongLetters'
import Notifications from '../Notifications/Notifications'



import './Game.css'


const Game = () => {
  return(
    <div className="game-container" data-test="game-container">
      <LogoSVG />
      <div className="word" id="word"></div>
      <WrongLetters />
      <Notifications />
    </div>
  )
}

export default Game