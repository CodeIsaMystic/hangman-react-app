import React from 'react'

import LogoSVG from '../LogoSVG/LogoSVG'
import WrongLetters from '../WrongLetters/WrongLetters'


import './Game.css'


const Game = () => {
  return(
    <div className="game-container" data-test="game-container">
      <LogoSVG />
      <div className="word" id="word"></div>
      <WrongLetters />
    </div>
  )
}

export default Game